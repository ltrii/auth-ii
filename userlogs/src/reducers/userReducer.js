import { REGISTER_USER,
         USER_REGISTERED,
         LOGIN_USER,
         USER_LOGIN,
         GET_USERS,
         USER_PULL
         } from '../actions';

const initialState = {
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                error: ''
            };
        case USER_REGISTERED:
            return {
                ...state,
                error: ''
            };
        case LOGIN_USER:
            return {
                ...state,
                error: ''
            };
        case USER_LOGIN:
            return {
                ...state,
                error: ''
            };
        case GET_USERS:
            return {
                ...state,
                error: ''
            }
        case USER_PULL:
            return {
                ...state,
                users: action.payload,
                error: ''
            }
        default:
            return state;
        }
}
