const CommonSectionWrapper = ({ title, description, children, sectionId }) => {
    return (
        <section className="section-padding" id={sectionId || ''}>
            <div className="container">
                {title && (
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className={`text-center text-white text-4xl font-bold ${
                            !description ? 'pb-10' : ''
                        }`}
                    >
                        {title}
                    </h2>
                )}
                {description && (
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="text-center text-grey pt-4 pb-10 text-xl font-medium"
                    >
                        {description}
                    </p>
                )}
                {children}
            </div>
        </section>
    );
};
export default CommonSectionWrapper;
