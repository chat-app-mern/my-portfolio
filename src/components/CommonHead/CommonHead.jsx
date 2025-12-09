import Head from 'next/head';
import { useRouter } from 'next/router';

const CommonHead = ({ metaData }) => {
    const title = metaData?.title ?? '';
    const description = metaData?.description ?? '';
    const keywords = metaData?.keywords ?? '';

    const ogTitle = metaData?.og?.title ?? '';
    const ogDescription = metaData?.og?.description ?? '';
    const ogImage = metaData?.og?.image ?? '';

    const router = useRouter();
    const baseUrl = process.env.NEXT_PORTFOLIO_WEBSITE_URL ?? '';
    const canonicalUrl = `${baseUrl}${router?.asPath?.split('?')[0] ?? ''}`;

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

            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content="website" />

            <link rel="canonical" href={canonicalUrl} />

            <script
                defer
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        name: title,
                        url: canonicalUrl,
                    }),
                }}
            />
        </Head>
    );
};
export default CommonHead;
