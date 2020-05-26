import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import Header from '../../shared/Header'

const CreateUser = { 
    title: 'Novo usuário',
    Screen({ navigation }) {
        return (
            <View>
                <Header navigation={navigation} title={CreateUser.title} />
                <Text>aa</Text>
            </View>
        )
    }
}

export default CreateUser