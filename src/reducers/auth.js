import  { SUCCESS_LOGIN, FAILURE_LOGIN, REQUEST_LOGIN } from '../actions/auth'


const INITIAL_STATE = {
    isFetching: false,
    userAuth: null,
    error: false
}

function auth(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SUCCESS_LOGIN:
        return { 
            userAuth: action.payload,
            error: false,
            isFetching: false,
        }
    case REQUEST_LOGIN:
        return {
            isFetching: true,
            error: false
        }
    case FAILURE_LOGIN: 
        return {
            isFetching: false,
            error: action.payload
        }
    default: 
        return state

  }  
}

export default auth;




/* 

*/