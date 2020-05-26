import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import Header from '../../shared/Header'
 
const Employees = { 
    title: 'Funcionários',
    Screen({ navigation }) {
        return (
            <View>
                <Header navigation={navigation} title={Employees.title} />
                <Text>aa</Text>
            </View>
        )
    }
}

export default Employees