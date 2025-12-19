import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import calculateExperience from 'components/utils/calculateExperience';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
    const experience = calculateExperience('2024-05-06');
    return (
        <CommonSectionWrapper
            description="Frontend Development — creating clean and interactive web experiences."
            title={'About Me'}
            sectionId="about"
        >
            <div className="flex flex-wrap -mx-4 items-center gap-7 lg:gap-0">
                <div
                    className="w-full lg:w-6/12 px-4"
                    data-aos="fade-right"
                    data-aos-delay="400"
                >
                    <div className="">
                        <div className="pb-[85%] relative">
                            <Image
                                src={'/images/maurya-image-two.webp'}
                                alt="main-image"
                                className="object-cover rounded-lg bg-primary"
                                fill
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="w-full lg:w-6/12 px-4"
                    data-aos="fade-left"
                    data-aos-delay="400"
                >
                    <div>
                        <p className="text-grey text-lg md:text-xl font-semibold pb-5 text-center md:text-left">
                            A Frontend Developer with {experience} years of
                            experience, skilled in creating clean, responsive,
                            and user-friendly web interfaces. I work confidently
                            with HTML, CSS, SCSS, Tailwind, React, and Next.js
                            to build modern and smooth frontends. With hands-on
                            knowledge of Node.js, MongoDB, and Sequelize, I
                            understand full-stack workflows and build features
                            that connect perfectly from UI to backend. I also
                            developed and published an npm package,
                            VideoTrimmer, a lightweight tool for trimming videos
                            directly in the browser. I focus on clean design,
                            problem-solving, and delivering polished digital
                            experiences.
                        </p>
                        <div className="text-center md:text-left">
                            <Link
                                href={'/about-my-npm-package'}
                                className="btn outline"
                            >
                                About My NPM Package
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </CommonSectionWrapper>
    );
};
export default AboutSection;
