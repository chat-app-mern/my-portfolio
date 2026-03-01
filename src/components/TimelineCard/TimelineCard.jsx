import Link from "next/link";

const TimelineCard = ({ title, description, index ,url }) => {
    const isOdd = index % 2 === 0;

    return (
        <div className="w-full relative">
            <div className="absolute left-[48.8%] hidden xl:block top-[40%] bg-primary h-[32px] w-[32px] rounded-full"></div>
            <Link
                className={`w-full block cursor-pointer xl:max-w-[500px] 2xl:max-w-[580px] bg-lightBlack rounded-3xl p-8 transition-shadow hover:shadow-[0_0_30px_rgba(255,60,60,0.4)] ${
                    isOdd ? 'mr-auto' : 'ml-auto'
                }`}
                data-aos={isOdd ? 'fade-right' : 'fade-left'}
                data-aos-delay="400"
                href={url}
                target="_blank"
            >
                <h3 className="text-xl md:text-2xl text-center md:text-left font-bold text-primary pb-8">
                    {title}
                </h3>
                <p className="text-lg text-center md:text-left md:text-xl text-darkGrey font-medium">
                    {description}
                </p>
            </Link>
        </div>
    );
};
export default TimelineCard;
