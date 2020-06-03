import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, TextInput, LayoutAnimation } from 'react-native'
import ActionButton from 'react-native-action-button'
import { useSelector, useDispatch } from 'react-redux'
import IconAwesome  from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconMaterialIcons  from 'react-native-vector-icons/MaterialIcons'

import { getUsers } from '../controllers/usersControllers'

const { height, width } = Dimensions.get('window')

function Users({ navigation }) {

    const [searchUser, setSearchUser] = useState('')
    const [fetchUsers, setfetchUsers] = useState(true)
 

    const userList = useSelector(state => {
        if(searchUser === ''){
            return state.users.data
        }else{
            return state.users.data.filter(user => user.username.toLowerCase().indexOf(searchUser.toLowerCase()) !== -1 && user)
        }
    })

    if(fetchUsers && userList.length === 0){
        setfetchUsers(false)
        getUsers()
    }

 

    return (

        <View style={styles.container}>
            <View style={styles.headerPageList}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                >
                    <IconMaterialIcons 
                        name="menu" 
                        style={styles.headerPageListIconMenu} 
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder="Buscar usuário"
                    onChangeText={e => setSearchUser(e)}
                    style={styles.headerPageListInput}
                />
            </View>
            <ScrollView style={{width}}
            //  scrollEventThrottle={1}
              //horizontal={true}
              //showsHorizontalScrollIndicator={false}
            >
                <View style={{alignItems: 'center', marginTop: 80, marginBottom: 50}}>
                {
                    userList.length === 0 ?  (
                        <View style={styles.empty}><Text style={styles.textEmpty}>Sem usuários para mostrar</Text></View>
                    ) :
                    userList.map((user, index) => (
                    
                            <TouchableOpacity key={index} style={styles.listContainer} onPress={() => navigation.navigate('UpdateUser')}>
                                <View style={styles.listLeftViwer}>
                                    <IconAwesome name="user" style={styles.iconUser}/>
                                </View>
                                <View style={styles.listMidleViwer}>
                                    <Text style={styles.titleListMidleViwer}>{user.username}</Text>
                                    <Text style={styles.subTitleListMidleViwer}>{user.email}</Text>
                                </View>
                                <View style={styles.ListRightViwer}>
                                    <IconIonicons name="ios-arrow-forward" style={styles.iconForward} />
                                </View>
                            </TouchableOpacity>
                            
                        )
                    )
                }
                </View>
            </ScrollView>
    
            <ActionButton 
                offsetY={40}
                offsetX={15}
                onPress={ () => navigation.navigate('CreateUser') } 
                buttonColor="#007EF2"
             
            />
                
         
        </View>
    )
        
      // icon={<IconIonicons name="ios-add" style={styles.addButton}/>}
}

export default Users


const styles = StyleSheet.create({
    headerPageList: {
        marginTop: 10,
        flexDirection: 'row',
        width: width - 30,
        backgroundColor: "#fff",
        borderRadius: 12,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        height: 55,
        position: 'absolute',
        top: 10,
        zIndex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3.62,
        elevation: 5,
    
    },
    headerPageListIconMenu: {
        fontSize: 25,
        color: '#999',
        marginRight: 10,
      
    },
    headerPageListInput:{
        fontSize: 17,
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    empty: {
        minHeight: height-130,
        justifyContent: 'center'
    },
    textEmpty: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#999',
        textAlign: 'center',
    },
    //list
    listContainer: {
        width: width - 30,
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15, 
        marginTop: 10,   
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3.62,
        elevation: 3,

    },
    listLeftViwer: {
        paddingTop: 6.5,
        paddingBottom: 6.5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
    },
    listMidleViwer: {
        flex: 1,
    },
    ListRightViwer: {
        width: 15,
        flexDirection: 'row',
        marginLeft: 10
    },
    titleListMidleViwer: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#656565'
    },
    subTitleListMidleViwer: {
        color: '#999'
    },
    iconUser: {
        fontSize: 40,
        color: '#ccc'
    },
    iconForward: {
        fontSize: 30,
        color: '#ccc'
    },
  
    BoxAddButton: {
        width: 50,
        height: 50,
        //position: 'absolute',
        //bottom: '10%',
        borderRadius: 50,
        //right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
    },
    addButton: {
        color: '#fff',
        fontSize: 40
    }

})