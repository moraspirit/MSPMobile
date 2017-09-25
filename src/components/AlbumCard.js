import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image'

const { height, width } = Dimensions.get('window');

const AlbumCard = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.album.name}</Text>
              <FastImage
                style={styles.cover}
                source={{
                    uri: 'http://graph.facebook.com/' + props.album.cover_photo.id + '/picture?type=normal',
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
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
        height: width / 1.2,
        width: width,

    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10

    }
});

export default AlbumCard;