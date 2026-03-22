import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
    return (
        <div
            className="px-4 w-full md:w-6/12 lg:w-4/12"
            data-aos="fade-up"
            data-aos-delay="400"
        >
            <Link
                target="_blank"
                href={project.link}
                className="flex flex-col h-full group transition-shadow hover:shadow-[0_0_30px_rgba(255,60,60,0.4)] rounded-xl"
            >
                <div className="pb-[100%] relative">
                    <Image
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        src={project.image}
                        className="object-cover rounded-t-xl bg-primary object-center"
                        alt={project.title}
                    />
                </div>

                <div className="flex flex-col gap-2 p-4 bg-lightBlack rounded-b-xl h-full">
                    <div className="flex justify-between items-center gap-2.5">
                        <h3 className="text-grey font-bold text-base group-hover:text-primary transition ease-in-out duration-300">
                            {project.title}
                        </h3>
                        <span className="text-darkGrey font-bold text-base">
                            {project.tech}
                        </span>
                    </div>
                    {project.description && (
                        <p className="text-darkGrey text-sm leading-relaxed">
                            {project.description}
                        </p>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
