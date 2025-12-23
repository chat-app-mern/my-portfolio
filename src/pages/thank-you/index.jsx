import CommonHead from 'components/components/CommonHead/CommonHead';
import StatusSection from 'components/components/StatusSection/StatusSection';

const ThankYouPage = () => {
    const metaThankYou = {
        title: 'Thank You | Maurya Soni',
        description:
            'Thank you for getting in touch! We have received your message and will get back to you shortly.',
        keywords: 'thank you, form submitted, message received',
        og: {
            title: 'Thank You',
            description:
                'We appreciate you contacting us! We will reach out to you soon.',
            image: '/images/maurya-main-image.jpg',
        },
    };
    return (
        <>
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
