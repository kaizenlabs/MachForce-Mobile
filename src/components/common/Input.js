import React from 'react';
import { TextInput, View, Text, Platform } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboard, customContainerStyle, customInputStyle, customLabelStyle, multiline, numberOfLines }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={[containerStyle, customContainerStyle]}>
            <Text style={[labelStyle, customLabelStyle]}>{ label }</Text>
            <TextInput
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={keyboard}
                value={value}
                onChangeText={onChangeText}
                style={[inputStyle, customInputStyle]}
                multiline={multiline}
                numberOfLines={numberOfLines}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export { Input };