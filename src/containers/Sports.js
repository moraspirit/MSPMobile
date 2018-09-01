import React, { Component } from 'react';
import { Modal, View, ScrollView, Text, StyleSheet, TouchableHighlight, Button, Alert } from 'react-native';
import call from 'react-native-phone-call';
import { Col, Row, Grid } from "react-native-easy-grid";
class Sports extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible){
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <View style={styles.popup}>                                          
                            <Text style = {styles.title}>Athletics (Male)</Text>
                            <Text style = {styles.para}>Venue    :Ground</Text>
                            <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                            <Text style = {styles.para}>Captain   : H.A.H.C.Hettiarachchi</Text>
                            <Text style = {styles.para}>vice-Captain : G.P.M.Lakmal</Text>
                            <Text style = {styles.para}>Contact : 0702701550</Text>
                            <Button
                                onPress={() => {
                                    const args = {
                                        number: '0372239161', // String value with the number to call
                                        prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
                                    }                            
                                    call(args).catch(console.error)
                                }}
                                title="Press Me"
                            /> 
                        </View>
                    </Modal>
                    <Button 
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible)
                        }}
                        title="Modal"/>
                </View>
                
        
                

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
    },
    card: {
        marginVertical: 10,
        marginHorizontal: 25,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#fff',
        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        margin: 10
    },
    para: {
        fontSize: 16,
        lineHeight: 25
    },
    popup: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginHorizontal:25,
        marginVertical:120,
        backgroundColor: '#fff',
        elevation: 2,
    }
});

export default Sports;
