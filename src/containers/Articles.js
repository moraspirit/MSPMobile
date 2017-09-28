import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchInitialArticles, fetchArticles } from '../actions';
import ArticleCard from '../components/ArticleCard';
import ListHeader from '../components/ListHeader';

const HEADER = require('../images/articlesCover.jpg');

class Articles extends Component {

    constructor(props) {
        super(props);
        this.props.fetchInitialArticles();
    }

    renderCard = ({ item }) => {
        return (<ArticleCard article={item} />);
    }

    render() {
        // TODO: ListEmptyComponent
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    ListHeaderComponent={ListHeader({ headerImage: HEADER, title: 'Welcome to Article Feed', discription: 'The latest sports news by Moraspirit' })}
                    data={this.props.articles}
                    renderItem={this.renderCard}
                    keyExtractor={item => item.nid + item.title}
                    showsVerticalScrollIndicator={true}
                    refreshing={this.props.refreshing}
                    onRefresh={() => { this.props.fetchInitialArticles() }}
                    onEndReachedThreshold={5}
                    onEndReached={() => { this.props.fetchArticles(this.props.offset) }}
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
        articles: state.articles.articles,
        refreshing: state.articles.refreshing,
        offset: state.articles.offset
    };
};

export default connect(mapStateToProps, { fetchInitialArticles, fetchArticles })(Articles);
