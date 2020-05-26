import {apiAuth} from './api'
import AsyncStorage from '@react-native-community/async-storage'

const RefrashAccessToken = async () => {

    const refrashToken = await AsyncStorage.getItem('refrashToken')

    return new Promise((resolve, reject) => {

        apiAuth.post('/token', { token: refrashToken })
        then( async (newToken) => {
            await AsyncStorage.setItem('accessToken', newToken.accessToken)
            resolve(true)
        })
        .catch(() => {
            reject(false)
        })

    })

} 

export default RefrashAccessToken

