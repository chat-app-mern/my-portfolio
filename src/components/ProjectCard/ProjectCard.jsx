import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
    return (
        <div className="px-4 w-full md:w-6/12 lg:w-4/12">
            <Link
                target="_blank"
                href={project.link}
                className="flex flex-col h-full"
            >
                <div className="pb-[100%] relative">
                    <Image
                        fill
                        src={project.image}
                        className="object-cover rounded-t-xl bg-primary object-center"
                        alt={project.title}
                    />
                </div>

                <div className="flex justify-between items-center gap-2.5 p-4 bg-lightBlack rounded-b-xl h-full">
                    <h3 className="text-grey font-bold text-base">
                        {project.title}
                    </h3>
                    <h4 className="text-darkGrey font-bold text-base">
                        {project.tech}
                    </h4>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
