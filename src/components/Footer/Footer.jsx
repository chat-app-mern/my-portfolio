import links from 'components/utils/links';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();

    const scrollToSection = (sectionId) => {
        if (router.pathname !== '/') {
            router.push('/').then(() => {
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        const yOffset = -68;
                        const y =
                            element.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }, 500);
            });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const yOffset = -68;
                const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="bg-lightBlack py-10">
            <footer>
                <div className="container">
                    <div className="flex justify-between md:items-center gap-8 md:gap-12 flex-col">
                        <div>
                            <Link
                                href={'/'}
                                className="text-primary font-bold text-3xl"
                            >
                                MS
                            </Link>
                        </div>
                        <div>
                            <nav>
                                <ul className="flex gap-8 md:gap-14 flex-wrap md:items-center flex-col md:flex-row">
                                    <li>
                                        <button
                                            onClick={() =>
                                                scrollToSection('banner')
                                            }
                                            className="text-xl font-medium text-grey transition-all duration-300 ease-in-out hover:text-primary cursor-pointer"
                                        >
                                            Home
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() =>
                                                scrollToSection('about')
                                            }
                                            className="text-xl font-medium text-grey transition-all duration-300 ease-in-out hover:text-primary cursor-pointer"
                                        >
                                            About
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() =>
                                                scrollToSection('projects')
                                            }
                                            className="text-xl font-medium text-grey transition-all duration-300 ease-in-out hover:text-primary cursor-pointer"
                                        >
                                            Projects
                                        </button>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-xl font-medium text-grey transition-all duration-300 ease-in-out hover:text-primary"
                                            href="/contact-me"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            <Link
                                href={links.linkedin}
                                className="h-10 w-10 border border-grey hover:border-primary transition-all ease-in-out duration-300 rounded-full inline-flex items-center justify-center p-2 cursor-pointer"
                                target="_blank"
                                aria-label="LinkedIn profile"
                            >
                                <Image
                                    height={18}
                                    width={18}
                                    src={'/images/linkedin.svg'}
                                    alt="social-link"
                                    className="w-full h-full object-contain"
                                />
                            </Link>
                            <Link
                                href={links.mail}
                                aria-label="Email contact"
                                className="h-10 w-10 border border-grey hover:border-primary transition-all ease-in-out duration-300 rounded-full inline-flex items-center justify-center p-2 cursor-pointer"
                            >
                                <Image
                                    height={18}
                                    width={18}
                                    src={'/images/mail.svg'}
                                    alt="social-link"
                                    className="w-full h-full object-contain"
                                />
                            </Link>
                            <Link
                                href={links.instagram}
                                className="h-10 w-10 border border-grey hover:border-primary transition-all ease-in-out duration-300 rounded-full inline-flex items-center justify-center p-2 cursor-pointer"
                                target="_blank"
                                aria-label="Instagram profile"
                            >
                                <Image
                                    height={18}
                                    width={18}
                                    src={'/images/instagram.svg'}
                                    alt="social-link"
                                    className="w-full h-full object-contain"
                                />
                            </Link>
                            <Link
                                href={links.credly}
                                className="h-10 w-10 border border-grey hover:border-primary transition-all ease-in-out duration-300 rounded-full inline-flex items-center justify-center p-2 cursor-pointer"
                                target="_blank"
                                aria-label="Credly profile"
                            >
                                <Image
                                    height={18}
                                    width={18}
                                    src={'/images/credly.svg'}
                                    alt="social-link"
                                    className="w-full h-full object-contain"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
