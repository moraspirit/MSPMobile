import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import FastImage from 'react-native-fast-image'

const { width } = Dimensions.get('window');
const spinner = require('../images/spinner.gif');
class SamrtImage extends Component {

    state = {
        loading: true
    }

    renderLoadingView = () => {
        if (this.state.loading) {
            return (
                <View style={styles.loading}>
                    <Image source={spinner} style={styles.spinner} />
                </View>);
        }
    }

    render() {
        return (
            <View>
                {this.renderLoadingView()}
                <FastImage
                    style={styles.image}
                    source={{
                        uri: this.props.uri,
                        priority: FastImage.priority.high,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                    onLoadStart={() => { console.log('Loading Image-----') }}
                    onLoad={() => { console.log('Loaded +++++++'); this.setState({ loading: false }) }}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',

    },
    image: {
        height: 200,
        width
    },
    loading: {
        position: 'absolute',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        width
    },
    spinner: {
        height: 30,
        width: 30
    }
});

export default SamrtImage;
