import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import Header from '../../shared/Header'

const CreateEmployee = { 
    title: 'Novo funcionário',
    Screen({ navigation }) {
        return (
            <View>
                <Header navigation={navigation} title={CreateEmployee.title} />
                <Text>aa</Text>
            </View>
        )
    }
}

export default CreateEmployee