export const BASE_URL = "http://192.168.0.15:5000/api/noticias"; 

export function formatDateForBackend(dateString) {
    const {day, month, year} = getDateComponents(dateString);
    const formattedDate = `${day}-${month}-${year}`
    return formattedDate;
}

function getDateComponents(dateString){
    let date = new Date(dateString);
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return {
        day,
        month,
        year
    };
}
