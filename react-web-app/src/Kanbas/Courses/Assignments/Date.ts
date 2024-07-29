const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


export function getDay(d: string): string {
    if (!d) {
        return "Invalid date";
    }
    return d.split('-')[2]
}
export function getMonthString(d: string): string {
    if (!d) {
        return "Invalid date";
    }
    const monthIndex = parseInt(d.split('-')[1]) - 1
    return months[monthIndex]
}

export function getMonth(d: string): string {
    if (!d) {
        return "Invalid date";
    }
    return d.split('-')[1];
}

export function getYear(d: string): string {
    if (!d) {
        return "Invalid date";
    }
    return d.split('-')[0];
}


const Date = {
    getDay,
    getMonth,
    getYear,
    getMonthString,
};
export default Date;