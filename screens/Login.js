import React, { Component } from 'react';
import { 
    AppRegistry,
    View, 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    Image, 
    ImageBackground, 
    TextInput,
    Dimensions,
    Keyboard,
    ScrollView,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Login extends Component {
	static navigationOptions= ({navigation}) =>({
		  title: 'Login',	
		  headerRight:	
		  <TouchableOpacity
			onPress={() => navigation.navigate('Home')}
			style={{margin:10,backgroundColor:'orange',padding:10}}>
			<Text style={{color:'#ffffff'}}>Home</Text>
		  </TouchableOpacity>
		
	});  
	constructor(props){
		super(props)
		this.state={
			userID:'',
			userPassword:''
		}
	}
	
	login = () =>{
        const {userID,userPassword} = this.state;
		if(userID==""){
			alert("Por favor ingrese su ID");
		  this.setState({userID:''})
			
		}
		


		else if(userPassword==""){
            alert("Por favor ingrese su clave");
		this.setState({userPassword:''})
		}
        else
        
        {
            const URL= `https://ws.bigs.do/plataforma/ws2/GET_Login_Session.php?user=${this.state.userID}&pass=${this.state.userPassword}`;

        //  const data = {
        //     USER: this.state.userID,
        //     PASS: this.state.userPassword,
        //     TOKEN_LIVE: 12
        //   };
          
        //   const options = {
        //     method: 'GET',
        //     body: JSON.stringify(data),
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   };

        console.log(URL)
        fetch(URL)
		
		.then((response) => response.text())
		 .then((responseText)=>{
             console.log("DATOS QUE ESTOY TRALLENDO",responseText)
             var responseNew = (responseText.length)
             console.log(responseNew)
			 if(responseNew == 19){
				 
				 alert("ID o Clave incorrecto.");
				 // redirect to profile page
			 }else{
                 alert("Inicio de sesion exitoso!");
                 this.props.navigation.navigate("Home");
			 }
		 })
		 .catch((error)=>{
         console.error(error);
         console.log(error)
         
		 });
        }
        
		
		
		Keyboard.dismiss();
	}
	
  render() {
    return(
        <ImageBackground source={require('../assets/images/bg.png')} style={{flex: 1, width: Dimensions.get("window").width, height: Dimensions.get("window").height, resizeMode: 'stretch'}}>
            <View style={{ flex: 1, }}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image source={require('../assets/images/bigstart.png')} style={{marginTop: 150, width: 350, height: 150, resizeMode: 'contain'}}>
                        </Image>

                    <View>
                        <Icon
                        name='ios-person'
                        size={28} color={'rgba(255, 255, 255, 0.7)'} style={{position: 'absolute', top: 8, left: 37,}}
                        />
                    <TextInput
                        
                        style={{
                        width: 350, 
                        height: 50, 
                        borderRadius: 25, 
                        fontSize: 16, 
                        paddingLeft: 45, 
                        backgroundColor: 'rgba(0, 0, 0, 0.35)', 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        marginHorizontal: 25,}}
                        placeholder={'ID'}
                        onChangeText={userID => this.setState({userID})}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        keyboardType='phone-pad'
                        maxLength={5}
                        >
                                
                    </TextInput>
                    </View>

                    <View style={{marginTop:10}}>
                    <Icon
                        name='ios-lock'
                        size={28} color={'rgba(255, 255, 255, 0.7)'} 
                        style={{position: 'absolute', top: 8, left: 37,}}
                        />
                    <TextInput
                        style={{
                        width: 350, 
                        height: 50, 
                        borderRadius: 25, 
                        fontSize: 16, 
                        paddingLeft: 45, 
                        backgroundColor: 'rgba(0, 0, 0, 0.35)', 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        marginHorizontal: 25,}}
                        placeholder={'Clave'}
                        onChangeText={userPassword => this.setState({userPassword})}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        keyboardType='phone-pad'
                        />

                    


                    </View>
                    
                    <TouchableOpacity
                        style={{
                        marginTop: 20, 
                        width: 350, 
                        height: 50, 
                        borderRadius: 25, 
                        backgroundColor: '#0080FF',}}
                        onPress={this.login}
                        >
                    <Text style={{color: 'white', 
                    fontSize: 20, 
                    textAlign: 'center', 
                    marginTop: 13}}>Ingresar</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View>
            <Text style={{
                color: 'white', 
                fontSize: 15, 
                textAlign: 'center', 
                marginTop: 10}}>© 2020 BigStart</Text>

                
            </View>
            
        </ImageBackground>
    );
}
}
AppRegistry.registerComponent('login', () => login);