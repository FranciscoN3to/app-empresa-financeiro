import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import Header from '../../shared/Header'

const Clientes = { 
    title: 'Clientes',
    Screen({ navigation }) {
        return (
            <View>
                <Header navigation={navigation} title={Clientes.title} />
                <Text>aa</Text>
            </View>
        )
    }
}

export default Clientes