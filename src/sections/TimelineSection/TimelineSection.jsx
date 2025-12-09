import CommonSectionWrapper from 'components/components/CommonSectionWrapper/CommonSectionWrapper';
import TimelineCard from 'components/components/TimelineCard/TimelineCard';
import calculateExperience from 'components/utils/calculateExperience';

const TimelineSection = () => {
    const experience = calculateExperience('2024-05-06');
    const timelineData = [
        {
            id: 1,
            title: 'Krishaweb',
            description: `Frontend Developer (${experience} years)`,
        },
        {
            id: 2,
            title: 'Charusat University',
            description: 'Btech-IT (2020 - 2024)',
        },
        {
            id: 3,
            title: 'Nirman High School, Vastrapur',
            description: 'HSC (2018 - 2020)',
        },
        {
            id: 4,
            title: 'St. Kabir School, Drive-In (Old)',
            description: 'SSC (2006 - 2018)',
        },
    ];
    return (
        <CommonSectionWrapper
            title="Timeline"
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
                    />
                ))}
            </div>
        </CommonSectionWrapper>
    );
};
export default TimelineSection;
