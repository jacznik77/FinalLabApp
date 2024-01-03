import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const showDatePicker = (date, setDate) => {
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate('fecha', currentDate);
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