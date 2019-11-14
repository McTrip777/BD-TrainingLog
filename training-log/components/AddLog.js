import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Load from './groupOne/Load'
import Exercise from './groupOne/Exercise'
import Duration from './groupOne/Duration'

import Effort from './groupTwo/Effort'
import Impressions from './groupTwo/Impressions'
import Problems from './groupTwo/Problems'

import PassFail from './PassFail'
import TryHard from './TryHard';

const AddLog = props => {

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.logs}>
          <Text style={styles.button} onPress={()=>{props.switchScreenHandler(false)}}>View Logs</Text>
        </TouchableOpacity>
        <View style={styles.group1}>
          <Load style={styles.load} />
          <Exercise style={styles.exercise} />
          <Duration style={styles.duration} />
        </View>
        <View style={styles.group2}>
          <Effort style={styles.effort} />
          <Impressions style={styles.impressions} />
          <Problems style={styles.problems} />
        </View>
        <PassFail />
        <TryHard />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.rcButton}>
            <Text style={styles.reset}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rcButton}>
            <Text style={styles.confirm}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logs: {
    width: '95%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  group1: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FF9E8A',
    padding: 10,
    width: '80%',
    height: '30%',
    borderRadius: 10,
    marginBottom: 10
  },
  load: {

  },
  exercise: {

  },
  duration: {

  },
  group2: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#37CCCF',
    padding: 10,
    height: '30%',
    width: '80%',
    borderRadius: 10,
    marginBottom: 10
  },
  effort: {

  },
  impressions: {

  },
  problems: {

  },
  button: {
    color: '#37CCCF',
    borderColor: '#37CCCF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  },
  rcButton: {
    alignItems: 'center',
    padding: 5,
    margin: 2,
  },
  confirm: {
    fontSize: 20,
    color: '#37CCCF',
    borderColor: '#37CCCF',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,

  }
});

export default AddLog