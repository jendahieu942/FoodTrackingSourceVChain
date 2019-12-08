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
                <Text style={styles.fixedText}> FOSOVCB </Text>
                <Animatable.Text animation='slideInUp'
                    style={styles.welcomText}>
                    Welcome
                </Animatable.Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        alignItems: 'center',
    },
    fixedText: {
        fontSize: 50,
        marginTop: 10
    },
    welcomText: {
        justifyContent: 'center'
    }
});

