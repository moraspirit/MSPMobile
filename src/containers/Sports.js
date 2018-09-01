import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

class Sports extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.card}>
                    <Text style = {styles.title}>Athletics (Male)</Text>
                    <Text style = {styles.para}>venue   : Ground</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain   : H.A.H.C.Hettiarachchi</Text>
                    <Text style = {styles.para}>vice-Captain : G.P.M.Lakmal</Text>
                    <Text style = {styles.para}>Contact : 0702701550</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Athletics (Female)</Text>
                    <Text style = {styles.para}>venue   : Ground</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain   : R.P.M.P.Rajapaksha</Text>
                    <Text style = {styles.para}>vice-Captain : W.M.M.Botejue</Text>
                    <Text style = {styles.para}>Contact : 0702519164</Text>
                </View>
            
                <View style={styles.card}>
                    <Text style = {styles.title}>Badminton (Male)</Text>
                    <Text style = {styles.para}>venue   : Old Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain   : Disal Kuruppuarachchi</Text>
                    <Text style = {styles.para}>vice-Captain : M.A.V.A.Mannapperuma</Text>
                    <Text style = {styles.para}>Contact : 0713157241</Text>
                </View>

                <View style={styles.card}>
                    <Text style = {styles.title}>Badminton (Female)</Text>
                    <Text style = {styles.para}>venue   : Old Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain   : I.H.sachini</Text>
                    <Text style = {styles.para}>vice-Captain : T.S.Samaranayake</Text>
                    <Text style = {styles.para}>Contact : 0771844709</Text>
                </View>

                <View style={styles.card}>
                    <Text style = {styles.title}>Baseball</Text>
                    <Text style = {styles.para}>venue   : Ground</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain   : P.K.P.Kumara</Text>
                    <Text style = {styles.para}>vice-Captain : J.D.V.Dissanayake</Text>
                    <Text style = {styles.para}>Contact : 0766013595</Text>
                </View>

                <View style={styles.card}>
                    <Text style = {styles.title}>Basketball (Male)</Text>
                    <Text style = {styles.para}>venue   : Old Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain   : M.A.T.peiris</Text>
                    <Text style = {styles.para}>vice-Captain : K.S.Eranga</Text>
                    <Text style = {styles.para}>Contact : 0767233522</Text>
                </View>

                <View style={styles.card}>
                    <Text style = {styles.title}>Basketball (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : R.M.A.S.Ranathunga </Text>
                    <Text style = {styles.para}>vice-Captain : B.P.P.M.Pathirathna</Text>
                    <Text style = {styles.para}>Contact : 0714741065</Text>
                </View>

                <View style={styles.card}>
                    <Text style = {styles.title}>Carrom (Male)</Text>
                    <Text style = {styles.para}>venue   : Unknown</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : K.L.S.V.Liyanage </Text>
                    <Text style = {styles.para}>vice-Captain : H.P.Eranga</Text>
                    <Text style = {styles.para}>Contact : 0713946843</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Carrom (Female)</Text>
                    <Text style = {styles.para}>venue   : Unknown</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : W.G.A.Dilshani </Text>
                    <Text style = {styles.para}>vice-Captain : A.D.D.K.Nandasena</Text>
                    <Text style = {styles.para}>Contact : 0712189935</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Chess (Male)</Text>
                    <Text style = {styles.para}>venue   : Unknown</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : L.T.Munasinghe </Text>
                    <Text style = {styles.para}>vice-Captain : D.M.N. de Silva</Text>
                    <Text style = {styles.para}>Contact : 0777388430</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Chess (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : Dinushi Premanath </Text>
                    <Text style = {styles.para}>vice-Captain : Rangika Samarawickrama</Text>
                    <Text style = {styles.para}>Contact : 0766291995</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Cricket</Text>
                    <Text style = {styles.para}>venue   : Ground</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : V.K.Kottawasinghe </Text>
                    <Text style = {styles.para}>vice-Captain : D.M.O.R.Mahadiulwewa</Text>
                    <Text style = {styles.para}>Contact : 0772807592</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Elle (Male)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : B.A.Prasanna </Text>
                    <Text style = {styles.para}>vice-Captain : K.R.Indeevara</Text>
                    <Text style = {styles.para}>Contact : 0712909101</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Elle (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : K.T.W.Bandara </Text>
                    <Text style = {styles.para}>vice-Captain : H.N.S.H.Wijewardhana</Text>
                    <Text style = {styles.para}>Contact : 0712865222</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Football</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : S.A.A.U.Y.Athukorala </Text>
                    <Text style = {styles.para}>vice-Captain : K.Vindura janith</Text>
                    <Text style = {styles.para}>Contact : 0712442921</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Hokey (Male)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : H.P.C.S.Udayakumara </Text>
                    <Text style = {styles.para}>vice-Captain : R.A.P.Dhanuka</Text>
                    <Text style = {styles.para}>Contact : 0719197035</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Hockey (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : S.N.Gamage </Text>
                    <Text style = {styles.para}>vice-Captain : H.K.I.R.Hewa</Text>
                    <Text style = {styles.para}>Contact : 0716947097</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Karate (Male)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : A.V.Warnapura </Text>
                    <Text style = {styles.para}>vice-Captain : U.G.L.Madushan</Text>
                    <Text style = {styles.para}>Contact : 0711788179</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Karate (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : T.A.M.C.Rathnasekara </Text>
                    <Text style = {styles.para}>vice-Captain : A.M.Fernando</Text>
                    <Text style = {styles.para}>Contact : 0713011612</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Netball</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : M.P.Janakee </Text>
                    <Text style = {styles.para}>vice-Captain : D.M.S.P.Dissanayake</Text>
                    <Text style = {styles.para}>Contact : 0711230890</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Rowing (Male)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : S.A.B.Silva </Text>
                    <Text style = {styles.para}>vice-Captain : L.N.A.N.S.Nissanka</Text>
                    <Text style = {styles.para}>Contact : 0719774101</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Rowing (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : J.M.Asini Dilina </Text>
                    <Text style = {styles.para}>vice-Captain : </Text>
                    <Text style = {styles.para}>Contact : 0711289188</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Road Race</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : G.D.C.M.S.Somarathna </Text>
                    <Text style = {styles.para}>vice-Captain : S.R.T.S.Sudasinghe</Text>
                    <Text style = {styles.para}>Contact : 0769299090</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Rugby (Male)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : Sachin Niisankaarachchi </Text>
                    <Text style = {styles.para}>vice-Captain : W.M.A.V.Weerakoon</Text>
                    <Text style = {styles.para}>Contact : 0714202805</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Swimming (Male)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : D.A.S.R.Jayathunge </Text>
                    <Text style = {styles.para}>vice-Captain : W.P.N.R.Withanat>
                    <Text style = {styles.para}>Contact : 0711599575</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Swimming (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : W.D.N.Kularatne </Text>
                    <Text style = {styles.para}>vice-Captain : S.B.K.E.Dissanayake</Text>
                    <Text style = {styles.para}>Contact : 0773067767</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Table Tennis (Male)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : A.D.Y.P.Jayasinghe </Text>
                    <Text style = {styles.para}>vice-Captain : B.A.D.T.Balasooriya</Text>
                    <Text style = {styles.para}>Contact : 0715942689</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Table Tennis (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : A.S.M.K.R.Sahabandu </Text>
                    <Text style = {styles.para}>vice-Captain : G.K.S.P.Karunasena</Text>
                    <Text style = {styles.para}>Contact : 0717277700</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Teakwondo (Male)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : A.B.M.L.B.Abeykoon </Text>
                    <Text style = {styles.para}>vice-Captain : W.M.Anjana</Text>
                    <Text style = {styles.para}>Contact : 0714140262</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Teakwondo (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : K.P.Thilini Wathsala </Text>
                    <Text style = {styles.para}>vice-Captain : M.G.H.C.Dissanayake</Text>
                    <Text style = {styles.para}>Contact : 0711403308</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Tennis (Male)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : Rashan Wickramarathna </Text>
                    <Text style = {styles.para}>vice-Captain : Pramod M. Silva</Text>
                    <Text style = {styles.para}>Contact : 0716526927</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Tennis (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : M.G.K.Gunasekara </Text>
                    <Text style = {styles.para}>vice-Captain : H.M.A.N.Herath</Text>
                    <Text style = {styles.para}>Contact : 0714911704</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Volleyball (Male)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : T.M.A.M.Bandara </Text>
                    <Text style = {styles.para}>vice-Captain : N.E.P.M.Neelawala</Text>
                    <Text style = {styles.para}>Contact : 0719170426</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Volleyball (Female)</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : K.S.Sriyani </Text>
                    <Text style = {styles.para}>vice-Captain : R.H.N.Madushani</Text>
                    <Text style = {styles.para}>Contact : 0775928547</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Weightlifting</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : O.M.D.P.Sampath </Text>
                    <Text style = {styles.para}>vice-Captain : T.A.S.E.Wimalasiri</Text>
                    <Text style = {styles.para}>Contact : 0714140317</Text>
                </View>
        
                <View style={styles.card}>
                    <Text style = {styles.title}>Wrestling</Text>
                    <Text style = {styles.para}>venue   : New Gym</Text>
                    <Text style = {styles.para}>Time    : 6.00pm Every Monday</Text>
                    <Text style = {styles.para}>Captain  : E.D.T.S.Madhusanka </Text>
                    <Text style = {styles.para}>vice-Captain : A.K.M.Amarasinghe</Text>
                    <Text style = {styles.para}>Contact : 0714749485</Text>
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
