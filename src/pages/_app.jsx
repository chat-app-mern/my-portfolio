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
        ssr: true,
    },
);

const ToastProvider = dynamic(
    () => import('components/wrappers/ToastWrapper/ToastWrapper'),
    {
        ssr: true,
    },
);

function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <AosWrapper>
                <Component {...pageProps} />
                <ToastProvider />
            </AosWrapper>
            <SpeedInsights />
            <Analytics />
        </MainLayout>
    );
}

export default MyApp;
