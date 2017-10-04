import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Share, Linking } from 'react-native';
import FastImage from 'react-native-fast-image'
import SmartImage from './SmartImage';
import { getTime } from '../utils/Helpers';

const LIKE = require('../images/like.png');
const SHARE = require('../images/share.png');
const { height, width } = Dimensions.get('window');

const AlbumCard = (props) => {

    share = (id, name) => {
        Share.share({ message: name + ' https://www.facebook.com/MoraSpirit.Official.fanpage/photos/?tab=album&album_id=' + id + '\n#moraspirit', title: 'Mora Spirit' }, { dialogTitle: 'Share Album' });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.album.name}</Text>
            <Text style={styles.time}>{getTime(props.album.created_time.split('+')[0] + '+00:00')}</Text> 
            <TouchableOpacity
                onPress={() => {
                    let url = 'facebook:/photos?album=' + props.album.id + '&user=132093176814364';
                    console.log(url);
                    Linking.canOpenURL(url).then(supported => {
                        if (!supported) {
                            console.log('Can\'t handle url: ' + url);
                        } else {
                            return Linking.openURL(url);
                        }
                    }).catch(err => console.log('An error occurred', err));
                }}>
                <SmartImage uri={'http://graph.facebook.com/' + props.album.cover_photo.id + '/picture?type=normal'} />
            </TouchableOpacity>
            <View style={styles.socialBar}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image source={LIKE} style={styles.button} />
                    <Text style={styles.buttonText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.share(props.album.id, props.album.name) }} style={styles.buttonContainer}>
                    <Image source={SHARE} style={styles.button} />
                    <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 4,
        borderRadius: 1,
        borderColor: 'black',
        elevation: 2
    },
    cover: {
        height: 300,
        width: width,

    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
        marginBottom: 0
    },
    time: {
        marginHorizontal: 11,
        marginBottom: 5
    },
    socialBar: {
        flex: 1,
        height: 40,
        width,
        margin: 3,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        height: 20,
        width: 20,
        // tintColor: 'red'
    },
    buttonText: {
        marginLeft: 8
    }
});

export default AlbumCard;