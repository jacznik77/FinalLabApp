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

import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";


/* El componente DatePicker es un selector de fecha en formato de calendario que utiliza la librería "@react-native-community/datetimepicker".
   Se utiliza en la pantalla AddNews para seleccionar una fecha dentro del formulario y también en la pantalla News para seleccionar una fecha para ver noticias de ese día.
   Recibe como parámetros el valor de estado y el set del mismo para modificar el valor de la fecha una vez seleccionada. 
   También recibe un tercer parámetro que funciona a modo de "extras", representado como un objeto que de momento contiene:
    -> setter de DateChanged que utiliza la vista de News
    -> valor booleano para indicar si está siendo usado en un formulario (que usa react-hook-form), utilizado por la vista AddNews. */

export const showDatePicker = (date, setDate, {setDateChanged = null, onForm = false, inputName = ''} = {}) => {
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        if (onForm) {   //el valor booleano onForm indica si la función se está invocando en un formulario que utiliza la librería react-hook-form por lo que el estado se debe tratar de manera distinta. Es falso por defecto.
            setDate(inputName, currentDate);
        } else {
            setDate(currentDate);
        }
        if(setDateChanged)
            setDateChanged(true);
    };

    DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: 'date',
        is24Hour: false,
        maximumDate: new Date() //no se permite seleccionar un día mayor al actual ya que no deberían existir noticias "del futuro"
    })
};