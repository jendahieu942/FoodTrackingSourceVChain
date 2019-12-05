import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.containter}>
        <Text style={styles.welcome}>Login</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff'
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  }
});
