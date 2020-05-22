import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


//const Drawer = createDrawerNavigator();

export default function Header({ navigation }){
    console.log(navigation)
    const OpenMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styleHead.header}>
            <View>
                <Button onPress={OpenMenu} title="Alo"></Button>
            </View>
            <View>
                <Text style={styleHead.headerText}>Home</Text>
            </View>
        </View>
    )
}

const styleHead = StyleSheet.create({

    header:{
        width: '100%',
        height: 46,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        //flex: 1,
        
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    }

})