import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

const logs = [
  {key:1, duration: '3hrs',load: '50lb',exercise: 'core'},
  {key:2, duration: '3hrs',load: '30lb',exercise: 'campus'},
  {key:3, duration: '2hrs',load: '55lb',exercise: 'bar'},
  {key:4, duration: '4hrs',load: '50lb',exercise: 'core'},
  {key:5, duration: '2hrs',load: '60lb',exercise: 'core'},
  {key:6, duration: '3hrs',load: '70lb',exercise: 'campus'},
  {key:7, duration: '3hrs',load: '35lb',exercise: 'circuts'},
  {key:8, duration: '4hrs',load: '65lb',exercise: 'bar'},
]

const ViewLog = props => {
  return (
    <View style={styles.container}>
        <Text>Hi I am a log</Text>
        <TouchableOpacity style={styles.buttonStyles}>
            <Text style={styles.addLog} onPress={()=>{props.switchScreenHandler(true)}}>Add Log</Text>
        </TouchableOpacity>
        <View>
          {logs.map(log => {
            return <Text key={log.key} >{log.duration} {log.load} {log.exercise}</Text>
          })}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{

    },
    buttonStyles:{

    },
    addLog:{

    }
});

export default ViewLog