import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

class About extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>Our Vision</Text>
                    <Text style={styles.para}>
                        To become the leader in creating a proud, highly-intense sporting culture at university level
          in Sri Lanka,
          by promoting healthy competition and encouraging participation in sports which help undergraduates grow into
          well-rounded individuals
                </Text>
                    <Text style={styles.title}>Our Mission</Text>
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
                    <Text selectable>078 391 0804</Text>
                    <Text selectable>info@moraspirit.com </Text>
                    <Text selectable>www.moraspirit.com</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
    },
    card: {
        marginVertical: 10,
        marginHorizontal: 25,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#fff',
        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        margin: 10
    },
    para: {
        fontSize: 16,
        lineHeight: 25
    }
});

export default About;