import calculateExperience from 'components/utils/calculateExperience';
import links from 'components/utils/links';
import Image from 'next/image';
import Link from 'next/link';

const BannerSection = () => {
    const experience = calculateExperience('2024-05-06');
    return (
        <section className="section-padding-bottom" id="banner">
            <div className="container">
                <div className="flex flex-wrap -mx-4 items-center gap-7 lg:gap-0">
                    <div
                        className="w-full lg:w-6/12 px-4"
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        <div className="pt-10 lg:py-14">
                            <p className="text-grey text-center md:text-left text-xl md:text-2xl font-semibold pb-2.5">
                                Hi I am
                            </p>
                            <p className="text-lightGrey text-center md:text-left text-2xl md:text-3xl font-bold">
                                Maurya Soni
                            </p>
                            <h1 className="text-primary font-black text-center md:text-left text-4xl md:text-5xl py-6 uppercase">
                                Frontend Developer
                            </h1>
                            <div>
                                <div className="flex flex-wrap justify-center md:justify-start gap-5">
                                    <Link
                                        href={links.linkedin}
                                        aria-label="linkedin-profile-link"
                                        target="_blank"
                                        className="h-10 w-10 border border-grey hover:border-primary transition-all ease-in-out duration-300 rounded-full inline-flex items-center justify-center p-2 cursor-pointer"
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
                                        aria-label="mail-profile-link"
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
                                        target="_blank"
                                        aria-label="instagram-profile-link"
                                        className="h-10 w-10 border border-grey hover:border-primary transition-all ease-in-out duration-300 rounded-full inline-flex items-center justify-center p-2 cursor-pointer"
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
                                        target="_blank"
                                        aria-label="credly-profile-link"
                                        className="h-10 w-10 border border-grey hover:border-primary transition-all ease-in-out duration-300 rounded-full inline-flex items-center justify-center p-2 cursor-pointer"
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
                                <div className="text-center md:text-left py-6 md:py-10">
                                    <Link
                                        href={'/contact-me'}
                                        className="btn outline"
                                    >
                                        Contact Me
                                    </Link>
                                </div>
                                <div className="block md:inline-block">
                                    <div className="bg-lightBlack p-6 rounded-lg w-full">
                                        <div className="pb-3 text-2xl text-primary font-extrabold">
                                            {experience}
                                        </div>
                                        <div className="text-xl font-bold text-grey">
                                            Experience
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full lg:w-6/12 px-4"
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        <div className="lg:py-5">
                            <div className="pb-[85%] relative">
                                <Image
                                    src={'/images/maurya-image-one.jpg'}
                                    alt="main-image"
                                    className="object-cover object-center rounded-lg bg-primary"
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
