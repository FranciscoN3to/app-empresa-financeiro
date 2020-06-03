export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAILURE_LOGIN = 'FAILURE_LOGIN'
export const REQUEST_LOGIN = 'REQUEST_LOGIN'

export function successLogin(user) {
    return {
        type: SUCCESS_LOGIN,
        payload: user
    }
}


export function requestLogin() {
    return {
        type: REQUEST_LOGIN,
    }
}


export function failureLogin() {
    return {
        type: FAILURE_LOGIN
    }
}