'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
    }, [mobileOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const scrollToSection = (sectionId) => {
        const scrollAction = () => {
            const element = document.getElementById(sectionId);
            if (element) {
                const yOffset = -68;
                const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        };
        if (router.pathname !== '/') {
            router.push('/').then(() => {
                setTimeout(scrollAction, 400);
            });
        } else {
            scrollAction();
        }
        setMobileOpen(false);
    };

    return (
        <div className="relative z-20 h-[68px]">
            <header className="bg-black py-4 fixed w-full shadow-[0_4px_10px_rgb(149_149_149_/_0.08)]">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/"
                            className="text-primary font-bold text-3xl"
                        >
                            MS
                        </Link>
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="md:hidden text-grey"
                            aria-label="Open menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_431_73)">
                                    <path
                                        d="M4 6H20"
                                        stroke="#959595"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4 12H20"
                                        stroke="#959595"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4 18H20"
                                        stroke="#959595"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_431_73">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <nav className="hidden md:block">
                            <ul className="flex gap-14 items-center">
                                <li>
                                    <button
                                        onClick={() =>
                                            scrollToSection('banner')
                                        }
                                        className="text-xl font-medium text-grey hover:text-primary transition"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('about')}
                                        className="text-xl font-medium text-grey hover:text-primary transition"
                                    >
                                        About
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            scrollToSection('projects')
                                        }
                                        className="text-xl font-medium text-grey hover:text-primary transition"
                                    >
                                        Projects
                                    </button>
                                </li>
                                <li>
                                    <Link
                                        href="/contact-me"
                                        className="text-xl font-medium text-grey hover:text-primary transition"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {mobileOpen && (
                            <div
                                ref={menuRef}
                                className="fixed top-0 right-0 h-screen w-[260px] bg-black p-6 shadow-lg md:hidden animate-slideIn"
                            >
                                <div className="flex justify-end pb-6">
                                    <button
                                        onClick={() => setMobileOpen(false)}
                                        aria-label="Close menu"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_431_84)">
                                                <path
                                                    d="M18 6L6 18"
                                                    stroke="#959595"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M6 6L18 18"
                                                    stroke="#959595"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_431_84">
                                                    <rect
                                                        width="24"
                                                        height="24"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>

                                <nav>
                                    <ul className="flex flex-col gap-y-6">
                                        <li>
                                            <button
                                                onClick={() =>
                                                    scrollToSection('banner')
                                                }
                                                className="text-xl font-medium text-grey hover:text-primary transition"
                                            >
                                                Home
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    scrollToSection('about')
                                                }
                                                className="text-xl font-medium text-grey hover:text-primary transition"
                                            >
                                                About
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    scrollToSection('projects')
                                                }
                                                className="text-xl font-medium text-grey hover:text-primary transition"
                                            >
                                                Projects
                                            </button>
                                        </li>
                                        <li>
                                            <Link
                                                href="/contact-me"
                                                className="text-xl font-medium text-grey hover:text-primary transition"
                                                onClick={() =>
                                                    setMobileOpen(false)
                                                }
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};
export default Header;
