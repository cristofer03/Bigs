import React, { Component } from "react";
import { AsyncStorage, Image, View, TouchableOpacity, TextInput, Text } from "react-native";

import styles from "./styles";

export class step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      rechargeNumber:''
    };
    console.log(props);
    console.log(this.state.rechargeNumber)
  }
  

  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep()
    };
  };

  selectedPrefijo809 = () =>{
    AsyncStorage.setItem('recharge_prefijo', "809").then(),
    AsyncStorage.getItem('recharge_prefijo').then((prefijo) => {
      this.setState({
      rechargeNumber: prefijo,})
    })
  };
  
  selectedPrefijo829 = () =>{
    AsyncStorage.setItem('recharge_prefijo', "829").then(),
    AsyncStorage.getItem('recharge_prefijo').then((prefijo) => {
      this.setState({
      rechargeNumber: prefijo,})
    })
  };
  
  selectedPrefijo849 = () =>{
    AsyncStorage.setItem('recharge_prefijo', "849").then(),
    AsyncStorage.getItem('recharge_prefijo').then((prefijo) => {
      this.setState({
      rechargeNumber: prefijo,})
    })
  };

  setNumberRecharge = () =>{
    AsyncStorage.setItem('set_number', this.state.rechargeNumber).then();
    const { next} = this.props;

    // Go to next step
    next();
    
  };



  render() {
    const { currentStep, totalSteps } = this.state;
    const prefijo809 = (this.state.rechargeNumber);
    const prefijo829 = (this.state.rechargeNumber);
    const prefijo849 = (this.state.rechargeNumber);
    return (
      <View style={[styles.container, styles.step1]}>
        <View>
          <Text
            style={styles.currentStepText}
          >{`Paso ${currentStep} de ${totalSteps}`}</Text>
        </View>
        <View style={{ backgroundColor:'#FE9A2E' ,padding: 10, alignItems: "center", width: 225, height: 35, borderRadius: 25, marginTop: 3}}>
       <Text>DIGITE EL NUMERO DE TELEFONO</Text> 
       </View>


<View style={{ flexDirection: 'row'}}>
      <TouchableOpacity
      style={{
      marginTop: 5, 
      marginLeft:0,
      width: 75, 
      height: 50, 
      borderRadius: 25, 
      backgroundColor: '#0080FF'}}
      onPress={this.selectedPrefijo809}
      >
      <Text style={{color: 'white', 
      fontSize: 20, 
      textAlign: 'center', 
      marginTop: 13}}>809</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{
        marginTop: 5, 
        marginLeft:10,
        width: 75, 
        height: 50,
        borderRadius: 25, 
      backgroundColor: '#0080FF'}}
      onPress={this.selectedPrefijo829}
      >
      <Text style={{color: 'white', 
      fontSize: 20, 
      textAlign: 'center', 
      marginTop: 13}}>829</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{
        marginTop: 5, 
        marginLeft:10,
        width: 75, 
        height: 50, 
        borderRadius: 25,
      backgroundColor: '#0080FF'}}
      onPress={this.selectedPrefijo849}
      >
      <Text style={{color: 'white', 
      fontSize: 20, 
      textAlign: 'center', 
      marginTop: 13}}>849</Text>
      </TouchableOpacity>
      </View>

      <TextInput
      style={{ 
      marginTop:5, 
      height: 50, 
      textAlign: "center", 
      width: 250, 
      borderColor: 'gray', 
      borderWidth: 2, 
      borderRadius: 5 }}
      onChangeText={rechargeNumber => this.setState({rechargeNumber})}
      placeholder='NUMERO TELEFONICO'
      value={prefijo809,prefijo829,prefijo849}
      keyboardType='phone-pad'
      />
        <View style={[styles.btnContainer, styles.marginAround]}>
          <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
            <Image
              source={require("../assets/icons/arrow.png")}
              style={[styles.btnImage, styles.backBtn]}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.setNumberRecharge} style={styles.btnStyle}>
            <Image
              source={require("../assets/icons/arrow.png")}
              style={styles.btnImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step2;
