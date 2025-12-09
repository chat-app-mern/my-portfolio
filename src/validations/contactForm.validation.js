import { z } from 'zod';

const NAME_PATTERN = /^[a-zA-Z\s'-]+$/;
const SQL_INJECTION_PATTERN =
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|SCRIPT|JAVASCRIPT|ONERROR|ONLOAD)\b|--|;|'|"|<|>|\\|\*|\/\*|\*\/)/i;
const XSS_PATTERN =
    /(<script|<iframe|javascript:|onerror=|onload=|<img|<object|<embed)/i;

const sanitizeString = (value, fieldName) => {
    if (SQL_INJECTION_PATTERN.test(value)) {
        throw new Error(`${fieldName} contains invalid characters`);
    }
    if (XSS_PATTERN.test(value)) {
        throw new Error(`${fieldName} contains invalid content`);
    }
    return true;
};

export const contactFormSchema = z.object({
    name: z
        .string({ required_error: 'Please enter your name' })
        .trim()
        .min(1, 'Please enter your name')
        .min(2, 'Name should be at least 2 characters long')
        .max(50, 'Name is too long. Please keep it under 50 characters')
        .regex(
            NAME_PATTERN,
            'Please use only letters, spaces, hyphens, and apostrophes in your name',
        )
        .refine((val) => sanitizeString(val, 'Name'), {
            message:
                'Your name contains characters that are not allowed. Please remove any special symbols',
        }),

    email: z
        .string({ required_error: 'Please enter your email address' })
        .trim()
        .min(1, 'Please enter your email address')
        .email(
            "This doesn't look like a valid email address. Please check and try again",
        )
        .max(100, 'Email address is too long. Please use a shorter one')
        .refine((val) => sanitizeString(val, 'Email'), {
            message: 'Email contains characters that are not allowed',
        })
        .toLowerCase(),

    subject: z
        .string({ required_error: 'Please enter a subject' })
        .trim()
        .min(1, 'Please enter a subject')
        .min(
            5,
            'Subject should be at least 5 characters to help us understand your message',
        )
        .max(100, 'Subject is too long. Please keep it under 100 characters')
        .refine((val) => sanitizeString(val, 'Subject'), {
            message:
                'Subject contains characters that are not allowed. Please remove any special symbols',
        }),

    message: z
        .string({ required_error: 'Please enter your message' })
        .trim()
        .min(1, 'Please enter your message')
        .min(
            20,
            'Please provide more details. Your message should be at least 20 characters',
        )
        .max(
            1000,
            'Your message is too long. Please keep it under 1000 characters',
        )
        .refine((val) => sanitizeString(val, 'Message'), {
            message:
                'Your message contains content that is not allowed. Please remove any special symbols or code',
        }),
});

export const contactFormServerSchema = contactFormSchema.extend({
    name: z
        .string()
        .min(2)
        .max(50)
        .regex(NAME_PATTERN)
        .refine((val) => {
            const trimmed = val.trim();
            if (trimmed.length < 2) return false;
            if (/\s{3,}/.test(trimmed)) return false;
            return sanitizeString(trimmed, 'Name');
        }),
});
