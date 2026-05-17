import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import SkillCard from 'components/components/SkillCard/SkillCard';

const SkillsSection = () => {
    const skillsData = [
        {
            id: 1,
            name: 'HTML',
            image: '/images/html.png',
            description:
                'Building semantic, accessible, and well-structured foundations for web pages.',
        },
        {
            id: 2,
            name: 'CSS',
            image: '/images/css.png',
            description:
                'Creating responsive, visually appealing layouts using Flexbox, Grid, and SCSS.',
        },
        {
            id: 3,
            name: 'Javascript',
            image: '/images/js.png',
            description:
                'Writing clean, modern ES6+ code to bring interfaces to life with dynamic interactions.',
        },
        {
            id: 4,
            name: 'Tailwind CSS',
            image: '/images/tailwind-css.png',
            description:
                'Styling beautiful, responsive interfaces efficiently using utility classes.',
        },
        {
            id: 5,
            name: 'ReactJS',
            image: '/images/react.png',
            description:
                'Developing modular, high-performance applications using modern hooks and state management.',
        },
        {
            id: 6,
            name: 'NodeJS',
            image: '/images/node-js.png',
            description:
                'Building scalable backend services and REST APIs to power full-stack applications.',
        },
    ];
    return (
        <CommonSectionWrapper
            title={'Skills'}
            description={
                'The core technologies and tools I use to build modern web applications.'
            }
            sectionId={'skills'}
        >
            <div className="flex flex-wrap -mx-4 gap-y-10 justify-center">
                {skillsData.map((skill) => (
                    <SkillCard
                        key={skill.id}
                        name={skill.name}
                        image={skill.image}
                        description={skill.description}
                    />
                ))}
            </div>
        </CommonSectionWrapper>
    );
};
export default SkillsSection;
