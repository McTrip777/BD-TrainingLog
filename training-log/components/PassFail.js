import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const PassFail = props => {

  const [passOrFail, setPassOrFail] = useState(false)

  const isPassFail = click => {
    // console.log(click)
    setPassOrFail(click)
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity>
          <Text style={passOrFail ? styles.fail : styles.pass} onPress={() => isPassFail(false)}>Fail</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={passOrFail ? styles.pass : styles.fail} onPress={() => isPassFail(true)}>Succeed</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly' 
  },
  pass:{
    color: 'white',
    backgroundColor: '#37CCCF',
    width: 80,
    textAlign: 'center',
    padding: 5,

  },
  fail:{
    color: '#37CCCF',
    backgroundColor: 'white',
    width: 80,
    textAlign: 'center',
    borderRadius: 6,
    borderColor: '#37CCCF',
    borderWidth: 1,
    padding: 5,
  }
});

export default PassFail