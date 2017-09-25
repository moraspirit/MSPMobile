import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchInitialArticles } from '../actions';
import ArticleCard from '../components/ArticleCard';

class Articles extends Component {

    constructor(props) {
        super(props);
        this.props.fetchInitialArticles();
    }

    renderCard = ({ item }) => {
        return (<ArticleCard article={item} />);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
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
        marginHorizontal: 5
    }
});

const mapStateToProps = (state) => {
    return {
        articles: state.articles.articles,
        refreshing: state.articles.refreshing
    };
};

export default connect(mapStateToProps, { fetchInitialArticles })(Articles);
