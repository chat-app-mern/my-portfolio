import Link from 'next/link';

const StatusSection = ({
    title,
    description,
    link = false,
    linkText = 'Go to Home Page',
    linkUrl = '/',
}) => {
    return (
        <section className="py-20 md:py-[191px]">
            <div className="container">
                <h1 className="text-7xl md:text-9xl text-primary text-center font-bold">
                    {title}
                </h1>
                <p className="text-center text-xl pt-6 text-darkGrey font-medium">
                    {description}
                </p>
                {link && (
                    <div className="text-center pt-6">
                        <Link className="btn primary" href={linkUrl}>
                            {linkText}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};
export default StatusSection;
