import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getFromDevice } from '../utils/Async';
import { NOTIFICATIONS_STORE } from '../utils/AsyncKeys';
import NotificationCard from '../components/NotificationCard';

class Notifications extends Component {
    renderForEmptyList() {
        if (this.props.notifications.length == 0) {
            return (
                <View style={styles.emtyHeader}>
                    <Text style={styles.emptyHeaderText}>MoraSpirit news on sports and special events will be notified here</Text>
                </View>
            );
        }
    }

    renderCard = ({ item }) => {
        return <NotificationCard notification={item} />
    }

    render() {
        // refresh every 1 min (to update time stamps)
        return (
            <View style={styles.container}>
                {this.renderForEmptyList()}
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

export default connect(mapStateToProps, null)(Notifications);