import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { getFromDevice } from '../utils/Async';
import { NOTIFICATIONS_STORE } from '../utils/AsyncKeys';
import NotificationCard from '../components/NotificationCard';
import { deleteNotification } from '../actions';

class Notifications extends Component {
    renderEmtyHead = () => {
        return (
            <View style={styles.emtyHeader}>
                <Text style={styles.emptyHeaderText}>MoraSpirit news on sports and special events will be notified here</Text>
            </View>
        );
    
    }
    removeNotification = (sentTime) => {
        console.log('deleting ', + sentTime);
        _.remove(this.props.notifications, (item) => {
            return item.sentTime === sentTime
        });
        this.props.deleteNotification(this.props.notifications);
    };

    renderCard = ({ item }) => {
        return <NotificationCard notification={item} onSwipe={this.removeNotification} />
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
                    ListEmptyComponent={this.renderEmtyHead}
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
        zIndex:2
    },
    list: {
        marginHorizontal: 0,
        zIndex:2
    },
    emtyHeader: {
        marginTop: 20,
        margin: 10,
        padding: 10,
        elevation: 2,
        backgroundColor: '#e2e0e0'
    },
    emptyHeaderText: {
        fontSize: 15
    }
});


const mapStateToProps = (state) => {
    return {
        notifications: state.notifications.items,
    };
};

export default connect(mapStateToProps, { deleteNotification })(Notifications);