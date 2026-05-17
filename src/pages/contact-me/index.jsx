import CommonHead from 'components/components/CommonHead/CommonHead';
import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import ContactForm from 'components/components/ContactForm/ContactForm';
import ReCaptchaProviderWrapper from 'components/wrappers/RecaptchaWrapper/RecaptchaWrapper';

const ContactMePage = () => {
    const metaContact = {
        title: 'Contact Maurya Soni | Frontend Developer',
        description:
            'Get in touch with Maurya Soni for collaboration, freelance inquiries, or any questions about frontend development projects.',
        keywords:
            'contact Maurya Soni, hire frontend developer, collaboration, get in touch',
        og: {
            title: 'Contact Maurya Soni | Frontend Developer',
            description:
                'Reach out to Maurya Soni, Frontend Developer based in Ahmedabad, for collaboration or project inquiries.',
            image: '/images/hero-image.jpg',
        },
    };

    return (
        <>
            <CommonHead metaData={metaContact} pageType="ContactPage" />
            <ReCaptchaProviderWrapper>
                <CommonSectionWrapper
                    title={'Contact Me'}
                    description={
                        "Have a project in mind or just want to say hi? I'd love to hear from you."
                    }
                >
                    <ContactForm />
                </CommonSectionWrapper>
            </ReCaptchaProviderWrapper>
        </>
    );
};
export default ContactMePage;

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 3600,
    };
}
