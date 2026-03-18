export const formatDateToText = (date: string) => {
    // format Month in Letter then the day then a comma and the year
    // example: March 16, 2026
    if (!date) return '';
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'long' }).slice(0, 3);
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
}