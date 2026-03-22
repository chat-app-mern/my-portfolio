import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import SkillCard from 'components/components/SkillCard/SkillCard';

const SkillsSection = () => {
    const skillsData = [
        {
            id: 1,
            name: 'HTML',
            image: '/images/html.png',
            description:
                'Semantic HTML5 markup for accessible, well-structured web pages that rank well in search engines.',
        },
        {
            id: 2,
            name: 'CSS',
            image: '/images/css.png',
            description:
                'Advanced CSS3 including Flexbox, Grid, animations, and SCSS for scalable and maintainable stylesheets.',
        },
        {
            id: 3,
            name: 'Javascript',
            image: '/images/js.png',
            description:
                'Modern ES6+ JavaScript for interactive UIs, async data fetching, and dynamic client-side functionality.',
        },
        {
            id: 4,
            name: 'Tailwind CSS',
            image: '/images/tailwind-css.png',
            description:
                'Utility-first CSS framework for rapidly building custom, responsive designs without leaving JSX.',
        },
        {
            id: 5,
            name: 'ReactJS',
            image: '/images/react.png',
            description:
                'Component-based UI development with React hooks, context, and state management for fast, reusable interfaces.',
        },
        {
            id: 6,
            name: 'NodeJS',
            image: '/images/node-js.png',
            description:
                'Server-side JavaScript with Node.js and Express for building REST APIs and full-stack MERN applications.',
        },
    ];
    return (
        <CommonSectionWrapper
            title={'Skills'}
            description={
                'Frontend Development — skilled in building clean, responsive, and interactive user interfaces.'
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
