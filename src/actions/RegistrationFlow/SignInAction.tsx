import {
    SIGN_IN_REQUEST,
    SIGN_IN_REQUEST_SUCCESS,
    SIGN_IN_REQUEST_FAIL,
    SIGN_IN_REQUEST_RESET, SIGN_OUT_REQUEST
} from "./types";

import {ErrorResponse, SignInRequest, SignInRequestSuccess} from "../models/SignInModel";

export const signInRequest = (payload: SignInRequest) => {
    return {type: SIGN_IN_REQUEST, payload};
};

export const signInRequestSuccess = (payload: SignInRequestSuccess) => {
    return {type: SIGN_IN_REQUEST_SUCCESS, payload};
};

export const signInRequestFail = (payload: ErrorResponse) => {
    return {type: SIGN_IN_REQUEST_FAIL, payload};
};

export const signInRequestReset = () => {
    return {type: SIGN_IN_REQUEST_RESET};
};

export const signOutRequest = () => {
    return {type: SIGN_OUT_REQUEST};
};