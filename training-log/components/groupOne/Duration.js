import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Input from '../Input'

const Duration = props => {

  const [duration, setDuration] = useState('')

  const inputDurationHandler = entered => {
    setDuration(entered)
    // console.log(duration, entered)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.color}>Enter Duration</Text>
        <Input 
          onChangeText = {inputDurationHandler}
          value = {duration}
        />
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

export default Duration