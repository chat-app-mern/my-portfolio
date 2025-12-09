import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function ReCaptchaProviderWrapper({ children }) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            scriptProps={{
                async: true,
                defer: true,
                appendTo: 'head',
                nonce: undefined,
            }}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
}
export default ReCaptchaProviderWrapper;
