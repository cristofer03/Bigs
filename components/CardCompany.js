/* eslint-disable max-len,no-use-before-define,react/destructuring-assignment */
import React, { Component, useState } from 'react';
import {
    View, StyleSheet, Text, Image, TouchableOpacity, Alert,
} from 'react-native';
//import {ItemsRecharge} from './ItemsRecharge';
// import { GlobalStorageInstance } from '../../config/storage';


export function CardCompany(props) {
    console.log(props);
    // constructor(props) {
    //     super(props);
    //     console.log('the props im receiving => ', this.props);
    //     //this.onAddPressed = this.onAddPressed.bind(this);
    //     // this.onNextPage = this.onNextPage.bind(this);
    //     // this._onPressButton = this._onPressButton.bind(this);

        // state = {
        //     imgSrc: props.imgSrc,
        //     desc: props.desc,
        //     imgWidth: props.imgWidth,
        //     imgHeight: props.imgHeight,
        // };
    
    // _onPressed () {
    //     console.log('TOUCH');
    // }

    // const [count, setCount] = useState(0);
    // const onPress = () => setCount(prevCount => prevCount + 1);
    const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      console.log({selected});
      newSelected.set(id, !selected.get(props.imgSrc));

      setSelected(newSelected);
      console.log({newSelected});
    },
    [selected],
  );


        return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onSelect(props.imgSrc)}
            style={[
                { backgroundColor: selected ? 'white' : 'red'},
            ]}
            >
                <View>
                    <Image source={props.imgSrc} style={[styles.img, { width: props.imgWidth, height: props.imgHeight }]} />
                    <Text style={styles.text1}>
                        {props.desc}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        paddingRight: 5,
        paddingLeft: 10,
        paddingTop: 10,
    },
    img: {
        flex: 1,
        resizeMode: 'contain',
    },

    text1: {
        marginTop: 10,
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
    },
    // card: {
    //     backgroundColor: 'blue',
    //     marginTop: 25,
    //     marginLeft: 100,
    //     marginRight:100,
    // },
});
