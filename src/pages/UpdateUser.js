import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import Header from '../../shared/Header'

const UpdateUser = { 
    title: 'Atualizar usuário',
    Screen({ navigation }) {
        return (
            <View>
                <Header navigation={navigation} title={UpdateUser.title} />
                <Text>aa</Text>
            </View>
        )
    }
}

export default UpdateUser