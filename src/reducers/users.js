import  { ADD_USER, USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE } from '../actions/users'


const INITIAL_STATE = {
    isFetching: false,
    data: [],
    error: false
}

function users(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_USER:
        return { 
            ...state, 
            data: [...state.data, {
                    username: action.payload.username,
                    email: action.payload.email,
                    password: action.payload.password,
                    foto: action.payload.foto
                }
            ],
            error: false,
            isFetching: false,
        }
    case USERS_REQUEST:
        return {
            ...state,
            isFetching: true,
            error: false
        }
    case USERS_SUCCESS: 
        return {
            ...state,
            isFetching: false,
            data: action.payload,
            error: false
        }
    case USERS_FAILURE: 
        return {
            ...state,
            isFetching: false,
            error: action.payload
        }
    default: 
        return state

  }  
}

export default users;




/* 

*/