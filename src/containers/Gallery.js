import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions';

const INITIAL_URL = 'https://graph.facebook.com/MoraSpirit.Official.fanpage/albums?fields=name,cover_photo{id},likes.limit(0).summary(true),comments.limit(0).summary(true)&limit=10';
class Gallery extends Component {

    componentWillMount() {
        this.props.fetchAlbums(INITIAL_URL);
    }

    renderCard = ({ item }) => {
        return (<Text>{item.name}</Text>);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Gallery</Text>
                <FlatList
                    style={styles.list}
                    data={this.props.albums}
                    renderItem={this.renderCard}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    refreshing={this.props.refreshing}
                    onRefresh={() => { this.props.fetchAlbums(INITIAL_URL) }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    list: {
        marginHorizontal: 10
    }
});

const mapStateToProps = (state) => {
    return {
        albums: state.gallery.albums,
        refreshing: state.gallery.refreshing,
        nextURL: state.gallery.nextURL
    };
};

export default connect(mapStateToProps, { fetchAlbums })(Gallery);