import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const TryHard = props => {

    const [enteredValue, setEnteredValue] = useState('')

    const inputNumberHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    return (
            <View style={styles.screen}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Try Hard</Text>
                    <TextInput 
                        style={styles.input} 
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad" 
                        maxLength={1}
                        onChangeText = {inputNumberHandler}
                        value = {enteredValue}
                    />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        
    },
    inputContainer: {
        alignItems: 'center',
        // width: 300,
        // maxWidth:'80%',
        // shadowColor: 'black',
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowRadius: 6,
        // shadowOpacity: 0.26,
        // backgroundColor: 'white',
        // elevation: 8,
        // padding: 10,
        // borderRadius: 10
    },
    text:{
        fontSize: 20,
        color: "#37CCCF",
        margin: 5
    },
    input:{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 30,
        textAlign: 'center'
    },
    buttonContainer:{
        
    }
});

export default TryHard