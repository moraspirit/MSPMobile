import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Share } from 'react-native';
import FastImage from 'react-native-fast-image'

const LIKE = require('../images/like.png');
const SHARE = require('../images/share.png');

const { height, width } = Dimensions.get('window');

const AlbumCard = (props) => {

    share = (id, name) => {
        Share.share({ message: name + ' https://www.facebook.com/MoraSpirit.Official.fanpage/photos/?tab=album&album_id=' + id + '\n#moraspirit', title: 'Mora Spirit' }, { dialogTitle: 'Share Article' });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.album.name}</Text>
            <FastImage
                style={styles.cover}
                source={{
                    uri: 'http://graph.facebook.com/' + props.album.cover_photo.id + '/picture?type=normal',
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
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
        alignItems: 'center',
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
        margin: 10
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