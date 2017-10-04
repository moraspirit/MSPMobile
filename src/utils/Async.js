import {
    AsyncStorage
} from 'react-native';

export const saveToDevice = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        console.log('Saved to Async Storage');
    } catch (error) {
        console.log('Error in saving data to Async Storage:', error);
    }
};

export const getFromDevice = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log('Got item from Async Storage');
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (error) {
        console.log('Error in reading data from Async Storage:', error);
    }
};

export const removeFromDevice = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Removed from Async Storage');
    } catch (error) {
        console.log('Error in clearing data from Async Storage:', error);
    }
};
