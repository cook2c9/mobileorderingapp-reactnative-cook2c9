import React, { useState } from 'react'
import { render } from 'react-dom'
import { StyleSheet, View, TextInput } from 'react-native'

export default class EmailComp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View rounded style={styles.usernamecontainer}>
                <TextInput placeholder='Email' onChangeText={this.props.onChangeText}  style={styles.emailInput} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    emailInput: {
        height: 30,
        width: '80%',
        borderColor: 'gray', 
        borderWidth: 2,
        paddingLeft: 10,
        alignSelf: 'center'
    },
    usernamecontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20
    } 
});