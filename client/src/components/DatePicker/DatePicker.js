import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

/* El componente DatePicker es un selector de fecha en formato de calendario que utiliza la librería "@react-native-community/datetimepicker".
   Se utiliza en la pantalla AddNews para seleccionar una fecha dentro del formulario y también en la pantalla News para seleccionar una fecha para ver noticias de ese día.
   Recibe como parámetros el valor de estado y el set del mismo para modificar el valor de la fecha una vez seleccionada. También recibe un valor booleano para indicar si está siendo usado en un formulario (que usa react-hook-form). */

const showDatePicker = (date, setDate, onForm = false) => {
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        if (onForm) {   //el valor booleano onForm indica si la función se está invocando en un formulario que utiliza la librería react-hook-form por lo que el estado se debe tratar de manera distinta. Es falso por defecto.
            setDate('fecha', currentDate);
        } else {
            setDate(currentDate);
        }

    };

    DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: 'date',
        is24Hour: false,
        maximumDate: new Date() //no se permite seleccionar un día mayor al actual ya que no deberían existir noticias "del futuro"
    })
};

export default showDatePicker;
