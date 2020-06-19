import { Ionicons } from '@expo/vector-icons';
import React, {Component} from 'react';
import {     AppRegistry,
  View, 
  Text, 
  SafeAreaView, 
  Image, 
  ImageBackground, 
  TextInput,
  Dimensions,
  Keyboard,
  AsyncStorage,
  Alert,
  KeyboardAvoidingView, 
  StyleSheet
 } from 'react-native';
  import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ItemsRecharge from '../components/ItemsRecharge';



export default class Recharge extends Component {
  constructor(props){
		super(props)
		this.state={
			rechargeOperator:'',
      rechargeNumber:'',
      rechargeMount:'',
      list: '',
      enviarToken:'hola'
    }
    try {
      AsyncStorage.getItem('database_form').then((value) => {
        this.setState({
          list: value,

        })
      })
    } catch(err){
      console.log(err)
    }
  }

	
	recharge = () =>{
    const {rechargeNumber,rechargeMount} = this.state;
    if(rechargeNumber==""){
      alert("Ingrese el numero de telefono");
      this.setState({rechargeNumber:''})
      
    }
    
    
    
    else if(rechargeMount==""){
            alert("Ingrese el monto");
    this.setState({rechargeMount:''})
    }
        else
        
        {    const input = (this.state.list);
          const fields = input.split('/');
          const token = fields[0];
          const pass = fields[1];
    const URL= `https://ws.bigs.do/plataforma/ws2/GET_Serv_${this.state.rechargeOperator}.php?parametros=qvseqccehpyo/${token}/${pass}/${this.state.rechargeNumber}/${this.state.rechargeMount}`;

    console.log(URL)
      
        fetch(URL)
        
    
    .then((response) => response.text())
     .then((responseRecharge)=>{
            AsyncStorage.setItem('recharge_send', responseRecharge).then();
             console.log("DATOS DE RECARGA",responseRecharge)
       Alert.alert(
         (responseRecharge)
       )
     })

     
     .catch((error)=>{
         console.error(error);
         console.log(error)
         
     });
        }
        
    
    
    Keyboard.dismiss();
    
    }

    

render(){
 const input = (this.state.list);
  const fields = input.split('/');
  const name = fields[2];

  const data = (this.state.list)
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "padding"}
    style={StyleSheet.container}
    >
      
      
        
        <ItemsRecharge/>
            <View style={{padding: 50, alignItems: "center"}}>

  <Text>"Bienvenido"{name}</Text>

            <TextInput
                style={{
                  padding: 8, alignItems: "center", 
                  height: 50, 
                  textAlign: "center", 
                  width: 200, 
                  borderColor: 'gray', 
                  borderWidth: 2, 
                  borderRadius: 5,  }}
                  onChangeText={rechargeOperator => this.setState({rechargeOperator})}
                placeholder='OPERADORA'
                
                
/>

              <TextInput
                style={{  
                  height: 50, 
                  textAlign: "center", 
                  width: 300, 
                  borderColor: 'gray', 
                  borderWidth: 2, 
                  borderRadius: 5 }}
                  onChangeText={rechargeNumber => this.setState({rechargeNumber})}
                placeholder='NUMERO TELEFONICO'
                keyboardType='phone-pad'
                
              />
            
              <TextInput
                style={{
                  padding: 8, alignItems: "center", 
                  height: 50, 
                  textAlign: "center", 
                  width: 200, 
                  borderColor: 'gray', 
                  borderWidth: 2, 
                  borderRadius: 5,  }}
                  onChangeText={rechargeMount => this.setState({rechargeMount})}
                placeholder='MONTO'
                keyboardType='phone-pad'
                maxLength={4}
/>



              
              <View style={{paddingVertical: 15, width: 200, marginLeft: 100}}>
              <TouchableOpacity
                      style={{
                      marginTop: 20, 
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
  );
}
}



AppRegistry.registerComponent('RechargeScreen', () => RechargeScreen);