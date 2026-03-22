import CommonHead from 'components/components/CommonHead/CommonHead';
import StatusSection from 'components/components/StatusSection/StatusSection';
import Head from 'next/head';

const ThankYouPage = () => {
    const metaThankYou = {
        title: 'Thank You | Maurya Soni',
        description:
            'Thank you for getting in touch! Your message has been received.',
        keywords: 'thank you, form submitted, message received',
        og: {
            title: 'Thank You | Maurya Soni',
            description: 'Your message has been received.',
            image: '/images/maurya-image-one.jpg',
        },
    };
    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <CommonHead metaData={metaThankYou} />
            <StatusSection
                title="Thank You!"
                description="We appreciate your submission. We'll get back to you shortly."
                link={true}
                linkText="Return to Home"
                linkUrl="/"
            />
        </>
    );
};
export default ThankYouPage;

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 3600,
    };
}
