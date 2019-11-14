import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity } from 'react-native';

import AddLog from './components/AddLog';
import ViewLog from './components/ViewLog';

export default function App() {

  const [switchScreen, setSwitchScreen] = useState(false)
  
  const switchScreenHandler = (chosen) => {
    setSwitchScreen(chosen)
  }
  
  const screenChosen = switchScreen === false ? <ViewLog switchScreenHandler={switchScreenHandler} /> : <AddLog switchScreenHandler={switchScreenHandler} />  

  return (
    <View style={styles.container}>
      {screenChosen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
