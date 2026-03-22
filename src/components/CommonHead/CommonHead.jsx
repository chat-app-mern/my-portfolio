import Head from 'next/head';
import { useRouter } from 'next/router';

const BASE_URL = 'https://portfolio-maurya-soni.vercel.app';

const CommonHead = ({ metaData, pageType }) => {
    const title = metaData?.title ?? '';
    const description = metaData?.description ?? '';
    const keywords = metaData?.keywords ?? '';

    const ogTitle = metaData?.og?.title ?? '';
    const ogDescription = metaData?.og?.description ?? '';
    const ogImageRaw = metaData?.og?.image ?? '';

    const router = useRouter();
    const canonicalPath = router?.asPath?.split('?')[0] ?? '';
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;
    const absoluteOgImage = ogImageRaw.startsWith('http')
        ? ogImageRaw
        : `${BASE_URL}${ogImageRaw}`;

    const isContactPage = pageType === 'ContactPage';
    const isHomePage = !pageType || pageType === 'WebSite';

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Maurya Soni — Portfolio',
        url: `${BASE_URL}/`,
    };

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: `${BASE_URL}/`,
        mainEntity: {
            '@type': 'Person',
            '@id': `${BASE_URL}/#person`,
            name: 'Maurya Soni',
            jobTitle: 'Frontend Developer',
            email: 'mailto:mauryasoni71@gmail.com',
            image: `${BASE_URL}/images/maurya-image-one.jpg`,
            worksFor: {
                '@type': 'Organization',
                name: 'Krishaweb',
                url: 'https://www.krishaweb.com',
            },
            alumniOf: [
                {
                    '@type': 'EducationalOrganization',
                    name: 'Charusat University',
                },
            ],
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ahmedabad',
                addressCountry: 'IN',
            },
            knowsAbout: [
                'React',
                'Next.js',
                'JavaScript',
                'Tailwind CSS',
                'Node.js',
                'MongoDB',
            ],
            sameAs: [
                'https://www.linkedin.com/in/mauryasoni',
                'https://www.instagram.com/_mauryasoni_',
                'https://www.credly.com/users/mauryasoni/badges',
                'https://github.com/maurya22010',
            ],
        },
    };

    const contactPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        url: `${BASE_URL}/contact-me/`,
        name: 'Contact Maurya Soni',
        description:
            'Get in touch with Maurya Soni, Frontend Developer, for collaboration or inquiries.',
        mainEntity: {
            '@id': `${BASE_URL}/#person`,
        },
    };

    return (
        <Head>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta
                name="google-site-verification"
                content={process.env.NEXT_GOOGLE_SITE_VERIFICATION ?? ''}
            />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="UTF-8" />

            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon.ico"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon.ico"
            />
            <link rel="apple-touch-icon" href="/favicon.ico" />
            <link rel="shortcut icon" href="/favicon.ico" />

            {/* Open Graph */}
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={absoluteOgImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Maurya Soni — Portfolio" />

            {/* Twitter / X Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:description" content={ogDescription} />
            <meta name="twitter:image" content={absoluteOgImage} />

            <link rel="canonical" href={canonicalUrl} />

            {/* WebSite schema — all pages */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />

            {/* Person + ProfilePage schema — homepage only */}
            {isHomePage && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personSchema),
                    }}
                />
            )}

            {/* ContactPage schema */}
            {isContactPage && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(contactPageSchema),
                    }}
                />
            )}
        </Head>
    );
};

export default CommonHead;
