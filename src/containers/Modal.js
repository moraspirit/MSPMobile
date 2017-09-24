import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Modal extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Modal</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default Modal;