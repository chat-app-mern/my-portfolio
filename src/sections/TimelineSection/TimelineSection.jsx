import { useEffect, useState } from 'react';
import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import TimelineCard from 'components/components/TimelineCard/TimelineCard';
import calculateExperience from 'components/utils/calculateExperience';

const TimelineSection = () => {
    const [experience, setExperience] = useState('1+');

    useEffect(() => {
        setExperience(calculateExperience('2024-05-06'));
    }, []);
    const timelineData = [
        {
            id: 1,
            title: 'Krishaweb',
            description: `Frontend Developer (${experience} years) — May 2024 – Present, Ahmedabad, India. Building responsive web interfaces with React and Next.js. Collaborating with design and backend teams to ship production-ready features, optimize performance, and deliver high-quality user experiences across multiple client projects.`,
            url: 'https://www.krishaweb.com'
        },
        {
            id: 2,
            title: 'Charusat University',
            description: 'Btech-IT (2020 - 2024)',
            url: 'https://www.charusat.ac.in'
        },
        {
            id: 3,
            title: 'Nirman High School, Vastrapur',
            description: 'HSC (2018 - 2020)',
            url: 'https://nirmanhighschool.com'
        },
        {
            id: 4,
            title: 'St. Kabir School, Drive-In (Old)',
            description: 'SSC (2006 - 2018)',
            url: 'https://stkabir.com'
        },
    ];

    return (
        <CommonSectionWrapper
            title="My Journey"
            description={`What I've Done Upto This Point.`}
            sectionId="timeline"
        >
            <div className="flex flex-wrap gap-y-10 xl:gap-y-20 flex-col relative">
                <div className="absolute hidden xl:block left-[50%] top-0 w-[1px] h-full bg-grey"></div>
                {timelineData.map((item, index) => (
                    <TimelineCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        index={index}
                        url={item.url}
                    />
                ))}
            </div>
        </CommonSectionWrapper>
    );
};

export default TimelineSection;
