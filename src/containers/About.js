import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, WebView, TouchableOpacity, Dimensions, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get('window');

class About extends Component {
    openURL(url) {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
                // open browser
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    getIcon(icon, color) {
        return <Icon name={icon} size={35} color={color ? color : 'grey'} />
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        {this.getIcon('ios-eye-outline')}
                        <Text style={styles.title}>Our Vision</Text>
                    </View>
                    <Text style={styles.para}>
                        To become the leader in creating a proud, highly-intense sporting culture at university level
          in Sri Lanka,
          by promoting healthy competition and encouraging participation in sports which help undergraduates grow into
          well-rounded individuals
                </Text>
                    <View style={styles.header}>
                        {this.getIcon('ios-compass-outline')}
                        <Text style={styles.title}>Our Mission</Text>
                    </View>
                    <Text style={styles.para}>MoraSpirit – The Spirit of University Sports was launched in September 2009. It provides up to date reporting
          of sporting events in the university arena. MoraSpirit aims to uplift university sports to the highest of
          standards, create intelligent and well-rounded university undergraduates instilled with invaluable qualities
          and disciplines nurtured by sports and also to draw interest of authorities and other stakeholders towards
          them.
          More than a website and a mobile app, MoraSpirit acts as a social network itself, gathering the university community together,
          forming a sports culture. Given there was no entity to showcase university sports in general, MoraSpirit
          focused broadly on recognizing all university sportsmen and women in an unbiased manner. In 2010, MoraSpirit
          took on the challenge of covering Sri Lanka University Games (SLUG), delivering great results.
          MoraSpirit is headed and funded by a group of university of Moratuwa Alumni. The Alumni Association of
          University of Moratuwa consists of graduates, diplomats, staff and former staff who are working hard to create
          a strong relationship among the members for the advancement of the university.
          Currently, MoraSpirit is a fully functional entity housing a dynamic crew of 150 voluntary members, covering
          almost all university sports events. In addition, it carries out programs for sportsmen/women at the
          University of Moratuwa.
          At the time being, an article on average receives 150-200 hits and fans on Facebook fan page have exceeded
          49000+. Thanks to an enthusiastic crew MoraSpirit has become the destination of choice for anyone wanting to
          catch up on the latest university sports news.
          </Text>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity
                        onPress={() => this.openURL('http://www.moraspirit.com/')}
                        style={styles.socialButton}>
                        {this.getIcon('ios-globe-outline')}<Text style={styles.socialText} >Official website</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.openURL('mailto:info@moraspirit.com')}
                        style={styles.socialButton}>
                        {this.getIcon('ios-mail-outline')}<Text style={styles.socialText} >Email us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.openURL('https://www.facebook.com/pg/MoraSpirit.Official.fanpage')}
                        style={styles.socialButton}>
                        {this.getIcon('logo-facebook', '#3b5998')}<Text style={styles.socialText} >Find us on facebook</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        paddingTop: 5,
        paddingBottom: 10
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    card: {
        marginVertical: 5,
        marginHorizontal: 0,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#fff',
        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 10,
        marginLeft: 15
    },
    para: {
        fontSize: 16,
        lineHeight: 28
    },
    socialText: {
        marginLeft: 40,
        fontSize: 16
    },
    socialButton: {
        flex: 1,
        borderRadius: 50,
        borderColor: '#878484',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 40,
        flexDirection: 'row',
        margin: 5,
        marginHorizontal: 50,
        elevation: 1
    }
});

export default About;