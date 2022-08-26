import {
    SIGN_IN_REQUEST,
    SIGN_IN_REQUEST_SUCCESS,
    SIGN_IN_REQUEST_FAIL,
    SIGN_IN_REQUEST_RESET, SIGN_OUT_REQUEST
} from "../actions/types";

import {InitialState} from "../models/RegistrationFlow/SignInModel";

const initialState: InitialState = {
    loading: false,
    error: undefined,
    loginSuccess: false
}

const SignInReducer = (state: InitialState = initialState, action: any) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SIGN_IN_REQUEST_SUCCESS:
            sessionStorage.setItem("accessToken", action.tokenType + action.accessToken);
            sessionStorage.setItem("isAuthenticated", "yes");
            return {
                ...state,
                loginSuccess: true,
                loading: false,
            };
        case SIGN_IN_REQUEST_FAIL:
            sessionStorage.clear();
            return {
                ...state,
                error: action.payload.message,
                loginSuccess: false,
                loading: false,
            };
        case SIGN_IN_REQUEST_RESET:
            sessionStorage.clear();
            return {
                ...state,
                error: undefined,
                loginSuccess: false,
                loading: false,
            };
        case SIGN_OUT_REQUEST:
            sessionStorage.clear();
            return {
                ...state,
                error: undefined,
                loginSuccess: false,
                loading: false,
            };
        default:
            return state;
    }
};

export default SignInReducer;