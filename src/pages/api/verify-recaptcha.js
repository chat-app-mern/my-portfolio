export default async function handler(req, res) {
    if (req.method !== 'POST') {
        console.log('❌ Method not allowed:', req.method);
        return res.status(405).json({
            success: false,
            message: 'Method not allowed',
        });
    }

    console.log('\n=== reCAPTCHA Verification Request ===');
    console.log('Timestamp:', new Date().toISOString());

    try {
        const { token } = req.body;

        if (!token) {
            console.log('❌ Missing reCAPTCHA token');
            return res.status(400).json({
                success: false,
                message: 'reCAPTCHA token is required',
            });
        }

        console.log('🔒 Verifying reCAPTCHA token...');

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

        console.log('reCAPTCHA Response:', {
            success: recaptchaData.success,
            score: recaptchaData.score,
            action: recaptchaData.action,
        });

        if (!recaptchaData.success) {
            console.log('❌ reCAPTCHA verification failed');
            return res.status(400).json({
                success: false,
                message: 'Verification failed. Please try again.',
            });
        }

        if (recaptchaData.score && recaptchaData.score < 0.5) {
            console.log('❌ reCAPTCHA score too low:', recaptchaData.score);
            return res.status(400).json({
                success: false,
                message: 'Your request looks unusual. Please try again.',
            });
        }

        console.log('✅ reCAPTCHA verification successful');
        console.log('=== Request Completed ===\n');

        return res.status(200).json({
            success: true,
            message: 'Verification successful',
            data: {
                recaptchaScore: recaptchaData.score,
            },
        });
    } catch (error) {
        console.error('❌ Server error:', error);
        console.log('=== Request Failed ===\n');
        return res.status(500).json({
            success: false,
            message: 'Something went wrong. Please try again.',
        });
    }
}
