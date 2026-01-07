import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import ProjectCard from 'components/components/ProjectCard/ProjectCard';

const ProjectsSection = () => {
    const projectsData = [
        {
            title: 'Freshly',
            tech: 'Next.js',
            image: '/images/freshly-image.png',
            link: 'https://github.com/maurya22010/recipe-app',
        },
        {
            title: 'Leave App',
            tech: 'Mern Stack',
            image: '/images/leaveapp-image.png',
            link: 'https://github.com/maurya22010/leave-mgmt-frontend',
        },
        {
            title: 'FoodMart',
            tech: 'Mern Stack',
            image: '/images/foodmart-image.png',
            link: 'https://github.com/maurya22010/foodmart-frontend',
        },
    ];

    return (
        <CommonSectionWrapper title={'Projects'} sectionId={'projects'}>
            <div className="flex flex-wrap -mx-4 gap-y-6">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </CommonSectionWrapper>
    );
};
export default ProjectsSection;
