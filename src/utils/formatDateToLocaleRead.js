export const formatDateToLocaleRead = (date) => {
    const dateInTimestamp = new Date(date);

    return `${('0' + dateInTimestamp.getDay()).slice(-2)}/${('0' + dateInTimestamp.getMonth()).slice(-2)}/${dateInTimestamp.getFullYear()} às ${('0' + dateInTimestamp.getHours()).slice(-2)}:${('0' + dateInTimestamp.getMinutes()).slice(-2)}h`
}