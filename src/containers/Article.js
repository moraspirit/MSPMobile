import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight, Share } from 'react-native';
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';
import { getFullTime } from '../utils/Helpers';

import { fetchArticle } from '../actions';

const LIKE = require('../images/like.png');
const SHARE = require('../images/share.png');
const SPINNER = require('../images/spinner.gif');

const { height, width } = Dimensions.get('window');

class Article extends Component {

    componentWillMount() {
        this.props.fetchArticle(this.props.nid);
    }

    renderLoadingView = () => {
        if (this.props.loading) {
            return (
                <View style={styles.loading}>
                    <Image source={SPINNER} style={styles.spinner} />
                </View>);
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.name}>{this.props.articleTitle}</Text>
                    <Text style={styles.time}>{getFullTime(this.props.createdDate * 1000)}</Text>
                    {this.props.cover}
                    {this.renderLoadingView()}
                    <View style={styles.summary}>
                        <HTMLView value={'<ft>' + this.props.bodyValue + '</ft>'} stylesheet={htmlTagStyles} />
                    </View>
                    <View style={styles.ruler} />
                    <View style={styles.socialBar}>
                        {/* <TouchableOpacity style={styles.buttonContainer}>
                            <Image source={LIKE} style={styles.button} />
                            <Text style={styles.buttonText}>Like</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity onPress={this.props.shareArticle} style={styles.buttonContainer}>
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
        flex: 1,
        backgroundColor: '#efefef',
    },
    wrapper: {
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
        width: width
    },
    name: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#4f4a4a',
        margin: 10,
        marginBottom: 0
    },
    time: {
        marginHorizontal: 11,
        marginBottom: 5
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
    },
    loading: {
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        width
    },
    spinner: {
        height: 30,
        width: 30
    }
});

const mapStateToProps = (state) => {
    const { title, name, created, modified, body_value, uri, refreshing, loading } = state.article;
    return {
        title,
        name,
        created,
        modified,
        bodyValue: body_value,
        uri,
        refreshing,
        loading
    };
};

export default connect(mapStateToProps, { fetchArticle })(Article);
