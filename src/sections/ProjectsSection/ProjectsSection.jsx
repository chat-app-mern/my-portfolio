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
                'A recipe discovery app built with Next.js. Users can browse, search, and save recipes with a clean, responsive interface. Leverages static site generation for fast load times and strong SEO, with a focus on intuitive UI and smooth navigation across recipe categories.',
        },
        {
            title: 'Leave App',
            tech: 'Mern Stack',
            image: '/images/leaveapp-image.png',
            link: 'https://github.com/maurya22010/leave-mgmt-frontend',
            description:
                'A leave management system built on the MERN Stack. Employees can submit leave requests while managers review, approve, or reject them through a role-based dashboard. Built with React on the frontend and Node.js, Express, and MongoDB on the backend for full-stack data flow.',
        },
        {
            title: 'FoodMart',
            tech: 'Mern Stack',
            image: '/images/foodmart-image.png',
            link: 'https://github.com/maurya22010/foodmart-frontend',
            description:
                'A food delivery platform built on the MERN Stack. Features product listings with category filtering, an add-to-cart system, and a checkout flow. The React frontend communicates with a Node.js/Express API backed by MongoDB, delivering a seamless end-to-end ordering experience.',
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
