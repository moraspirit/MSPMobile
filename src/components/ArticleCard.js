import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Share } from 'react-native';
import FastImage from 'react-native-fast-image'
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
import SmartImage from './SmartImage';
import { getTime } from '../utils/Helpers';

const LIKE = require('../images/like.png');
const SHARE = require('../images/share.png');
const { height, width } = Dimensions.get('window');

const renderCover = (uri) => {
    return <SmartImage uri={'http://moraspirit.com/sites/default/files/styles/teaser_image/public/' + uri} />
}

const ArticleCard = (props) => {
    const shareArticle = (nid, name) => {
        Share.share({ message: name + ' http://www.moraspirit.com/node/' + nid + '\n#moraspirit', title: 'Mora Spirit' }, { dialogTitle: 'Share Article' })
            .then((res) => { console.log(res) })
            .catch(err => console.log(err));;
    }

    // const like = () => {

    // }

    // const logIntoFB = () => {
    //     AccessToken.getCurrentAccessToken()
    //         .then((res) => {
    //             if (res) {
    //                 console.log(res.accessToken);
    //                 this.like();
    //             } else {
    //                 LoginManager.logInWithReadPermissions(['publish_pages']).then(
    //                     (result) => {
    //                         if (result.isCancelled) {
    //                             alert('Login was cancelled');
    //                         } else {
    //                             alert('Login was successful with permissions: '
    //                                 + result.grantedPermissions.toString());
    //                             this.like();
    //                         }
    //                     },
    //                     (error) => {
    //                         alert('Login failed with error: ' + error);
    //                     }
    //                 );
    //             }
    //         });
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.article.title}</Text>
            <Text style={styles.time}>{getTime(props.article.created * 1000)}</Text>
            {renderCover(props.article.uri.substring(9))}
            <TouchableOpacity
                style={styles.summary}
                onPress={() => {
                    Actions.article({
                        nid: props.article.nid,
                        title: props.article.title,
                        articleTitle: props.article.title,
                        createdDate: props.article.created,
                        cover: renderCover(props.article.uri.substring(9)),
                        shareArticle: () => { shareArticle(props.article.nid, props.article.title) }
                    })
                }}
            >
                <HTMLView value={'<ft>' + props.article.body_summary + '...<a>Continue Reading</a></ft>'} stylesheet={htmlTagStyles} />
            </ TouchableOpacity>
            <View style={styles.ruler} />
            <View style={styles.socialBar}>
                {/* <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => { this.logIntoFB() }}>
                    <Image source={LIKE} style={styles.button} />
                    <Text style={styles.buttonText}>Like</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => { shareArticle(props.article.nid, props.article.title) }} style={styles.buttonContainer}>
                    <Image source={SHARE} style={styles.button} />
                    <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const htmlTagStyles = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#072e91', // make links coloured blue
    },
    ft: {
        fontSize: 17
    },
    sup: {
        textAlignVertical: 'top',
        textAlign: 'center',
        fontSize: 15
    }
});

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
        alignSelf: 'flex-start',
        fontSize: 23,
        fontWeight: 'bold',
        color: '#4f4a4a',
        margin: 10,
        marginBottom: 0
    },
    time: {
        alignSelf: 'flex-start',
        marginHorizontal: 11,
        marginBottom: 5
    },
    summary: {
        margin: 10
    },
    summaryText: {
        fontSize: 16,
        lineHeight: 20,
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