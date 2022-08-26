import {
    SIGN_UP_REQUEST,
    SIGN_UP_REQUEST_FAIL,
    SIGN_UP_REQUEST_RESET,
    SIGN_UP_REQUEST_SUCCESS,
} from "../../actions/types";

import {SignUpInitial} from "../../models/RegistrationFlow/SignUpModels";


const initialState: SignUpInitial = {
    loading: false,
    error: undefined,
}

const SignUpReducer = (state: SignUpInitial = initialState, action: any) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SIGN_UP_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case SIGN_UP_REQUEST_FAIL:
            return {
                ...state,
                error: action.payload.message,
                loading: false,
            };
        case SIGN_UP_REQUEST_RESET:
            return {
                ...state,
                error: undefined,
                loading: false,
            };
        default:
            return state;
    }
};

export default SignUpReducer;