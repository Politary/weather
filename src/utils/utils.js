export const unixDateToString = (unixDate) => {
    let date = new Date(unixDate);
    const year = date.getFullYear();
    const day = date.getDay();
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
    const formattedYear = year.toString().slice(-2);

    return `${weekday[day]}, ${monthName[month]} ${formattedYear}`;
};
