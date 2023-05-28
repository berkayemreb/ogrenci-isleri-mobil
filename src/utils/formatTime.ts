export const formatTime = (eventTime: any) => {

    const date = new Date(eventTime);
    const formattedTime = date.toLocaleTimeString();

    return formattedTime.slice(0, 5);
}