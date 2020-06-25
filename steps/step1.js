import React, { Component } from "react";
import { AsyncStorage, Image, View, TouchableOpacity, TextInput, Text } from "react-native";


import styles from "./styles";

class step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      rechargeOperator:'',
    };
  }

  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep()
    };
  };

  selectedClaro = () =>{
    AsyncStorage.setItem('recharge_operator', "Claro").then(),
    AsyncStorage.getItem('recharge_operator').then((operator) => {
      this.setState({
        rechargeOperator: operator,})
    })
  };
  
  selectedOrange = () =>{
    AsyncStorage.setItem('recharge_operator', "Orange").then(),
    AsyncStorage.getItem('recharge_operator').then((operator) => {
      this.setState({
        rechargeOperator: operator,})
    })
  };
  
  selectedViva = () =>{
    AsyncStorage.setItem('recharge_operator', "Viva").then(),
    AsyncStorage.getItem('recharge_operator').then((operator) => {
      this.setState({
        rechargeOperator: operator,})
    })
  };
  
  selectedDigicel = () =>{
    AsyncStorage.setItem('recharge_operator', "Digicel").then(),
    AsyncStorage.getItem('recharge_operator').then((operator) => {
      this.setState({
      rechargeOperator: operator,})
    })
  };

  setOperatorRecharge = () =>{
    AsyncStorage.setItem('set_operator', this.state.rechargeOperator).then();
    const { next} = this.props;

    // Go to next step
    next();
    
  };

  nextStep = () => {
    const { next } = this.props;

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  render() {
    const { currentStep, totalSteps } = this.state;
    const operadoraClaro = (this.state.rechargeOperator);
    const operadoraOrange = (this.state.rechargeOperator);
    const operadoraViva = (this.state.rechargeOperator);
    const operadoraDigicel = (this.state.rechargeOperator);
    return (
      <View style={[styles.container, styles.step1]}>
        <View>
          <Text
            style={styles.currentStepText}
          >{`Paso ${currentStep} de ${totalSteps}`}</Text>
        </View>
        <View style={{ backgroundColor:'#FE9A2E' ,padding: 10, alignItems: "center", width: 200, height: 35, borderRadius: 25, marginTop: 3}}>
       
       <Text>SELECCIONE UNA COMPAÑIA</Text> 
       </View>
       <View style={{ flexDirection: 'row', marginTop:5}}>
       <TouchableOpacity
       style={{
       width: 75, 
       height: 50, 
       borderRadius: 25, 
       backgroundColor: 'red'}}
       onPress={this.selectedClaro}
       >
       <Text style={{color: 'white', 
       fontSize: 20, 
       textAlign: 'center', 
       marginTop: 13}}>CLARO</Text>
       </TouchableOpacity>
       <TouchableOpacity
       style={{
 
         marginLeft:10,
         width: 75, 
         height: 50,
         borderRadius: 25, 
       backgroundColor: 'black'}}
       onPress={this.selectedOrange}
       >
       <Text style={{color: 'white', 
       fontSize: 20, 
       textAlign: 'center', 
       marginTop: 13}}>ALTICE</Text>
       </TouchableOpacity>
       <TouchableOpacity
       style={{
 
         marginLeft:10,
         width: 75, 
         height: 50, 
         borderRadius: 25,
       backgroundColor: 'green'}}
       onPress={this.selectedViva}
       >
       <Text style={{color: 'white', 
       fontSize: 20, 
       textAlign: 'center', 
       marginTop: 13}}>VIVA</Text>
       </TouchableOpacity>
       <TouchableOpacity
       style={{
  
         marginLeft:10,
         width: 75, 
         height: 50, 
         borderRadius: 25,
       backgroundColor: 'white'}}
       onPress={this.selectedDigicel}
       >
       <Text style={{color: 'black', 
       fontSize: 20, 
       textAlign: 'center', 
       marginTop: 13}}>DIGICEL</Text>
       </TouchableOpacity>
       </View>

       <TextInput
      style={{
      marginTop:3,
      padding: 8, 
      alignItems: "center", 
      height: 50, 
      textAlign: "center", 
      width: 100, 
      borderColor: 'gray', 
      borderWidth: 2, 
      borderRadius: 5,  }}
      onChangeText={rechargeOperator => this.setState({rechargeOperator})}
      placeholder='OPERADORA'
      value={operadoraClaro,operadoraOrange,operadoraViva,operadoraDigicel}
      />

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.setOperatorRecharge} style={styles.btnStyle}>
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

export default step1;
