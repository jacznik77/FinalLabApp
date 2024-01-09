import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const showDatePicker = (date, setDate, {setDateChanged = null, onForm = false} = {}) => {
    //const {setDateChanged, onForm} = extras;
    console.log("setDateChanged", setDateChanged);
    console.log("onForm", onForm);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        if (onForm) {   //el valor booleano onForm indica si la función se está invocando en un formulario que utiliza la librería react-hook-form por lo que el estado se debe tratar de manera distinta. Es falso por defecto.
            setDate('fecha', currentDate);
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
        maximumDate: new Date()
    })
};

export default showDatePicker;
