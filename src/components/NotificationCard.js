import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Share, Linking } from 'react-native';
import { getTime } from '../utils/Helpers';
import SwipableCard from '../components/SwipableCard';

const { height, width } = Dimensions.get('window');

const NotificationCard = (props) => {

    return (
        <SwipableCard onSwipe={() => props.onSwipe(props.notification.sentTime)}>
            <View style={styles.container}>
                <Text style={styles.body}>{props.notification.body}</Text>
                <Text style={styles.time}>{getTime(props.notification.sentTime)}</Text>
            </View>
        </SwipableCard>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        marginVertical: 0.2,
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