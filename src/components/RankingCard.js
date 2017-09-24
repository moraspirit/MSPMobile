import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const COL = require('../images/uni_logos/COL.png');
const EST = require('../images/uni_logos/EST.png');
const JAF = require('../images/uni_logos/JAF.png');
const KEL = require('../images/uni_logos/KEL.png');
const MOR = require('../images/uni_logos/MOR.png');
const PER = require('../images/uni_logos/PER.png');
const RAJ = require('../images/uni_logos/RAJ.png');
const RHU = require('../images/uni_logos/RHU.png');
const SAB = require('../images/uni_logos/SAB.png');
const SEA = require('../images/uni_logos/SEA.png');
const SJP = require('../images/uni_logos/SJP.png');
const UVA = require('../images/uni_logos/UVA.png');
const VPA = require('../images/uni_logos/VPA.png');
const WAY = require('../images/uni_logos/WAY.png');

const RankingsCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.rank}>{props.uni.rank}</Text>
            <Image style={styles.logo} source={eval(props.uni.name)} resizeMode='contain' />
            <Text style={styles.name}>{props.uni.name}</Text>
            <Text style={styles.points}>{props.uni.points}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        marginVertical: 4,
        padding: 15,
        borderRadius: 5,
        borderColor: 'black',
        elevation: 1
    },
    rank: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    logo: {
        flex: 3,
        height: 70,
        width: 70,
    },
    name: {
        flex: 3,
        textAlign: 'left',
        fontSize: 16,
        marginLeft: 15
    },
    points: {
        flex: 1,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default RankingsCard;