import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight, Share } from 'react-native';
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';

import { fetchArticle } from '../actions';

const LIKE = require('../images/like.png');
const SHARE = require('../images/share.png');

const { height, width } = Dimensions.get('window');

class Article extends Component {
    componentWillMount() {
        this.props.fetchArticle(this.props.nid);
    }

    share = (nid, name) => {
        Share.share({ message: name + ' http://www.moraspirit.com/node/' + nid + '\n#moraspirit', title: 'Mora Spirit' }, { dialogTitle: 'Share Article' })
            .then((res) => { console.log(res) })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.name}>{this.props.title}</Text>
                    {this.props.cover}
                    <View style={styles.summary}>
                        <HTMLView value={'<ft>' + this.props.bodyValue + '</ft>'} stylesheet={htmlTagStyles} />
                    </View>
                    <View style={styles.ruler} />
                    <View style={styles.socialBar}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Image source={LIKE} style={styles.button} />
                            <Text style={styles.buttonText}>Like</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.share(this.props.nid, this.props.title) }} style={styles.buttonContainer}>
                            <Image source={SHARE} style={styles.button} />
                            <Text style={styles.buttonText}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const htmlTagStyles = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: 'blue', // make links coloured blue
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
        flex: 1,

        backgroundColor: '#efefef',
    },
    wrapper: {
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

const mapStateToProps = (state) => {
    const { title, name, created, modified, body_value, uri, refreshing } = state.article;
    return {
        title,
        name,
        created,
        modified,
        bodyValue: body_value,
        uri,
        refreshing
    };
};

export default connect(mapStateToProps, { fetchArticle })(Article);
