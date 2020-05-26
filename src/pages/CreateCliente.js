import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import Header from '../../shared/Header'

const CreateCliente = { 
    title: 'Novo cliente',
    Screen({ navigation }) {
        return (
            <View>
                <Header navigation={navigation} title={CreateCliente.title} />
                <Text>aa</Text>
            </View>
        )
    }
}

export default CreateCliente