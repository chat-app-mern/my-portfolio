import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosWrapper = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            disable: () => window.innerWidth <= 1280,
        });

        const handleResize = () => {
            AOS.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>{children}</>;
};
export default AosWrapper;
