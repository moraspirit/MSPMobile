import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchAlbums, fetchInitialAlbums } from '../actions';
import AlbumCard from '../components/AlbumCard';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.props.fetchInitialAlbums();

    }

    renderCard = ({ item }) => {
        if (item && item.id === '213000905390257' || item.id === '383867768303569' || item.id === '153519138005101' || item.cover_photo == null) {
            return null;
        }
        return (<AlbumCard album={item} />);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={this.props.albums}
                    renderItem={this.renderCard}
                    keyExtractor={item => item.id + item.name}
                    showsVerticalScrollIndicator={true}
                    refreshing={this.props.refreshing}
                    onRefresh={() => { this.props.fetchInitialAlbums() }}
                    onEndReachedThreshold={10}
                    onEndReached={() => { this.props.fetchAlbums(this.props.nextURL) }}

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
        backgroundColor: '#efefef',
    },
    list: {
        marginHorizontal: 0
    }
});

const mapStateToProps = (state) => {
    return {
        albums: state.gallery.albums,
        refreshing: state.gallery.refreshing,
        nextURL: state.gallery.nextURL
    };
};

export default connect(mapStateToProps, { fetchAlbums, fetchInitialAlbums })(Gallery);