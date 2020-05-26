import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialIcons'

//Icon.loadFont();

//const Drawer = createDrawerNavigator();

console.log(Dimensions.get('window').width)

export default function Header({ navigation, title }){

    const OpenMenu = () => {
        navigation.openDrawer()
    }

    return (
        <SafeAreaView style={styleHead.header}>
            <TouchableOpacity onPress={OpenMenu} style={styleHead.menuButton}>
                <Icon name="menu" style={styleHead.menuIcon}/>
            </TouchableOpacity>
            <View style={styleHead.headerTextBox}>
                <Text style={styleHead.headerText}>{title}</Text>
            </View>
        </SafeAreaView>
    )
}

const styleHead = StyleSheet.create({

    header:{
        width: Dimensions.get('window').width,
        height: 46,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd'
        
    },
    headerTextBox: {
        width: (Dimensions.get('window').width - 90),
    },
    headerText:{
        textAlign: 'center',
        width: '100%',
        fontWeight: '600',
        fontSize: 18,
        color: '#333',
    },
    menuButton: {
        margin: 10,
        width: 25,
    },
    menuIcon: {
        fontSize: 25,
        color: '#000'
    }

})