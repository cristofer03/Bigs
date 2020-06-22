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



export default class Recharge extends Component {
      constructor(props){
      super(props)
      this.state={
      rechargeOperator:'',
      rechargeNumber:'',
      rechargeMount:'',
      list: '',
      monto50: ''
    }

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
  AsyncStorage.getItem('recharge_monto').then((monto) => {
    this.setState({
    rechargeMount: monto,})
  })
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
      const URL= `https://ws.bigs.do/plataforma/ws2/GET_Serv_${this.state.rechargeOperator}.php?parametros=qvseqccehpyo/${token}/${pass}/${this.state.rechargeNumber}/${this.state.rechargeMount}`;
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
    }

    

render()
    {
      const input = (this.state.list);
      const fields = input.split('/');
      const name = fields[2];
      const balance = fields[6];
      const deviceId = Expo.Constants.deviceId;
      const monto50 = (this.state.rechargeMount);
      const monto100 = (this.state.rechargeMount);
      const monto200 = (this.state.rechargeMount);
      const monto500 = (this.state.rechargeMount);
      const prefijo809 = (this.state.rechargeNumber);
      const prefijo829 = (this.state.rechargeNumber);
      const prefijo849 = (this.state.rechargeNumber);
      const operadoraClaro = (this.state.rechargeOperator);
      const operadoraOrange = (this.state.rechargeOperator);
      const operadoraViva = (this.state.rechargeOperator);
      const operadoraDigicel = (this.state.rechargeOperator);

return (
  <ScrollView>
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "padding"}
      style={StyleSheet.container}
      >
      
      
        

      <View style={{padding: 0, alignItems: "center", backgroundColor:"#0B173B"}}>
      <Text style={{color: 'white'}}>"Bienvenido" {name}</Text> 
      <Text style={{color: 'white'}}>Balance $RD:{balance}</Text>
      </View>


      <View style={{padding: 10, alignItems: "center"}}>
       
      <Text>SELECCIONE UNA COMPAÑIA</Text> 
      </View>
      <View style={{ flexDirection: 'row'}}>
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

      <View style={{ marginTop:5, alignItems: "center"}}>
      <TextInput
      style={{
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


      <View style={{padding: 10, alignItems: "center"}}>
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

<View style={{padding: 10, alignItems: "center"}}>
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




              
      <View style={{paddingVertical: 15, width: 200, marginLeft: 100}}>
      <TouchableOpacity
      style={{
      marginTop: 0, 
      width: 100, 
      height: 50, 
      borderRadius: 25, 
      backgroundColor: '#0080FF'}}
      onPress={this.recharge}
      >
      <Text style={{color: 'white', 
      fontSize: 20, 
      textAlign: 'center', 
      marginTop: 13}}>Enviar</Text>
      </TouchableOpacity>
      </View>

     
      </View>
      
            
      
      
      </KeyboardAvoidingView>
      </ScrollView>
  );
}
}



AppRegistry.registerComponent('RechargeScreen', () => RechargeScreen);