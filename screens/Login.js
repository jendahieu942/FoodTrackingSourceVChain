import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import bgImage from '../assets/images/login-wallpaper.jpg';
import { login } from '../components/api.js';

export default class Login extends Component {
    state = {
        'username': '',
        'password': '',
        'authenization': ''
    }

    SignupAction = async () => {
        console.info("sign up")
    }

    LoginAction = async () => {
        if (this.state.username)
            this.state.authenization = login(this.state.username, this.state.password)
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.containter}>
                <StatusBar backgroundColor='#ffc266' />
                <Animatable.Text
                    style={styles.welcome}
                    animation='slideInDown'
                >
                    Login
                </Animatable.Text>
                <Animatable.View
                    animation='bounceInLeft'
                    style={styles.inputAnimate}>
                    <TextInput
                        style={styles.input}
                        placeholder='user name'
                        onChangeText={TextInputValue =>
                            this.setState({ username: TextInputValue })}
                    />
                </Animatable.View>
                <Animatable.View
                    animation='bounceInRight'
                    style={styles.inputAnimate}>
                    <TextInput
                        style={styles.input}
                        placeholder='password'
                        secureTextEntry
                        onChangeText={TextInputValue =>
                            this.setState({ password: TextInputValue })} />
                </Animatable.View>
                <Animatable.View
                    style={styles.btnContainer}
                    animation='slideInUp'>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={this.LoginAction.bind(this)}>
                        <Text style={styles.btnTxt}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={this.SignupAction.bind(this)}>
                        <Text style={styles.btnTxt}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 70,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        textDecorationStyle: 'solid',
        textShadowColor: '#00ff00',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontFamily: 'sans-serif-medium'
    },
    inputAnimate: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '75%',
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 20
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
        marginTop: 20
    },
    userBtn: {
        backgroundColor: '#1affff',
        padding: 10,
        width: '45%',
        borderRadius: 10,
    },
    btnTxt: {
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
        textDecorationStyle: 'solid',
        textDecorationStyle: 'solid',
        textShadowColor: '#000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    }
});

