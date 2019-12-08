import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Login from './screens/Login';
import Welcome from './screens/Welcome';  

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
     component : <Welcome />
    }
   }
   componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
             this.setState({ component: <Login/> })
        }, 2000);
   }
   
   componentWillUnmount(){
        clearTimeout(this.timeoutHandle); 
   }
  render() {
    return this.state.component;
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
