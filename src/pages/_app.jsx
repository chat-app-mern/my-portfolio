import MainLayout from 'components/layouts/MainLayout/MainLayout';
import dynamic from 'next/dynamic';
import '../styles/font.css';
import '../styles/globals.css';

const ToastProvider = dynamic(
    () => import('components/wrappers/ToastWrapper/ToastWrapper'),
    {
        ssr: false,
    },
);

function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <Component {...pageProps} />
            <ToastProvider />
        </MainLayout>
    );
}
export default MyApp;
