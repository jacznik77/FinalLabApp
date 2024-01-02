export const BASE_URL = "http://192.168.0.15:5000/api/noticias"; 

export function formatDateForBackend(dateString) {
    let date = new Date(dateString);
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    const formattedDate = `${day}-${month}-${date.getFullYear()}`
    return formattedDate;
}
