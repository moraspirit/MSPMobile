import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchInitialArticles } from '../actions';
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
                    ListHeaderComponent={ListHeader({ headerImage: HEADER, title:'Welcome to Article Feed', discription:'The latest sports news by Moraspirit' })}
                    data={this.props.articles}
                    renderItem={this.renderCard}
                    keyExtractor={item => item.nid}
                    showsVerticalScrollIndicator={true}
                    refreshing={this.props.refreshing}
                    onRefresh={() => { this.props.fetchInitialArticles() }}
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
        refreshing: state.articles.refreshing
    };
};

export default connect(mapStateToProps, { fetchInitialArticles })(Articles);
