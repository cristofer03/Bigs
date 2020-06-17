import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image,
         SafeAreaView, 
         Platform, 
         StyleSheet, 
         View, 
         TextInput,
         KeyboardAvoidingView, 
         FlatList,
         Text,
         Button,
         Alert
        } 
        from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import ItemsRecharge from '../components/ItemsRecharge';
// import { SafeAreaView } from 'react-native-safe-area-context';

const enviarRecarga = () =>{
  Alert.alert(
    'AVISO',
    'DESEA ENVIAR ESTA RECARGA?',
    [
      {text: 'NO', onPress: () => ('NO Pressed'), style: 'cancel'},
      {text: 'SI', onPress: () => ('YES Pressed')},
    ]
  );

}

const DATA = [
  {
    id: 'bd7acbea',
    title: "$20",
  },
  {
    id: '3ac68afc',
    title: "$50",
  },
  {
    id: '3ad53abb28ba',
    title: "$100",
  },
  {
    id: '58694a0f',
    title: "$500",
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(title)}
      style={[
      styles.item,
      { backgroundColor: selected ? 'blue' : 'gray'},
    ]}
    >
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function RechargeScreen() {
  const [value, onChangeText] = React.useState('NUMERO TELEFONICO');

  const [selected, setSelected] = React.useState(new Map());
  console.log(selected);

  const onSelect = React.useCallback(
    title => {
      const newSelected = new Map(selected);
      newSelected.set(title, !selected.get(title));
      setSelected(newSelected);
    },
    console.log([selected]),
  );

  return (
    
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "padding"}
      style={styles.container}
      >
        
        
          
          <ItemsRecharge/>
              <View style={{padding: 50, alignItems: "center"}}>
                <TextInput
                  style={{  
                    height: 50, 
                    textAlign: "center", 
                    width: 300, 
                    borderColor: 'gray', 
                    borderWidth: 2, 
                    borderRadius: 5 }}
                  onChangeText={text => onChangeText(text)}
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
                    onChangeText={text => onChangeText(text)}
                    onClear={text => Map('')}
                  placeholder='MONTO'
                  keyboardType='phone-pad'
                  maxLength={4}
/>
                  <FlatList
                  numColumns={2}
                  data={DATA}
                  renderItem={({ item }) => (
                        <Item
                          id={item.id}
                          title={item.title}
                          selected={!!selected.get(item.title)}
                          onSelect={onSelect}
                        />                  
                    )
                    
                  }
                  keyExtractor={item => item.id}
                  extraData={selected}
                />
                


                
                <View style={{paddingVertical: 15, width: 200, marginLeft: 100}}>
                <TouchableOpacity
                        style={{
                        marginTop: 20, 
                        width: 100, 
                        height: 50, 
                        borderRadius: 25, 
                        backgroundColor: '#0080FF'}}
                        onPress={enviarRecarga}
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

RechargeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    marginTop: 10,
    width: 100,
    marginRight: 2,
    height: 50,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
