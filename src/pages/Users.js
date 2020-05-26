import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import { api } from '../services/api'

import Icon  from 'react-native-vector-icons/FontAwesome5'

import Header from '../../shared/Header'

 
function Users({ navigation }) {

    const [UserList, setUsers] = useState([])

    const title = 'Usuários'

    useEffect(() => {
        async function fetchData(){
            const accessToken = await AsyncStorage.getItem('accessToken')
            const result = await api.get('/users', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then(res => res.data.dados)
            .catch(err => {
                
                if(err.response){
    
                    if(err.response.status === 403){
                        //reset accesstoken
                        return []
                    }
    
                }
    
            })
    
            setUsers(result)
        }

        fetchData()
    }, [])
    
 
    return (
        <View>
            <Header navigation={navigation} title={title} />
            <ScrollView>
               {
                   UserList.length === 0  
                        ?
                    (<View style={styles.empty}><Text style={styles.textEmpty}>Sem usuários para mostrar</Text></View>) 
                        :
                    (
                        <View>
                            {
                                 UserList.map((user, index) => (
                                    <Text>{user.username}</Text>
                                ))
                            }
                        </View>
                       
                   )
               }
            </ScrollView>
        </View>
    )
        
    
}

export default Users


const styles = StyleSheet.create({

    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height - 40
    },
    textEmpty: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#999'
    }


})