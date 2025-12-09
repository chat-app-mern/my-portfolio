/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    env: {
        NEXT_PUBLIC_FORM_KEY: process.env.NEXT_PUBLIC_FORM_KEY,
        NEXT_PUBLIC_FORM_API_URL: process.env.NEXT_PUBLIC_FORM_API_URL,
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY:
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
        NEXT_GOOGLE_SITE_VERIFICATION:
            process.env.NEXT_GOOGLE_SITE_VERIFICATION,
        NEXT_PORTFOLIO_WEBSITE_URL: process.env.NEXT_PORTFOLIO_WEBSITE_URL,
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};
export default nextConfig;
