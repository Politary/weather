export const unixDateToString = (unixDate) => {
    let date = new Date(unixDate);
    const day = date.getDay();
    const dayNum = date.getDate();
    const month = date.getMonth();

    const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const monthName = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    return `${weekday[day]}, ${monthName[month]} ${dayNum}`;
};
