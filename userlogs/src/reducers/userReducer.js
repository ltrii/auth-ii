import { REGISTER_USER,
         USER_REGISTERED,
         LOGIN_USER,
         USER_LOGIN
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
                token: action.payload.token,
                secret: action.payload.secret,
                error: ''
            };
        default:
            return state;
        }
}
