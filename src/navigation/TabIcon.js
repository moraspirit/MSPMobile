import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = (props) => {
    if (props.title == 'Articles') {
        return <View><Icon name="ios-paper-plane-outline" size={30} color={props.focused ? '#1893cc' : 'grey'} /></View>
    }
    if (props.title === 'Gallery') {
        return <View><Icon name="ios-images-outline" size={30} color={props.focused ? '#1893cc' : 'grey'} /></View>
    }
    return <View><Icon name="ios-ribbon-outline" size={30} color={props.focused ? '#1893cc' : 'grey'} /></View>
};


export default TabIcon;
