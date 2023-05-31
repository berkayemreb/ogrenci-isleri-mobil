export const formatDateWithSecondsInfo = (seconds: number) => {

    const date = new Date(seconds * 1000);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}