import React, { Component } from "react";
import { AsyncStorage, Image, View, TouchableOpacity, TextInput, Text, Alert, Keyboard } from "react-native";

import styles from "./styles";

export class step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      rechargeMount:'',
      currentStep: "",
      list: '',
      getMonto:"",
      getNumber:"",
      getOperator:"",
    };
    
  }

  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep()
    };
  };

  selectedMonto50 = () =>{
    AsyncStorage.setItem('recharge_monto', "50").then(),
    AsyncStorage.getItem('recharge_monto').then((monto) => {
      this.setState({
      rechargeMount: monto,})
    })
  };
  
  selectedMonto100 = () =>{
    AsyncStorage.setItem('recharge_monto', "100").then(),
    AsyncStorage.getItem('recharge_monto').then((monto) => {
      this.setState({
      rechargeMount: monto,})
    })
  };
  
  selectedMonto200 = () =>{
    AsyncStorage.setItem('recharge_monto', "200").then(),
    AsyncStorage.getItem('recharge_monto').then((monto) => {
      this.setState({
      rechargeMount: monto,})
    })
  };
  
  selectedMonto500 = () =>{
    AsyncStorage.setItem('recharge_monto', "500").then(),
    AsyncStorage.getItem('set_operator').then((operator) => {
      console.log(this.state.getOperator)
      this.setState({
      getOperator: operator,})
    }),
    AsyncStorage.getItem('set_number').then((number) => {
      console.log(number)
      this.setState({
      getNumber: number,})
    }),
    AsyncStorage.getItem('set_monto').then((monto) => {
      console.log(monto)
      this.setState({
      getMonto: monto,})
    }),
    AsyncStorage.getItem('recharge_monto').then((monto) => {
      this.setState({
      rechargeMount: monto,})
    }),
    AsyncStorage.getItem('database_form').then((value) => {
        this.setState({
        list: value,})
      })
  };

  recharge = () =>{
    const {rechargeNumber,rechargeMount} = this.state;
    if(rechargeNumber==""){
    alert("Ingrese el numero de telefono");
    this.setState({rechargeNumber:''})
    
  }
  

else if(
    rechargeMount==""){
    alert("Ingrese el monto");
    this.setState({rechargeMount:''})
  }
else
      
  {    
    const input = (this.state.list);
    const fields = input.split('/');
    const token = fields[0];
    const pass = fields[1];
    const URL= `https://ws.bigs.do/plataforma/ws2/GET_Serv_${this.state.getOperator}.php?parametros=qvseqccehpyo/${token}/${pass}/${this.state.getNumber}/${this.state.getMonto}`;
    console.log(URL)

fetch(URL)
    
.then((
    response) => response.text())
.then((
    responseRecharge)=>
  {
    AsyncStorage.setItem('recharge_send', responseRecharge).then();
    console.log("RESPUESTA DE RECARGA",responseRecharge)
    Alert.alert((responseRecharge))
  })

   
.catch((error)=>
  {
    console.error(error);
    console.log(error)   
  });
  }
      
    Keyboard.dismiss();
  };

  setMontoRecharge = () =>{
    AsyncStorage.setItem('set_monto', this.state.rechargeMount).then()
    Alert.alert(
      'AVISO',
      `DESEA ENVIAR ESTA RECARGA? 
      Compañia: ${this.state.getOperator}
      Numero: ${this.state.getNumber}
      Monto: ${this.state.getMonto}`,
      
      [
        {
          text: "SI",
          onPress: () => this.recharge("Yes pressed")
        },
        {
          text: "NO",
          onPress: () => console.log("No Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
    
  };

  render() {
    const { currentStep, totalSteps } = this.state;
    const monto50 = (this.state.rechargeMount);
    const monto100 = (this.state.rechargeMount);
    const monto200 = (this.state.rechargeMount);
    const monto500 = (this.state.rechargeMount);
    const input = (this.state.list);
    const fields = input.split('/');
    const name = fields[2];
    const balance = fields[6];
    const deviceId = Expo.Constants.deviceId;
    return (
      <View style={[styles.container, styles.step1]}>
        <View>
          <Text
            style={styles.currentStepText}
          >{`Paso ${currentStep} de ${totalSteps}`}</Text>
        </View>
        <View style={{ backgroundColor:'#FE9A2E' ,padding: 10, alignItems: "center", width: 140, height: 35, borderRadius: 25, marginTop: 3}}>
       <Text>DIGITE UN MONTO</Text> 
       </View>

<View style={{ flexDirection: 'row'}}>
      <TouchableOpacity
      style={{
      marginTop: 5, 
      width: 75, 
      height: 50, 
      borderRadius: 25, 
      backgroundColor: '#0080FF'}}
      onPress={this.selectedMonto50}
      >
      <Text style={{color: 'white', 
      fontSize: 20, 
      textAlign: 'center', 
      marginTop: 13}}>50</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{
      marginTop: 5, 
      width: 75, 
      height: 50, 
      borderRadius: 25, 
      marginLeft:10,
      backgroundColor: '#0080FF'}}
      onPress={this.selectedMonto100}
      >
      <Text style={{color: 'white', 
      fontSize: 20, 
      textAlign: 'center', 
      marginTop: 13}}>100</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{
      marginTop: 5, 
      width: 75, 
      height: 50, 
      borderRadius: 25, 
      marginLeft:10,
      backgroundColor: '#0080FF'}}
      onPress={this.selectedMonto200}
      >
      <Text style={{color: 'white', 
      fontSize: 20, 
      textAlign: 'center', 
      marginTop: 13}}>200</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{
      marginTop: 5, 
      width: 75, 
      height: 50, 
      borderRadius: 25, 
      marginLeft:10,
      backgroundColor: '#0080FF'}}
      onPress={this.selectedMonto500}
      >
      <Text style={{color: 'white', 
      fontSize: 20, 
      textAlign: 'center', 
      marginTop: 13}}>500</Text>
      </TouchableOpacity>
      </View>

      <TextInput
      style={{
      marginTop:5,
      padding: 8, 
      alignItems: "center", 
      height: 50, 
      textAlign: "center", 
      width: 150, 
      borderColor: 'gray', 
      borderWidth: 2, 
      borderRadius: 5,  }}
      onChangeText={rechargeMount => this.setState({rechargeMount})}
      placeholder='MONTO'
      value={monto50,monto100,monto200,monto500}
      keyboardType='number-pad'
      maxLength={4}
      />
        <View style={[styles.btnContainer, styles.marginAround]}>
          <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
            <Image
              source={require("../assets/icons/arrow.png")}
              style={[styles.btnImage, styles.backBtn]}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.setMontoRecharge} style={styles.btnStyle}>
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

export default step3;
