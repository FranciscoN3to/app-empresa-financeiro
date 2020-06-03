import {apiAuth} from './api'
import AsyncStorage from '@react-native-community/async-storage'

const RefrashAccessToken = async () => {

    const refrashToken = await AsyncStorage.getItem('refrashToken')
    const response = await apiAuth.post('/token', { token: refrashToken })
        .then(async response => {

            await AsyncStorage.setItem('accessToken', response.data.accessToken)

            return true

        })
        .catch(error => {
            return false
        })
  
    return response

   
} 

export default RefrashAccessToken

/*
 return new Promise((resolve, reject) => {
   apiAuth.post('/token', { token: refrashToken })
      then( async (newToken) => {

    await AsyncStorage.setItem('accessToken', newToken.accessToken)
    console.log('deu')
    resolve({msg: 'aaa'})            

})
.catch((er) => {
    console.log(er)
    reject({msg: 'bbb'})
})  
        

    })

*/