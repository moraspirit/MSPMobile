import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchRankings } from '../actions';
import RankingCard from '../components/RankingCard';

class Rankings extends Component {
    componentWillMount() {
        this.props.fetchRankings();
    }

    renderCard = ({ item }) => {
        return (<RankingCard uni={item} />);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={this.props.ranks}
                    renderItem={this.renderCard}
                    keyExtractor={item => item.name}
                    showsVerticalScrollIndicator={false}
                    refreshing={this.props.refreshing}
                    onRefresh={() => { this.props.fetchRankings() }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef'
    },
    list: {
        marginHorizontal: 10
    }
});

const mapStateToProps = (state) => {
    return {
        ranks: state.rankings.ranks,
        refreshing: state.rankings.refreshing
    };
};

export default connect(mapStateToProps, { fetchRankings })(Rankings);