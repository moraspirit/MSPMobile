import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button,Icon, Avatar } from 'react-native-elements'
import call from 'react-native-phone-call';
import Accordion from 'react-native-collapsible/Accordion';

class Sports extends Component {

    sports=[
        {
            title:'Athletics (Male)',
            venue:'Venue1',
            time:'Time1',
            captain:'H.A.H.C.Hettiarachchi',
            viceCaptian:'G.P.M.Lakmal',
            contact:'0702701550',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/athletic.png'
        },
        {
            title:'Athletics (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'R.P.M.P.Rajapaksha',
            viceCaptian:'W.M.M.Botejue',
            contact:'0702519164',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/icon/women.png'
        },
        {
            title:'Badminton (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'Disal Kuruppuarachchi',
            viceCaptian:'M.A.V.A.Mannapperuma',
            contact:'0713157241',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/badminton.png'
        },
        {
            title:'Badminton (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'I.H.sachini',
            viceCaptian:'T.S.Samaranayake',
            contact:'0771844709',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/badminton.png'
        },
        {
            title:'Baseball',
            venue:'Venue2',
            time:'Time2',
            captain:'P.K.P.Kumara',
            viceCaptian:'J.D.V.Dissanayake',
            contact:'0766013595',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/baseball.png'
        },
        {
            title:'Basketball (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'M.A.T.Peiris',
            viceCaptian:'K.S.Eranga',
            contact:'0767233522',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/basketball.png'
        },
        {
            title:'Basketball (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'R.M.A.S.Ranathunga',
            viceCaptian:'B.P.P.M.Pathirathna',
            contact:'0714741065',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/basketball.png'
        },
        {
            title:'Carrom (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'K.L.S.V.Liyanage',
            viceCaptian:'H.P.Eranga',
            contact:'0713946843',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/carrom.png'
        },
        {
            title:'Carrom (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'W.G.A.Dilshani',
            viceCaptian:'A.D.D.K.Nandasena',
            contact:'0712189935',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/carrom.png'
        },
        {
            title:'Chess (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'L.T.Munasinghe',
            viceCaptian:'D.M.N. de Silva',
            contact:'0777388430',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/chess.png'
        },
        {
            title:'Chess (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'Dinushi Premanath',
            viceCaptian:'Rangika Samarawickrama',
            contact:'0766291995',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/chess.png'
        },
        {
            title:'Cricket',
            venue:'Venue2',
            time:'Time2',
            captain:'V.K.Kottawasinghe',
            viceCaptian:'D.M.O.R.Mahadiulwewa',
            contact:'0772807592',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/cricket.png'
        },
        {
            title:'Elle (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'B.A.Prasanna',
            viceCaptian:'K.R.Indeevara',
            contact:'0712909101',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/elle.png'
        },
        {
            title:'Elle (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'K.T.W.Bandara',
            viceCaptian:'H.N.S.H.Wijewardhana',
            contact:'0712865222',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/elle.png'
        },
        {
            title:'Football',
            venue:'Venue2',
            time:'Time2',
            captain:'S.A.A.U.Y.Athukorala',
            viceCaptian:'K.Vindura janith',
            contact:'0712442921',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/football.png'
        },
        {
            title:'Hokey (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'H.P.C.S.Udayakumara',
            viceCaptian:'R.A.P.Dhanuka',
            contact:'0719197035',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/hockey.png'
        },
        {
            title:'Hockey (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'S.N.Gamage',
            viceCaptian:'H.K.I.R.Hewa',
            contact:'0716947097',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/hockey.png'
        },
        {
            title:'Karathe (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'A.V.Warnapura',
            viceCaptian:'U.G.L.Madushan',
            contact:'0711788179',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/karathe.png'
        },
        {
            title:'Karate (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'T.A.M.C.Rathnasekara',
            viceCaptian:'A.M.Fernando',
            contact:'0713011612',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/karathe.png'
        },
        {
            title:'Netball',
            venue:'Venue2',
            time:'Time2',
            captain:'M.P.Janakee',
            viceCaptian:'D.M.S.P.Dissanayake',
            contact:'0711230890',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/netball.png'
        },
        {
            title:'Rowing (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'S.A.B.Silva',
            viceCaptian:'L.N.A.N.S.Nissanka',
            contact:'0719774101',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/rowing.png'
        },
        {
            title:'Rowing (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'J.M.Asini Dilina',
            viceCaptian:' ',
            contact:'0711289188',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/rowing.png'
        },
        {
            title:'Road Race',
            venue:'Venue2',
            time:'Time2',
            captain:'G.D.C.M.S.Somarathna',
            viceCaptian:'S.R.T.S.Sudasinghe',
            contact:'0769299090',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/icon/overall.png'
        },
        {
            title:'Rugby (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'Sachin Niisankaarachchi',
            viceCaptian:'W.M.A.V.Weerakoon',
            contact:'0714202805',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/rugby.png'
        },
        {
            title:'Swimming (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'D.A.S.R.Jayathunge',
            viceCaptian:'W.P.N.R.Withana',
            contact:'0711599575',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/swimming.png'
        },
        {
            title:'Swimming (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'W.D.N.Kularatne',
            viceCaptian:'S.B.K.E.Dissanayake',
            contact:'0773067767',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/swimming.png'
        },
        {
            title:'Table Tennis (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'A.D.Y.P.Jayasinghe',
            viceCaptian:'B.A.D.T.Balasooriya',
            contact:'0715942689',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/tt.png'
        },
        {
            title:'Table Tennis (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'A.S.M.K.R.Sahabandu',
            viceCaptian:'G.K.S.P.Karunasena',
            contact:'0717277700',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/tt.png'
        },
        {
            title:'Teakwondo (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'A.B.M.L.B.Abeykoon',
            viceCaptian:'W.M.Anjana',
            contact:'0714140262',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/teakwondo.png'
        },
        {
            title:'Teakwondo (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'K.P.Thilini Wathsala',
            viceCaptian:'M.G.H.C.Dissanayake',
            contact:'0711403308',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/teakwondo.png'
        },
        {
            title:'Tennis (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'Rashan Wickramarathna',
            viceCaptian:'Pramod M. Silva',
            contact:'0716526927',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/tennis.png'
        },
        {
            title:'Tennis (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'M.G.K.Gunasekara',
            viceCaptian:'H.M.A.N.Herath',
            contact:'0714911704',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/tennis.png'
        },
        {
            title:'Volleyball (Male)',
            venue:'Venue2',
            time:'Time2',
            captain:'T.M.A.M.Bandara',
            viceCaptian:'N.E.P.M.Neelawala',
            contact:'0719170426',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/volleyball.png'
        },
        {
            title:'Volleyball (Female)',
            venue:'Venue2',
            time:'Time2',
            captain:'K.S.Sriyani',
            viceCaptian:'R.H.N.Madushani',
            contact:'0775928547',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/volleyball.png'
        },
        {
            title:'Weightlifting',
            venue:'Venue2',
            time:'Time2',
            captain:'O.M.D.P.Sampath',
            viceCaptian:'T.A.S.E.Wimalasiri',
            contact:'0714140317',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/weigthlifting.png'
        },
        {
            title:'Wrestling',
            venue:'Venue2',
            time:'Time2',
            captain:'E.D.T.S.Madhusanka',
            viceCaptian:'A.K.M.Amarasinghe',
            contact:'0714749485',
            modalVisible:false,
            icon:'https://www.sports.moraspirit.com/img/sports/wrestling.png'
        }
    ]

    _renderTitle(sport){
        return (
            <View style={styles.title}>
                <Avatar
                    size="small"
                    rounded
                    source={{uri: sport.icon}}
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
