import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    Alert,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import bgImage from '../assets/images/login-wallpaper.jpg';
import { login } from '../components/api.js';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        'username': '',
        'password': '',
        'authenization': '',
        'inputUN': styles.input,
        'inputPW': styles.input,
        'errorMsg': '',
    }

    LoginAction = async () => {
        if (this.state.username == '' || this.state.password == '') {
            Alert.alert(
                'Error',
                'Input your correct user name and password!',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        } else {
            this.state.authenization = login(this.state.username, this.state.password)
        }
    }

    InputUserNameChecker = async () => {
        console.info('vao day')
        if (this.state.username.length == 0) {
            this.setState(
                {
                    inputUN: styles.inputError,
                    errorMsg: 'username is required'
                }
            )
        } else {
            this.setState(
                {
                    inputUN: styles.input,
                    errorMsg: ''
                }
            )
        }
    }

    InputPasswordChecker = async () => {
        console.info('vao day')
        if (this.state.password.length == 0) {
            this.setState(
                {
                    inputPW: styles.inputError,
                    errorMsg: 'password is required'
                }
            )
        } else {
            this.setState(
                {
                    inputPW: styles.input,
                    errorMsg: ''
                }
            )
        }
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
                        style={this.state.inputUN}
                        placeholder='user name'
                        onChangeText={TextInputValue =>
                            this.setState({ username: TextInputValue })}
                        onEndEditing={this.InputUserNameChecker.bind(this)}
                    />
                </Animatable.View>
                <Animatable.View
                    animation='bounceInRight'
                    style={styles.inputAnimate}>
                    <TextInput
                        style={this.state.inputPW}
                        placeholder='password'
                        secureTextEntry
                        onChangeText={TextInputValue =>
                            this.setState({ password: TextInputValue })}
                        onEndEditing={this.InputPasswordChecker.bind(this)}
                    />
                </Animatable.View>
                <Text style={styles.errorMsg}>{this.state.errorMsg}</Text>
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
    inputError: {
        width: '75%',
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 20,
        borderColor: '#ff0000',
        borderWidth: 1,
    },
    errorMsg: {
        color: '#ff0000',
        fontSize: 20
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        textShadowColor: '#000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    }
});

