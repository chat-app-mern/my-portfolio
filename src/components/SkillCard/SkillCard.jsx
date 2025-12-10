import Image from 'next/image';

const SkillCard = ({ image, name, description }) => {
    return (
        <div className="w-full md:w-6/12 lg:w-4/12 px-4">
            <div className="bg-lightBlack p-8 rounded-3xl h-full flex flex-col justify-center items-center transition-shadow hover:shadow-[0_0_30px_rgba(255,60,60,0.4)]">
                <div className="grid place-items-center">
                    <Image
                        src={image}
                        height={65}
                        width={65}
                        className="object-contain w-[65px] h-[65px]"
                        alt={`${name}-logo`}
                    />
                </div>
                <p className="pt-4 text-center text-xl md:text-2xl font-bold text-primary">
                    {name}
                </p>
                {description && (
                    <p className="pt-2 text-center text-lg text-grey">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};
export default SkillCard;
