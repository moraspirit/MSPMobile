import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, Text, Animated, Slider } from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class NowCard extends Component {
  constructor(props) {
    super(props);
    this._deltaX = new Animated.Value(0);
    this.state = {
      damping: 1-0.7,
      tension: 300
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Interactable.View
          horizontalOnly={true}
          snapPoints={[
            {x: 360},
            {x: 0, damping: 1-this.state.damping, tension: this.state.tension},
            {x: -360}
          ]}
          animatedValueX={this._deltaX}
          onSnap={this.props.onSwipe}>
          
          <Animated.View style={[styles.card, {
            opacity: this._deltaX.interpolate({
              inputRange: [-300, 0, 300],
              outputRange: [0, 1, 0],
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp'
            })
          }]}>
             {this.props.children}
          </Animated.View>
        </Interactable.View>


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
  card: {
    width: Screen.width - 40,
    backgroundColor: 'white',
    borderRadius: 6,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#7f7f7f',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 4
  },
  image: {
    width: Screen.width - 40,
    height: Screen.height <= 500 ? 70 : 150
  },
  header: {
    marginTop: 8,
    marginLeft: 20,
    height: 22,
    fontSize: 12,
    color: '#7b7b7b',
    overflow: 'hidden'
  },
  title: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 15
  },
  body: {
    marginBottom: 20,
    fontSize: 15,
    marginLeft: 15,
    color: '#7f7f7f'
  },
  playground: {
    marginTop: Screen.height <= 500 ? 10 : 40,
    padding: 20,
    width: Screen.width - 40,
    backgroundColor: '#5894f3',
    alignItems: 'stretch'
  },
  playgroundLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15
  },
  slider: {
    height: 40
  }
});