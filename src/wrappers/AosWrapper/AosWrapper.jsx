import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosWrapper = ({ children }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
            });
        }
    }, []);

    return <>{children}</>;
};

export default AosWrapper;
