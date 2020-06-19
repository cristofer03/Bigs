import { Ionicons } from '@expo/vector-icons';
import React, {Component} from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default class Services extends Component {

  constructor(){
    super()
    this.state = {
      list: ''
    }
    try {
      AsyncStorage.getItem('database_form').then((value) => {
        this.setState({
          list: value
        })
      })
    } catch(err){
      console.log(err)
    }
  }

  

render(){
  const data = (this.state.list)
  return (
    <View style={{flex:1, marginTop:80}}>
      <Text>{data}</Text>
    </View>
  )
}

}