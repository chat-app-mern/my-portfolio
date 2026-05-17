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
            description="Crafting intuitive and high-performance web experiences."
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
                        <div className="pb-[70%] relative bg-white rounded-lg">
                            <Image
                                src={'/images/about-image.png'}
                                alt="main-image"
                                className="object-contain w-full max-w-[400px] mx-auto"
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
                        <p className="text-grey text-lg md:text-xl font-medium pb-5 text-center md:text-left leading-relaxed">
                            I'm a Frontend Developer based in Ahmedabad, India, with {experience} years of experience. At Krishaweb, I focus on building clean, responsive web interfaces using React, Next.js, and Tailwind CSS.
                        </p>
                        <p className="text-grey text-lg md:text-xl font-medium pb-5 text-center md:text-left leading-relaxed">
                            I also have a solid understanding of backend workflows with Node.js and MongoDB. I hold a B.Tech in IT from Charusat University (2024) and enjoy working closely with teams to ship high-quality products.
                        </p>
                    </div>
                </div>
            </div>
        </CommonSectionWrapper>
    );
};

export default AboutSection;
