import { useEffect, useState } from 'react';
import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import calculateExperience from 'components/utils/calculateExperience';
import Image from 'next/image';

const AboutSection = () => {
    const [experience, setExperience] = useState('1+');

    useEffect(() => {
        setExperience(calculateExperience('2024-05-06'));
    }, []);
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
                                src={'/images/maurya-image-two.jpg'}
                                alt="main-image"
                                className="object-cover object-center rounded-lg bg-primary"
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
                            experience, based in Ahmedabad, India. I specialize
                            in creating clean, responsive, and user-friendly web
                            interfaces. Currently working at Krishaweb, I build
                            modern frontends using HTML, CSS, SCSS, Tailwind
                            CSS, React, and Next.js — delivering fast, accessible
                            web experiences across multiple client projects.
                        </p>
                        <p className="text-grey text-lg md:text-xl font-semibold pb-5 text-center md:text-left">
                            With hands-on knowledge of Node.js, MongoDB, and
                            Sequelize, I understand full-stack workflows and
                            collaborate effectively with backend teams to ship
                            complete, production-ready features. I hold a B.Tech
                            in Information Technology from Charusat University
                            (2024) and am continuously expanding my skill set
                            through real-world projects and certifications.
                        </p>
                    </div>
                </div>
            </div>
        </CommonSectionWrapper>
    );
};
export default AboutSection;
