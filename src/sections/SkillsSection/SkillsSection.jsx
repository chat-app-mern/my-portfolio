import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import SkillCard from 'components/components/SkillCard/SkillCard';

const SkillsSection = () => {
    const skillsData = [
        {
            id: 1,
            name: 'HTML',
            image: '/images/html.png',
        },
        {
            id: 2,
            name: 'CSS',
            image: '/images/css.png',
        },
        {
            id: 3,
            name: 'Javascript',
            image: '/images/js.png',
        },
        {
            id: 4,
            name: 'Tailwind CSS',
            image: '/images/tailwind-css.png',
        },
        {
            id: 5,
            name: 'ReactJS',
            image: '/images/react.png',
        },
        {
            id: 6,
            name: 'NodeJS',
            image: '/images/node-js.png',
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
                    />
                ))}
            </div>
        </CommonSectionWrapper>
    );
};
export default SkillsSection;
