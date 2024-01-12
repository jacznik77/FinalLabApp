import React from "react";
import {View} from 'react-native';
import {Input} from "@rneui/themed"
import {Controller} from 'react-hook-form';

export default FormInput = ({name, control, rules, inputData, error}) => {
    const { label, placeholder, onChange, multiline = false, numberOfLines = 1} = inputData;
     return (
        <View>
        <Controller //Controller es un componente que se utiliza para integrar react-hook-form con el Input de rneui/themed
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => <Input //field es un objeto que contiene valores y funciones relacionadas con el campo que esté controlando Controller
                value={field.value} // react-hook-form no utiliza el estado local directamente; en su lugar, utiliza un controlador centralizado. Te abstrae de la manipulación del estado del formulario
                placeholder={placeholder}
                placeholderTextColor={'#E3B08F'}
                textAlignVertical={multiline ? 'top' : 'center'}
                onChangeText={onChange}
                numberOfLines={numberOfLines}
                multiline={multiline}
                label={label}
                labelStyle={{color: 'black', marginBottom: 5}}
                errorMessage={error && error.message}
                style={{
                    paddingLeft: 6,
                    paddingVertical: 2,
                    borderRadius: 8,
                    backgroundColor: '#FFE4D3',
                    fontSize: 16,
                    color: '#8E4C3E'
                }}
                inputContainerStyle={{borderBottomWidth: 0}}
                />}
        />
        </View>
    )
}