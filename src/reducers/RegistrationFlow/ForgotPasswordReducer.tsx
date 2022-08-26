import {
    FORGOT_PASS_REQUEST,
    FORGOT_PASS_REQUEST_SUCCESS,
    FORGOT_PASS_REQUEST_FAIL,
    FORGOT_PASS_REQUEST_RESET
} from "../actions/types";
import {initialForgotPass} from "../models/RegistrationFlow/ForgotPasswordModels";

const initialState: initialForgotPass = {
    loading: false,
    error: undefined,
}

const ForgotPasswordReducer = (state: initialForgotPass = initialState, action: any) => {
    switch (action.type) {
        case FORGOT_PASS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FORGOT_PASS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
            };
        case FORGOT_PASS_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: ''
            };
        case FORGOT_PASS_REQUEST_RESET:
            return {
                ...state,
                loading: false,
                error: undefined
            };
        default:
            return state;
    }
};

export default ForgotPasswordReducer;