import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Share, Linking } from 'react-native';
import { getTime } from '../utils/Helpers';

const { height, width } = Dimensions.get('window');

const NotificationCard = (props) => {
    // console.log('props are ', props)
    return (
        <View style={styles.container}>
            <Text style={styles.body}>{props.notification.body}</Text>
            <Text style={styles.time}>{getTime(props.notification.sentTime)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        marginVertical: 0.2,
        borderRadius: 1,
        borderColor: 'black',
        elevation: 2,
        width
    },
    body: {
        textAlign: 'left',
        margin: 10,
        marginBottom: 0,
        color: 'black'
    },
    time: {
        marginHorizontal: 11,
        marginBottom: 5
    }
});

export default NotificationCard;