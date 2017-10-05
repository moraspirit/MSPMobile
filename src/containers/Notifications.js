import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getFromDevice } from '../utils/Async';
import { NOTIFICATIONS_STORE } from '../utils/AsyncKeys';
import NotificationCard from '../components/NotificationCard';

class Notifications extends Component {
    renderCard = ({ item }) => {
        return <NotificationCard notification={item} />
    }

    render() {
        // refresh every 1 min (to update time stamps)
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={this.props.notifications}
                    renderItem={this.renderCard}
                    keyExtractor={item => item.notificationID}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
    },
    list: {
        marginHorizontal: 0
    }
});


const mapStateToProps = (state) => {
    return {
        notifications: state.notifications.items,
    };
};

export default connect(mapStateToProps, null)(Notifications);