export const BASE_URL = "http://192.168.0.15:5000/api/noticias"; //Url base del servidor de la aplicación.

export function formatDateForBackend(dateString) {  //función que recibe una fecha en formato string y la convierte al formato correcto para guardarla en el servidor.
    const {day, month, year} = getDateComponents(dateString);
    const formattedDate = `${day}-${month}-${year}`
    return formattedDate;
}

function getDateComponents(dateString){ //función que recibe una fecha en formato string y retorna el valor del día, mes y año en formato numérico. Es auxiliar para la función "FormatDateForBackend"
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
