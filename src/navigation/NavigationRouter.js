import React, { Component } from 'react';
import { Actions, Scene, Router, Lightbox, Drawer, Tabs, Stack } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList, Text, View } from 'react-native';

import TabIcon from './TabIcon';
import Articles from '../containers/Articles';
import Article from '../containers/Article';
import Gallery from '../containers/Gallery';
import Rankings from '../containers/Rankings';
import Notifications from '../containers/Notifications';
import About from '../containers/About';
import Modal from '../containers/Modal';
import DrawerContent from './DrawerContent';

const MENU = (<Icon name="ios-menu" size={35} color='grey' />);
const BACK = require('../images/back.png');

const NavigationRouter = () => (
    <Router sceneStyle={styles.main} backAndroidHandler={onBackAndroid}>
        <Lightbox hideNavBar >
            <Scene key="wrapper" hideNavBar >
                <Drawer key="drawer" contentComponent={DrawerContent} drawerIcon={MENU} navigationBarStyle={styles.navbar} titleStyle={styles.title} leftButtonIconStyle={styles.backButton} backButtonImage={BACK} >
                    <Scene key="root"  >
                        <Tabs
                            key="tabbar"
                            swipeEnabled
                            showLabel={false}
                            tabBarStyle={styles.tabBarStyle}
                            activeTintColor='#0a76a8'

                            animationEnabled
                            lazy>
                            <Scene

                                key="articles"
                                component={Articles}
                                title='Articles'
                                hideNavBar
                                icon={TabIcon}

                            />
                            <Scene
                                back
                                key="gallery"
                                component={Gallery}
                                title='Gallery'
                                navBarButtonColor='white'
                                hideNavBar
                                icon={TabIcon}
                            />
                            <Scene
                                back
                                key="rankings"
                                component={Rankings}
                                title='Rankings'
                                navBarButtonColor='white'
                                hideNavBar
                                icon={TabIcon}
                            />
                            <Scene
                                initial      
                                key="notifications"
                                component={Notifications}
                                title='Notifications'
                                navBarButtonColor='white'
                                hideNavBar
                                icon={TabIcon}
                            />
                        </Tabs>
                        <Scene back key="article" component={Article} navBarButtonColor='black' />
                        <Scene back key="about" component={About} navBarButtonColor='black' title='Mora Spirit' />
                    </Scene>
                </Drawer>
            </Scene>
            <Scene key="modal" component={Modal} />
        </Lightbox>
    </Router>
);

const onBackAndroid = () => {
    console.log(Actions.currentScene);
    if (Actions.currentScene === '_articles') {
        return false;
    }
    Actions.pop();
    return true;
};

const styles = {
    main: {
        backgroundColor: 'white',

    },
    navbar: {
        backgroundColor: 'white'
    },
    title: {
        color: 'grey',
        fontWeight: 'normal',
        fontSize: 16
    },
    backButton: {
        width: 25,
        padding: 0,
        marginRight: 0,
        marginLeft: 10
    },
    tabBarStyle: {
        backgroundColor: 'white',
        elevation: 2
    }
};

export default NavigationRouter;
