export const formatDate = (rawDate: Date) => {
    let date = new Date(rawDate);

    let year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    let day: any = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${day}/${month}/${year}`;
}