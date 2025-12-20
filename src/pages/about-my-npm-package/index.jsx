import CommonHead from 'components/components/CommonHead/CommonHead';
import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import SkillCard from 'components/components/SkillCard/SkillCard';
import Image from 'next/image';
import Link from 'next/link';

const AboutMyNpmPackage = () => {
    const metaPackage = {
        title: 'VideoTrimmer NPM Package | Maurya Soni',
        description:
            'VideoTrimmer is a lightweight npm package that allows users to upload, trim, and download videos directly in the browser. Simple, fast, and developer-friendly.',
        keywords:
            'video trimmer, npm package, video editing, browser video trim, ffmpeg wasm',
        og: {
            title: 'VideoTrimmer – NPM Package',
            description:
                'A lightweight and easy-to-use browser-based video trimming package built with ffmpeg.wasm.',
            image: '/images/video-trimmer-banner.webp',
        },
    };
    const features = [
        {
            image: '/images/back-to-edit.png',
            name: 'Back to Edit',
            description: 'Return anytime to adjust trim points.',
        },
        {
            image: '/images/preview.png',
            name: 'Preview Segments',
            description: 'Check selected portions before cutting.',
        },
        {
            image: '/images/download-videos.png',
            name: 'Download Videos',
            description: 'Export and save trimmed clips instantly.',
        },
        {
            image: '/images/add-trim-markers.png',
            name: 'Add Trim Markers',
            description: 'Mark exact start & end points for cutting.',
        },
        {
            image: '/images/remove-marker.png',
            name: 'Remove Markers',
            description: 'One-click marker delete for instant cuts.',
        },
        {
            image: '/images/delete-trim-video.png',
            name: 'Delete Trimmed Videos',
            description: 'Discard unwanted clips easily.',
        },
    ];

    return (
        <>
            <CommonHead metaData={metaPackage} />
            <article className="py-14 md:py-20">
                <div className="container sm">
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="text-primary text-center text-5xl md:text-7xl font-black"
                    >
                        Video Trimmer
                    </h1>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="text-center pt-8 pb-14"
                    >
                        <Link
                            target="_blank"
                            href={'https://www.npmjs.com/package/video-trimmer'}
                            className="btn outline"
                        >
                            View Now
                        </Link>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="pb-10 md:pb-20"
                    >
                        <Image
                            src={'/images/videotrimmer-image.png'}
                            alt="video-trimmer-image"
                            className="w-full h-full object-cover"
                            height={'886'}
                            width={'1040'}
                        />
                    </div>
                    <section className="section-padding">
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className={`text-center text-white text-4xl font-bold`}
                        >
                            Package Overview
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="text-center text-grey pt-4 text-xl font-medium"
                        >
                            VideoTrimmer is a lightweight and easy-to-use tool
                            that makes video editing simple. With it, you can
                            upload your videos, add trim markers, preview
                            specific segments, and download the final trimmed
                            clips—all directly in your browser. Built with
                            ffmpeg.wasm and FilePond, it gives you a smooth
                            editing experience without needing any extra
                            software.
                        </p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="text-center text-grey pt-4 text-xl font-medium"
                        >
                            Editing videos shouldn’t be complicated.
                            VideoTrimmer lets you drag and drop videos, set
                            exact start and end points using trim markers,
                            preview your selections, and adjust or remove
                            markers anytime. You can even discard unwanted
                            clips, making sure your final video is exactly how
                            you want it.
                        </p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="text-center text-grey pt-4 text-xl font-medium"
                        >
                            VideoTrimmer is packed with handy features: return
                            to edit your clips, preview segments before cutting,
                            download trimmed videos instantly, and manage
                            markers with ease. It uses ffmpeg.wasm for fast
                            client-side trimming and FilePond for smooth
                            drag-and-drop uploads with live previews, so editing
                            your videos becomes quick, fun, and hassle-free.
                        </p>
                    </section>
                    <CommonSectionWrapper
                        title={'Features'}
                        description={'Features of Video Trimmer npm package.'}
                    >
                        <div className="flex flex-wrap -mx-4 gap-y-6">
                            {features.map((feature, index) => (
                                <SkillCard
                                    key={`${feature.name + index}`}
                                    image={feature.image}
                                    description={feature.description}
                                    name={feature.name}
                                />
                            ))}
                        </div>
                    </CommonSectionWrapper>
                </div>
            </article>
        </>
    );
};

export default AboutMyNpmPackage;

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 3600,
    };
}
