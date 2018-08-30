import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

class Sports extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.card}>
                    <Text style = {styles.title}>Basketball</Text>
                    <Text style = {styles.para}>venue   : New gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Couch   : A.B.C.D.Siripala</Text>
                    <Text style = {styles.para}>Captain : Captain america</Text>
                    <Text style = {styles.para}>Contact : 0112653489</Text>
                </View>

                <View style={styles.card}>
                    <Text style = {styles.title}>Badminton</Text>
                    <Text style = {styles.para}>venue   : New gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Tuesday</Text>
                    <Text style = {styles.para}>Couch   : A.B.C.D.Marisipala</Text>
                    <Text style = {styles.para}>Captain : Tony Stark</Text>
                    <Text style = {styles.para}>Contact : 0112653489</Text>
                </View>

                <View style={styles.card}>
                    <Text style = {styles.title}>Cricket</Text>
                    <Text style = {styles.para}>venue   : New gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Wednesday</Text>
                    <Text style = {styles.para}>Couch   : A.B.C.D.Wijepala</Text>
                    <Text style = {styles.para}>Captain : Bird man</Text>
                    <Text style = {styles.para}>Contact : 0112653489</Text>
                </View>

                <View style={styles.card}>
                    <Text style = {styles.title}>Karate</Text>
                    <Text style = {styles.para}>venue   : New gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Thursday</Text>
                    <Text style = {styles.para}>Couch   : A.B.C.D.Sumathipala</Text>
                    <Text style = {styles.para}>Captain : Bat Man</Text>
                    <Text style = {styles.para}>Contact : 0112653489</Text>
                </View>

                <View style={styles.card}>
                    <Text style = {styles.title}>Marate</Text>
                    <Text style = {styles.para}>venue   : New gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Friday</Text>
                    <Text style = {styles.para}>Couch   : A.B.C.D.Danapala</Text>
                    <Text style = {styles.para}>Captain : Fat Man</Text>
                    <Text style = {styles.para}>Contact : 0112653489</Text>
                </View>

                <View style={styles.card}>
                    <Text style = {styles.title}>Gujarate</Text>
                    <Text style = {styles.para}>venue   : New gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Saturday</Text>
                    <Text style = {styles.para}>Couch   : A.B.C.D.Gunapala</Text>
                    <Text style = {styles.para}>Captain : Hat Man</Text>
                    <Text style = {styles.para}>Contact : 0112653489</Text>
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
    }
});

export default Sports;