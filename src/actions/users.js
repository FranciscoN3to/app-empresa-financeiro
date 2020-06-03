import { api } from '../services/api'

export const ADD_USER = 'ADD_USER'
export const USERS_REQUEST = 'USERS_REQUEST'
export const USERS_SUCCESS = 'USERS_SUCCESS'
export const USERS_FAILURE = 'USERS_FAILURE'

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}

export function usersRequest() {
    return {
        type: USERS_REQUEST
    }
}

export function usersSuccess(users) {
    return {
        type: USERS_SUCCESS,
        payload: users
    }
}

export function usersFailure(error) {
    return {
        type: USERS_FAILURE,
        payload: error
    }
}

/* 
    api.get('/users')
        .then(res => {
        
        })
        .catch(error => {

        })

*/
