import BannerSection from 'components/sections/BannerSection/BannerSection';
import AboutSection from 'components/sections/AboutSection/AboutSection';
import SkillsSection from 'components/sections/SkillsSection/SkillsSection';
import TimelineSection from 'components/sections/TimelineSection/TimelineSection';
import ProjectsSection from 'components/sections/ProjectsSection/ProjectsSection';
import CommonHead from 'components/components/CommonHead/CommonHead';

export default function HomePage() {
    const metaHome = {
        title: 'Maurya Soni | Frontend Developer',
        description:
            'I am a Frontend Developer specializing in building responsive, user-friendly, and modern web interfaces using React, JavaScript, and UI best practices.',
        keywords:
            'Frontend Developer, React Developer, Web Developer, UI Developer, JavaScript Developer, Portfolio, Maurya Soni',
        og: {
            title: 'Maurya Soni | Frontend Developer',
            description:
                'Explore the portfolio of Maurya Soni, a Frontend Developer crafting modern and high-performance user interfaces.',
            image: '/images/maurya-image-one.jpg',
        },
    };
    return (
        <>
            <CommonHead metaData={metaHome} />
            <BannerSection />
            <AboutSection />
            <SkillsSection />
            <TimelineSection />
            <ProjectsSection />
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 3600,
    };
}
