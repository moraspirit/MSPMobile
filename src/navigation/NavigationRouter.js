import React from 'react';
import { Actions, Scene, Router, Lightbox, Drawer } from 'react-native-router-flux';

import Articles from '../containers/Articles';
import Article from '../containers/Article';
import Gallery from '../containers/Gallery';
import Rankings from '../containers/Rankings';
import About from '../containers/About';
import Modal from '../containers/Modal';
import DrawerContent from './DrawerContent';

const NavigationRouter = () => (

    <Router sceneStyle={Styles} backAndroidHandler={onBackAndroid}>
        <Lightbox hideNavBar >
            <Scene key="root" hideNavBar>
                <Drawer key="drawer" contentComponent={DrawerContent} >
                    <Scene key="articles" component={Articles} />
                    <Scene key="article" component={Article} />
                    <Scene key="gallery" component={Gallery} />
                    <Scene initial key="rankings" component={Rankings} />
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

const Styles = {
    backgroundColor: 'white'
};

export default NavigationRouter;
