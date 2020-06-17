import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Constants from 'expo-constants';
import { CardCompany } from './CardCompany';

const DATA = [
  {
    id: '1',
    desc: 'CLARO',
    imgSrc1: require('../assets/images/claro-logo-1.png'),
  },
  {
    id: '2',
    desc: 'ALTICE',
    imgSrc1: require('../assets/images/altice.png'),
  },
  {
    id: '3',
    desc: 'VIVA',
    imgSrc1: require('../assets/images/viva.png'),
  },
  {
    id: '4',
    desc: 'NATCOM',
    imgSrc1: require('../assets/images/natcom.png'),
  },
];

export default function ItemsRecharge() {
  const [selected, setSelected] = React.useState(new Map());

  // const _onPressed = React.useCallback(
  //   console.log('TOUCH'),
  // );

  return (
        <View>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={({ item }) => {
              return(
                <ScrollView>
                    <CardCompany
                      key={item.id}
                      imgSrc={item.imgSrc1}
                      desc={item.desc} 
                      imgWidth={150} 
                      imgHeight={150}
                    />
                </ScrollView>
              )
            }}
            keyExtractor={item => item.id}
            extraData={selected}
          />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 150,
    // width: 150,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});