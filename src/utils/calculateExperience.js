export default function calculateExperience(fromDate) {
    const start = new Date(fromDate);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    const monthDiff = now.getMonth() - start.getMonth();
    const dayDiff = now.getDate() - start.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        years--;
    }
    const label = years <= 0 ? '1+' : `${years}+`;
    return label;
}
