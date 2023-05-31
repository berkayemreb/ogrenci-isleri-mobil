interface dataObjProps {
    seconds: number,
    nanoseconds: number;
}
export const formatTimeWithSecondsInfo = (dataObj: dataObjProps) => {

    const totalMilliseconds = (dataObj.seconds * 1000) + Math.floor(dataObj.nanoseconds / 1000000);
    const date = new Date(totalMilliseconds);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime
}