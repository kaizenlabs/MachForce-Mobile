import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, customStyle }) => {
    return (
        <View style={[styles.spinnerStyle, customStyle]}>
            <ActivityIndicator size={ size || 'large' }/>
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };