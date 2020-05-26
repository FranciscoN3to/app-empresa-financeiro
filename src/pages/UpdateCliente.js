import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import Header from '../../shared/Header'

const UpdateCliente = { 
    title: 'Atualizar cliente',
    Screen({ navigation }) {
        return (
            <View>
                <Header navigation={navigation} title={UpdateCliente.title} />
                <Text>aa</Text>
            </View>
        )
    }
}

export default UpdateCliente