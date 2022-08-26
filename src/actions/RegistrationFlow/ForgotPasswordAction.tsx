import {
    FORGOT_PASS_REQUEST,
    FORGOT_PASS_REQUEST_SUCCESS,
    FORGOT_PASS_REQUEST_FAIL,
    FORGOT_PASS_REQUEST_RESET,
} from "./types";
import {ForgotPassModel} from "../models/ForgotPasswordModels";

export const forgotPasswordRequest = (payload: ForgotPassModel) => {
    return {type: FORGOT_PASS_REQUEST, payload};
};

export const forgotPasswordRequestSuccess = (payload: any) => {
    return {type: FORGOT_PASS_REQUEST_SUCCESS, payload};
};

export const forgotPasswordRequestFail = (payload: any) => {
    return {type: FORGOT_PASS_REQUEST_FAIL, payload};
};

export const forgotPasswordRequestReset = () => {
    return {type: FORGOT_PASS_REQUEST_RESET};
};