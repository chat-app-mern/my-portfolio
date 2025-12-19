import MainLayout from 'components/layouts/MainLayout/MainLayout';
import dynamic from 'next/dynamic';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import '../styles/font.css';
import '../styles/globals.css';
import 'aos/dist/aos.css';

const AosWrapper = dynamic(
    () => import('components/wrappers/AosWrapper/AosWrapper'),
    {
        ssr: false,
    },
);

const ToastProvider = dynamic(
    () => import('components/wrappers/ToastWrapper/ToastWrapper'),
    {
        ssr: false,
    },
);

function MyApp({ Component, pageProps }) {
    return (
        <AosWrapper>
            <MainLayout>
                <Component {...pageProps} />
                <ToastProvider />
            </MainLayout>
            <SpeedInsights />
            <Analytics />
        </AosWrapper>
    );
}

export default MyApp;
