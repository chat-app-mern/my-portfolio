import CommonHead from 'components/components/CommonHead/CommonHead';
import StatusSection from 'components/components/StatusSection/StatusSection';

const SomethingWentWrongPage = () => {
    const meta500 = {
        title: '500 - Server Error | Maurya Soni',
        description:
            'Something went wrong on our side. Please try again later or contact support if the issue persists.',
        keywords: '500 error, server error, internal server error',
        og: {
            title: '500 - Internal Server Error',
            description:
                'An unexpected error occurred on the server. We are working to fix it as soon as possible.',
            image: '/images/maurya-image-one.webp',
        },
    };

    return (
        <>
            <CommonHead metaData={meta500} />
            <StatusSection
                title="500"
                description="Oops! Something went wrong on our end. Please try again later."
            />
        </>
    );
};
export default SomethingWentWrongPage;

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 3600,
    };
}
