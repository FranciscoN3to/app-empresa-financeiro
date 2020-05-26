import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import Header from '../../shared/Header'

const UpdateEmployee = { 
    title: 'Atualizar funcionário',
    Screen({ navigation }) {
        return (
            <View>
                <Header navigation={navigation} title={UpdateEmployee.title} />
                <Text>aa</Text>
            </View>
        )
    }
}

export default UpdateEmployee