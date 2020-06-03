import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialIcons'
 

export default function Header({ navigation, title }){

    const OpenMenu = () => {
        navigation.openDrawer()
    }
    return {
        headerTitle: title,
        headerLeft: () => (
            <TouchableOpacity onPress={OpenMenu} style={styleHead.menuButton}>
                <Icon name="menu" style={styleHead.menuIcon}/>
            </TouchableOpacity>
        )
    }
 
}

const styleHead = StyleSheet.create({

    menuButton: {
        margin: 10,
        width: 25,
    },
    menuIcon: {
        fontSize: 25,
        color: '#000'
    }

})