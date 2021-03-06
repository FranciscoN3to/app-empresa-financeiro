import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { KeyboardAvoidingView, Platform, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import store from '../store'

import { successLogin, requestLogin, failureLogin } from '../actions/auth'

import { api, apiAuth } from '../services/api'

export default function Login() {

  const [ username, setUserName] = useState('')
  const [ password, setUserPass] = useState('')

  console.log(store.getState())
 
  function loginAuth() {

    store.dispatch(requestLogin())

    apiAuth.post('/login', { username, password })
      .then(async (response) => {

        console.log(response)

        const {error, dados, accessToken, refrashToken} = response.data

        if(!error && dados.length === 1){

          await AsyncStorage.setItem('accessToken', accessToken)
          await AsyncStorage.setItem('refrashToken', refrashToken)
          await AsyncStorage.setItem('username', dados[0].username)
          await AsyncStorage.setItem('email', dados[0].email)
          await AsyncStorage.setItem('privilegio', dados[0].privilegio)

          store.dispatch(successLogin({
            accessToken,
            refrashToken,
            username: dados[0].username,
            email: dados[0].email,
            privilegio: dados[0].privilegio
          }))

        }

      })
      .catch(error => store.dispatch(failureLogin(error.response.error)))

  }

  return (
    <KeyboardAvoidingView 
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}
    >
      <Text>Login</Text>
      <TextInput
        placeholder="User name/E-mail"
        style={styles.input}
        value={username}
        onChangeText={setUserName}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setUserPass}
      />
      <TouchableOpacity onPress={loginAuth} style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: "stretch",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        marginTop: 30,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#007EF2",
        borderRadius: 4
    },
    textButton: {
        color: "#FFF",
        fontSize: 18
    }

})
