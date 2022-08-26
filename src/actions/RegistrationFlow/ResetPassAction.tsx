import {SIGN_UP_REQUEST, SIGN_UP_REQUEST_FAIL, SIGN_UP_REQUEST_RESET, SIGN_UP_REQUEST_SUCCESS,} from "../types";
import {SignUpModel} from "../../models/RegistrationFlow/SignUpModels";


export const signUpRequest = (payload: SignUpModel) => {
    return {type: SIGN_UP_REQUEST, payload};
};

export const signUpRequestSuccess = (payload: any) => {
    return {type: SIGN_UP_REQUEST_SUCCESS, payload};
};

export const signUpRequestFail = (payload: any) => {
    return {type: SIGN_UP_REQUEST_FAIL, payload};
};

export const signUpRequestReset = () => {
    return {type: SIGN_UP_REQUEST_RESET};
};