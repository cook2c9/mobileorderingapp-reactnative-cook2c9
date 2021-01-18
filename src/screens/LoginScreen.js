import React, { useState } from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image, ImageBackground, ColorPropType, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {auth} from 'firebase';

import MainNavigation from '../navigation/MainNavigation';
import LoginCard from '../components/LoginCard'


const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../src/assets/burgerNfries.jpg')}  style={{width: '100%', height: '100%'}}>
                <LoginCard />
            </ImageBackground>
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title:{
        fontWeight: 'bold',
        fontSize: 28,
        alignSelf: 'center',
        color: '#ffffff',
        marginTop: 100
    },
    card: {
        marginTop: 100,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '80%',
        height: '50%',
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 8,
        elevation: 11,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginbtn: {
        alignSelf: 'center',
        width: 50,
        marginTop: 20,
        
    },
    signupbtn: {
        alignSelf: 'center',
       
    },
    signintxt: {
        paddingTop: 50,
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center'
    },
    emailInput: {
        height: 30,
        width: '100%',
        borderColor: 'gray', 
        borderWidth: 2

    },
    passwordinput: {
        height: 30,
        width: '100%',
        borderColor: 'gray', 
        borderWidth: 2
        
    },
    passwordcontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        marginTop: 20,
        
        
    },
    usernamecontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20,
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }

    });
  
    export default LoginScreen;