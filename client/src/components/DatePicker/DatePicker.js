import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const showDatePicker = (date, setDate, setDateChanged) => {
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        //setDate('fecha', currentDate);
        setDate(currentDate);
        setDateChanged(true);
    };

    DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: 'date',
        is24Hour: false,
        maximumDate: new Date()
    });
}

export default showDatePicker;