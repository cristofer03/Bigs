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
    AsyncStorage,
    KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Recharge from './RechargeScreen';




export default class HomeScreen extends Component {
 
	constructor(props){
		super(props)
		this.state={
			userID:'',
			userPassword:''
		}
	}
	
	Go = () =>{
    this.props.navigation.navigate(Recharge);
  }
	
  render() {
    return(
        <ImageBackground source={require('../assets/images/bg.png')} style={{flex: 1, width: Dimensions.get("window").width, height: Dimensions.get("window").height, resizeMode: 'stretch'}}>
                
    
           
                <Text style={{
                color: 'white', 
                fontSize: 25, 
                textAlign: 'center',
                 }}>BIENVENIDO</Text> 

                    
                <View style={{     flexDirection: "row",
    alignItems: 'center',
    padding: 5,
  }}>
                    <TouchableOpacity
                        style={{
                        marginTop: 20, 
                        width: 70, 
                        height: 70, 
                        borderRadius: 25, 
                        backgroundColor: 'invisible',
                      alignContent:'center'}}
                        onPress={() => this.props.navigation.navigate('RechargeScreen')}
                        >
                        <Icon name="ios-phone-portrait" size={70} color="white" style={{    flexDirection: 'column',
    alignItems: 'center', paddingLeft:20,
    padding: 5,}} />
    <Text style={{
                color: 'white', 
                fontSize: 15, 
                textAlign: 'center',
                 }}>Recargar</Text>
                    </TouchableOpacity>
                    </View>
                   
                
          

            
        </ImageBackground>
    );
}
}
AppRegistry.registerComponent('HomeScreen', () => HomeScreen);