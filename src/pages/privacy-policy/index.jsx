import CommonHead from 'components/components/CommonHead/CommonHead';
import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';

const PrivacyPolicyPage = () => {
    const metaPrivacy = {
        title: 'Privacy Policy | Maurya Soni',
        description:
            'Privacy policy for the personal portfolio of Maurya Soni. Learn how contact form submissions are handled.',
        keywords: 'privacy policy, data handling, Maurya Soni portfolio',
        og: {
            title: 'Privacy Policy | Maurya Soni',
            description:
                'Privacy policy for the personal portfolio of Maurya Soni.',
            image: '/images/maurya-image-one.jpg',
        },
    };

    return (
        <>
            <CommonHead metaData={metaPrivacy} pageType="privacy" />
            <CommonSectionWrapper
                title="Privacy Policy"
                description="Last updated: March 2026"
                sectionId="privacy"
            >
                <div className="max-w-3xl mx-auto text-grey text-lg leading-relaxed space-y-8">
                    <div>
                        <h2 className="text-white text-2xl font-bold pb-3">
                            1. Who I Am
                        </h2>
                        <p>
                            This is the personal portfolio website of Maurya
                            Soni, a Frontend Developer based in Ahmedabad,
                            India. Contact: mauryasoni71@gmail.com
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white text-2xl font-bold pb-3">
                            2. Information Collected
                        </h2>
                        <p>
                            The only personal data collected on this site is
                            information you voluntarily provide through the
                            contact form: your name, email address, and message.
                            No tracking cookies, analytics beyond Vercel Speed
                            Insights, or third-party advertising scripts are
                            used.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white text-2xl font-bold pb-3">
                            3. How Your Data Is Used
                        </h2>
                        <p>
                            Contact form submissions are used solely to respond
                            to your enquiry. Your details are not sold, shared
                            with third parties, or used for marketing purposes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white text-2xl font-bold pb-3">
                            4. Data Retention
                        </h2>
                        <p>
                            Messages received through the contact form are
                            retained only as long as necessary to respond to
                            your enquiry. You may request deletion at any time
                            by emailing mauryasoni71@gmail.com.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white text-2xl font-bold pb-3">
                            5. Third-Party Services
                        </h2>
                        <p>
                            This site is hosted on Vercel and uses Vercel
                            Analytics and Speed Insights for anonymous
                            performance monitoring. Google reCAPTCHA is used on
                            the contact form to prevent spam. Please refer to
                            their respective privacy policies for details.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white text-2xl font-bold pb-3">
                            6. Your Rights
                        </h2>
                        <p>
                            You have the right to request access to, correction
                            of, or deletion of any personal data you have
                            submitted. To exercise these rights, contact
                            mauryasoni71@gmail.com.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white text-2xl font-bold pb-3">
                            7. Contact
                        </h2>
                        <p>
                            For any privacy-related questions, email{' '}
                            <a
                                href="mailto:mauryasoni71@gmail.com"
                                className="text-primary hover:underline"
                            >
                                mauryasoni71@gmail.com
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </CommonSectionWrapper>
        </>
    );
};
export default PrivacyPolicyPage;

export async function getStaticProps() {
    return {
        props: {},
    };
}
