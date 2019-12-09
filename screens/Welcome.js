import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Text,
    View
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import bgImage from '../assets/images/login-wallpaper.jpg';

export default class Welcome extends Component {
    state = {
        'authenization': ''
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.containter}>
                <Animatable.Text animation='slideInDown'
                    style={styles.fixedText}>
                    FOSOVCB
                </Animatable.Text>
                <Animatable.Text animation={welComeZoomIn}
                    style={styles.welcomText}>
                    Welcome
                </Animatable.Text>
            </ImageBackground>
        )
    }
}

const welComeZoomIn = {
    0: {
        scale: 0.5,
        opacity: 0.5
    },
    0.4: {
        scale: 1.5,
        opacity: 0.8
    },
    0.6: {
        scale: 2,
        opacity: 1
    },
    0.8: {
        scale: 2.5,
        opacity: 1
    },
    1: {
        scale: 1,
        opacity: 1
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fixedText: {
        fontSize: 50,
        marginBottom: '45%',
        fontFamily: 'sans-serif-medium',
        color: '#fff'
    },
    welcomText: {
        fontSize: 40,
        marginTop: '15%',
        fontFamily: 'GillSans-SemiBold',
        color: '#fff',
        textShadowColor: '#111',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    }
});

