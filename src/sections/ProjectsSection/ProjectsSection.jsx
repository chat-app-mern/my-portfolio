import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import ProjectCard from 'components/components/ProjectCard/ProjectCard';

const ProjectsSection = () => {
    const projectsData = [
        {
            title: 'Freshly',
            tech: 'Next.js',
            image: '/images/freshly-image.png',
            link: 'https://github.com/maurya22010/recipe-app',
            description:
                'A Next.js recipe discovery app featuring a clean, responsive UI. It utilizes static site generation for fast performance and SEO, allowing users to effortlessly browse, search, and save recipes.',
        },
        {
            title: 'Leave App',
            tech: 'Mern Stack',
            image: '/images/leaveapp-image.png',
            link: 'https://github.com/maurya22010/leave-mgmt-frontend',
            description:
                'A role-based MERN stack application for leave management. It streamlines the process for employees to request time off and for managers to review and approve them through an intuitive dashboard.',
        },
        {
            title: 'FoodMart',
            tech: 'Mern Stack',
            image: '/images/foodmart-image.png',
            link: 'https://github.com/maurya22010/foodmart-frontend',
            description:
                'A full-stack food delivery platform built with the MERN stack. It includes dynamic product listings, category filtering, and a complete shopping cart and checkout experience.',
        },
    ];

    return (
        <CommonSectionWrapper 
            title={'Projects'} 
            description={"Some of the recent projects I've built to explore new ideas and technologies."}
            sectionId={'projects'}
        >
            <div className="flex flex-wrap -mx-4 gap-y-6">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </CommonSectionWrapper>
    );
};
export default ProjectsSection;
