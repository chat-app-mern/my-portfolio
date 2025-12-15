import Handlebars from 'handlebars';
import Busboy from 'busboy';
import fs from 'fs';
import path from 'path';
import { contactFormServerSchema } from 'components/validations/contactForm.validation';
import { connectToDatabase } from 'components/utils/mongodb';
import mailer from 'components/utils/mailer';

async function parseFormData(req) {
    return new Promise((resolve, reject) => {
        const fields = {};
        const bb = Busboy({ headers: req.headers });

        bb.on('field', (fieldname, val) => {
            fields[fieldname] = val;
        });

        bb.on('close', () => {
            resolve(fields);
        });

        bb.on('error', reject);

        if (req.body instanceof Buffer) {
            bb.write(req.body);
        } else if (typeof req.body === 'string') {
            bb.write(Buffer.from(req.body));
        }
        bb.end();
    });
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res
            .status(405)
            .json({ success: false, message: 'Method not allowed' });
    }

    try {
        const fields = await parseFormData(req);
        const { name, email, subject, message } = fields;

        const validationResult = contactFormServerSchema.safeParse({
            name,
            email,
            subject,
            message,
        });

        if (!validationResult.success) {
            const errors = {};
            validationResult.error.errors.forEach((error) => {
                const field = error.path[0];
                if (!errors[field]) errors[field] = error.message;
            });

            return res.status(400).json({
                success: false,
                message: 'Please fix the errors below',
                errors,
            });
        }

        const validatedData = validationResult.data;

        const { db } = await connectToDatabase();
        const contacts = db.collection('contacts');
        const doc = {
            name: validatedData.name.trim(),
            email: validatedData.email.trim(),
            subject: validatedData.subject.trim(),
            message: validatedData.message.trim(),
            createdAt: new Date(),
        };

        await contacts.insertOne(doc);

        // -----------------------------
        // Send emails BEFORE responding
        // -----------------------------
        const receiverTemplatePath = path.join(
            process.cwd(),
            'src',
            'email-templates',
            'contact.hbs',
        );
        const senderTemplatePath = path.join(
            process.cwd(),
            'src',
            'email-templates',
            'contact-sender.hbs',
        );

        const receiverTemplateSource = fs.readFileSync(
            receiverTemplatePath,
            'utf-8',
        );
        const senderTemplateSource = fs.readFileSync(
            senderTemplatePath,
            'utf-8',
        );

        const receiverTemplate = Handlebars.compile(receiverTemplateSource);
        const senderTemplate = Handlebars.compile(senderTemplateSource);

        const receiverHtml = receiverTemplate({
            ...doc,
            createdAt: doc.createdAt.toLocaleDateString(),
        });
        const senderHtml = senderTemplate({
            ...doc,
            createdAt: doc.createdAt.toLocaleDateString(),
        });

        try {
            await mailer(
                process.env.CONTACT_EMAIL || process.env.MAILER_EMAIL,
                `New contact: ${doc.subject}`,
                doc.message,
                receiverHtml,
            );

            await mailer(
                doc.email,
                'We received your message',
                `Thank you for contacting us. We received your message: "${doc.subject}" and will get back to you soon.`,
                senderHtml,
            );
        } catch (emailError) {
            console.error(
                'Email sending error:',
                emailError.message,
                emailError,
            );
        }

        // Send API response AFTER emails
        return res.status(200).json({
            success: true,
            message: 'Form submitted successfully',
        });
    } catch (error) {
        console.error('Contact API error:', error.message, error);
        return res.status(500).json({
            success: false,
            message: error.message || 'Server error occurred',
        });
    }
}
