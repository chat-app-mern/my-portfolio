import CommonHead from 'components/components/CommonHead/CommonHead';
import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import ContactForm from 'components/components/ContactForm/ContactForm';
import ReCaptchaProviderWrapper from 'components/wrappers/RecaptchaWrapper/RecaptchaWrapper';

const ContactMePage = () => {
    const metaContact = {
        title: 'Contact Us | Maurya Soni',
        description:
            "Get in touch with us for inquiries, support, or collaboration opportunities. We'd love to hear from you.",
        keywords: 'contact us, support, inquiries, get in touch',
        og: {
            title: 'Contact Us',
            description:
                'Have questions or need support? Reach out through our contact form.',
            image: '/images/maurya-image-one.webp',
        },
    };

    return (
        <>
            <CommonHead metaData={metaContact} />
            <ReCaptchaProviderWrapper>
                <CommonSectionWrapper
                    title={'Contact Me'}
                    description={
                        'Cultivating Connections: Reach Out and Connect with Me'
                    }
                >
                    <ContactForm />
                </CommonSectionWrapper>
            </ReCaptchaProviderWrapper>
        </>
    );
};
export default ContactMePage;
