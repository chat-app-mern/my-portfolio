import CommonHead from 'components/components/CommonHead/CommonHead';
import StatusSection from 'components/components/StatusSection/StatusSection';

const NotFound = () => {
    const meta404 = {
        title: '404 - Page Not Found | Maurya Soni',
        description:
            'The page you are looking for does not exist. It may have been moved or deleted. Explore other useful pages on our website.',
        keywords: '404 error, page not found, missing page, broken link',
        og: {
            title: '404 - Page Not Found',
            description:
                "Oops! The page you're looking for cannot be found. Visit our homepage to continue browsing.",
            image: '/images/maurya-image-one.webp',
        },
    };

    return (
        <>
            <CommonHead metaData={meta404} />
            <StatusSection
                title="404"
                description="The page you are looking for is missing or removed."
                link={true}
                linkText="Go to Home Page"
                linkUrl="/"
            />
        </>
    );
};
export default NotFound;
