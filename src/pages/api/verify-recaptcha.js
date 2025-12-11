import { Readable } from 'stream';
import Busboy from 'busboy';

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
        return res.status(405).json({
            success: false,
            message: 'Method not allowed',
        });
    }

    try {
        const fields = await parseFormData(req);
        const token = fields.token;

        if (!token) {
            return res.status(400).json({
                success: false,
                message: 'reCAPTCHA token is required',
            });
        }

        const recaptchaFormData = new URLSearchParams();
        recaptchaFormData.append('secret', process.env.RECAPTCHA_SECRET_KEY);
        recaptchaFormData.append('response', token);

        const recaptchaRes = await fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
                method: 'POST',
                body: recaptchaFormData,
            },
        );

        const recaptchaData = await recaptchaRes.json();

        if (!recaptchaData.success) {
            return res.status(400).json({
                success: false,
                message: 'Verification failed. Please try again.',
            });
        }

        if (recaptchaData.score && recaptchaData.score < 0.5) {
            return res.status(400).json({
                success: false,
                message: 'Your request looks unusual. Please try again.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Verification successful',
            data: {
                recaptchaScore: recaptchaData.score,
            },
        });
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong. Please try again.',
        });
    }
}
