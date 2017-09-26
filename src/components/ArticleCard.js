import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight, Share } from 'react-native';
import FastImage from 'react-native-fast-image'
import { Actions } from 'react-native-router-flux';

const LIKE = require('../images/like.png');
const SHARE = require('../images/share.png');

const { height, width } = Dimensions.get('window');
const renderCover = (uri) => {
    return <FastImage
        style={styles.cover}
        source={{
            uri: 'http://moraspirit.com/sites/default/files/styles/teaser_image/public/' + uri,
            priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
    />
}

const ArticleCard = (props) => {
    share = (nid, name) => {
        Share.share({ message: name + ' http://www.moraspirit.com/node/' + nid + '\n#moraspirit', title: 'Mora Spirit' }, { dialogTitle: 'Share Article' });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.article.title}</Text>
            {renderCover(props.article.uri.substring(9))}
            <TouchableHighlight
                style={styles.summary}
                onPress={() => { Actions.article({ nid: props.article.nid, cover: renderCover(props.article.uri.substring(9)) }) }}
            >
                <Text style={styles.summaryText}>{props.article.body_summary}... <Text style={styles.continue}>Continue Reading</Text></Text>
            </TouchableHighlight>
            <View style={styles.ruler} />
            <View style={styles.socialBar}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image source={LIKE} style={styles.button} />
                    <Text style={styles.buttonText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.share(props.article.nid, props.article.title) }} style={styles.buttonContainer}>
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
        width: width
    },
    name: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#4f4a4a',
        margin: 10
    },
    summary: {
        margin: 10
    },
    summaryText: {
        fontSize: 16,
        color: 'black'
    },
    continue: {
        color: '#a8a8a8'
    },
    ruler: {
        borderBottomColor: '#dbd9d2',
        borderBottomWidth: .7,
        width: width - 30
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

export default ArticleCard;