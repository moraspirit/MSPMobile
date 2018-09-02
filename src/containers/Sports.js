import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import call from 'react-native-phone-call';
import Accordion from 'react-native-collapsible/Accordion';

class Sports extends Component {

    sports=[
        {
            title:'Title1',
            venue:'Venue1',
            time:'Time1',
            captain:'Captain1',
            viceCaptian:'ViceCaptian1',
            contact:'0372239161',
            modalVisible:false,
            icon:'run'
        },
        {
            title:'Title2',
            venue:'Venue2',
            time:'Time2',
            captain:'Captain2',
            viceCaptian:'ViceCaptian2',
            contact:'0766041559',
            modalVisible:false,
            icon:'run'
        }
    ]

    _renderTitle(sport){
        return (
            <View style={styles.title}>
                <Icon
                    type='material-community'
                    name={sport.icon}
                    size={35}
                />
                <Text style = {styles.heading}>{sport.title}</Text>
            </View>
        )
    }

    _renderSectionTitle(sport){
        return (
            <View>
                <Text>{sport.title}</Text>
            </View>
        )
    }

    _renderContent(sport){
        return (
            <View style = {styles.popup}>
                <Text style = {styles.para}>Venue:{sport.venue}</Text>
                <Text style = {styles.para}>Time:{sport.time}</Text>
                <Text style = {styles.para}>Captain:{sport.captain}</Text>
                <Text style = {styles.para}>vice-Captain:{sport.viceCaptian}</Text>
                <Text style = {styles.para}>Contact:{sport.contact}</Text>
                <Button
                    raised
                    icon={{name: 'phone',type: 'material-community'}}
                    onPress={() => {
                        Sports.makeCall(sport.contact);
                    }}
                    title="Contact"
                /> 
            </View>
        )
    }

    static makeCall(number){
        const args = {
            number: number, // String value with the number to call
            prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
        }                            
        call(args).catch(console.error)
    }

    render() {
        return (
            <Accordion
                sections={this.sports}                
                renderHeader={this._renderTitle}
                renderContent={this._renderContent}
            />
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
        flexDirection:'row',
        justifyContent: 'space-around',
        padding: 10
    },
    heading: {
        fontSize: 35,
        lineHeight: 40
    },
    para: {
        fontSize: 16,
        lineHeight: 25,
        textAlign:'center'
    },
    popup: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginHorizontal:5,
        marginVertical:5,
        backgroundColor: '#fff',
        elevation: 2,
    }
});

export default Sports;
