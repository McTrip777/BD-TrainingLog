import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Input from '../Input'

const Load = props => {
  return (
    <View style={styles.container}>
        <Text style={styles.color}>Enter Load</Text>
        <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  color:{
    color:"white",
    fontWeight: "bold",
    fontSize: 15
  }
});

export default Load