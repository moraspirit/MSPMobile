import React, { Component } from 'react';
import { Actions, Scene, Router, Lightbox, Drawer, Tabs, Stack, Text, View } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import TabIcon from './TabIcon';

import Articles from '../containers/Articles';
import Article from '../containers/Article';
import Gallery from '../containers/Gallery';
import Rankings from '../containers/Rankings';
import About from '../containers/About';
import Modal from '../containers/Modal';
import DrawerContent from './DrawerContent';

const MENU = (<Icon name="ios-menu" size={35} color='grey' />);

const NavigationRouter = () => (
    <Router sceneStyle={styles.main} backAndroidHandler={onBackAndroid}>
        <Lightbox hideNavBar >
            <Scene key="root" hideNavBar>
                <Drawer key="drawer" contentComponent={DrawerContent} drawerIcon={MENU} navigationBarStyle={styles.navbar} titleStyle={styles.title} >

                    <Tabs
                        key="tabbar"
                        swipeEnabled
                        showLabel={false}
                        tabBarStyle={styles.tabBarStyle}
                        activeTintColor='blue'>
                        <Scene
                            initial
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
                    </Tabs>
                    <Scene back key="article" component={Article} navBarButtonColor='white' />
                    <Scene back key="about" component={About} navBarButtonColor='white' />

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
        backgroundColor: 'white'
    },
    navbar: {
        backgroundColor: '#fff'
    },
    title: {
        color: 'grey'
    },
    tabBarStyle: {
        backgroundColor: 'white',
        elevation: 2
    }
};

export default NavigationRouter;
