import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = props => {
  return <TextInput style={{...styles.input, ...props.style}}/>
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'white',
    borderWidth: 1,
    width: 130,
    textAlign: 'center',
    color: 'white'
  }
});

export default Input