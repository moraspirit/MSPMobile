import React from 'react';
import { Actions, Scene, Router, Lightbox, Drawer } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import Articles from '../containers/Articles';
import Article from '../containers/Article';
import Gallery from '../containers/Gallery';
import Rankings from '../containers/Rankings';
import About from '../containers/About';
import Modal from '../containers/Modal';
import DrawerContent from './DrawerContent';

const ABOUT = (<Icon name="ios-menu" size={35} color='white' />);

const NavigationRouter = () => (
    <Router sceneStyle={styles.main} backAndroidHandler={onBackAndroid}>
        <Lightbox hideNavBar >
            <Scene key="root" hideNavBar>
                <Drawer key="drawer" contentComponent={DrawerContent} drawerIcon={ABOUT} navigationBarStyle={styles.navbar} titleStyle={styles.title}>
                    <Scene key="articles" component={Articles} />
                    <Scene key="article" component={Article} />
                    <Scene key="gallery" component={Gallery} />
                    <Scene initial key="rankings" component={Rankings} title='Rankings' />
                    <Scene key="about" component={About} />
                </Drawer>
            </Scene>
            <Scene key="modal" component={Modal} />
        </Lightbox>
    </Router>
);

const onBackAndroid = () => {
    if (Actions.currentScene === 'home') {
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
        backgroundColor: '#ef4e3a'
    },
    title: {
        color: 'white'
    }
};

export default NavigationRouter;
