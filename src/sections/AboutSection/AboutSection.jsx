import { useEffect, useState } from 'react';
import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import calculateExperience from 'components/utils/calculateExperience';

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
            <div className="mx-auto max-w-4xl px-4">
                <div className="w-full text-center" data-aos="fade-up" data-aos-delay="400">
                    <p
                        className="text-grey text-lg md:text-xl font-medium pb-5 leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="450"
                    >
                        I'm a Frontend Developer based in Ahmedabad, India, with {experience} years of experience. At Krishaweb, I focus on building clean, responsive web interfaces using React, Next.js, and Tailwind CSS.
                    </p>
                    <p
                        className="text-grey text-lg md:text-xl font-medium pb-5 leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="550"
                    >
                        I also have a solid understanding of backend workflows with Node.js and MongoDB. I hold a B.Tech in IT from Charusat University (2024) and enjoy working closely with teams to ship high-quality products.
                    </p>
                </div>
            </div>
        </CommonSectionWrapper>
    );
};

export default AboutSection;
