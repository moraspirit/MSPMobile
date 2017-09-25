import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight, Share } from 'react-native';

const LOGO = require('../images/LogoHeader.png')
const { height, width } = Dimensions.get('window');

const ListHeader = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.headerImage} resizeMode='cover' style={styles.cover}>
                <View style={styles.wraper}>
                    <Image source={LOGO} resizeMode='contain' style={styles.logo} />
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.discription}>{props.discription}</Text>
                </View>
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
        borderRadius: 1,
        borderColor: 'black',
        elevation: 2
    },
    cover: {
        height: width * 364 / 960,
        width: width
    },
    wraper: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10
    },
    logo: {
        height: 90,
        width: 90
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    discription: {
        color: 'white',
        fontSize: 14
    }
});

export default ListHeader;