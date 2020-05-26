import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'

import Header from '../../shared/Header'

const Main = { 
    title: 'Dashboard',
    Screen({ navigation }) {
        return (
            <View>
                <Header navigation={navigation} title={Main.title} />
                <ScrollView>
                   
                </ScrollView>
            </View>
        )
    }
}

export default Main