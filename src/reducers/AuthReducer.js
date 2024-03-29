import { EMAIL_CHANGED, PASSWORD_CHANGED, REMEMBER_ME_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, LOGOUT_USER } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', loading: false, error: '', rememberMe: false, user: null };

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, error: '' };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, error: '' };
        case REMEMBER_ME_CHANGED:
            return { ...state, rememberMe: action.payload, error: ''};
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false };
        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, loading: false, password: '' };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        case LOGOUT_USER:
            return INITIAL_STATE;
        default:
            return state;
    }
};
