import React, {Component} from 'react';
import {     AppRegistry,
  View, 
  Text, 
  Image, 
  TextInput,
  Keyboard,
  AsyncStorage,
  Alert,
  KeyboardAvoidingView, 
  StyleSheet
 } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import AnimatedMultistep from 'react-native-animated-multistep'

import Step1 from "../steps/step1";
import Step2 from "../steps/step2";
import Step3 from "../steps/step3";

const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },
  { name: "step 3", component: Step3 }
];



export default class RechargeScreen extends Component {
      constructor(props){
      super(props)
      this.state = {};

      

try {
      AsyncStorage.getItem('database_form').then((value) => {
      this.setState({
      list: value,})
    })
    
  } 
catch
      (err){
      console.log(err)
    }
    }

    onNext = () => {
      console.log("Next");
    };
    onBack = () => {
      console.log("Back");
    };
  
    finish = state => {
      console.log("TCL: App -> state", state);
    };

	


    

render()
    {
     


return (
  <ScrollView>
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "padding"}
      style={StyleSheet.container}
      ></KeyboardAvoidingView>
      
      
        
      <View style={{ flex: 1, backgroundColor: "#1dd1a1" }}>
        <View style={styles.upperContainer}>
          <Text style={styles.loginText}>Recargar</Text>
        </View>
        <View style={styles.lowerContainer}>
          <AnimatedMultistep
            steps={allSteps}
            onFinish={this.finish}
            animate={true}
            onBack={this.onBack}
            onNext={this.onNext}
          />
        </View>
      </View>

      
            
      
      

      </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginText: {
    fontSize: 32,
    color: "#fff"
  },
  lowerContainer: {
    flex: 2
  }
});



AppRegistry.registerComponent('RechargeScreen', () => RechargeScreen);