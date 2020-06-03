import store from '../store'
import { api } from '../services/api'
import { usersRequest, usersSuccess, usersFailure } from '../actions/users'

import AsyncStorage from '@react-native-community/async-storage'

import RefrashAccessToken from '../services/refrashTokenAuth'

export async function getUsers(navigation) {
    
    const accessToken = await AsyncStorage.getItem('accessToken')

    store.dispatch(usersRequest())
 
    api.get('/users', 
        {headers:{Authorization: `Bearer ${accessToken}`}
    })
    .then(res => {
    
        store.dispatch(usersSuccess(res.data.dados))
    
    })
    .catch( async (error) => {

        if(error.response.status === 401){

            await AsyncStorage.clear()
            navigation.navigate('Login')

            return
        
        }else if(error.response.status === 403){

            const refrash = await RefrashAccessToken()
            
            if(refrash){

                getUsers()

                return
            
            }else{

                await AsyncStorage.clear()
                navigation.navigate('Login')

                return

            }                   

        }else{

            store.dispatch(usersFailure(error.response))

            return

        }         
        
    })

}






