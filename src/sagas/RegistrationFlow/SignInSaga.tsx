import {call, all, put, takeLatest} from 'redux-saga/effects';

import signInApis from '../services/SignInApis';

import {
    SIGN_IN_REQUEST
} from '../actions/types';

import {
    signInRequest,
    signInRequestSuccess,
    signInRequestFail,
} from '../actions/RegistrationFlow/SignInAction';

import {ErrorResponse, SignInRequest, SignInRequestSuccess} from "../models/RegistrationFlow/SignInModel";

function* getToken(payload: any) {
    console.log(process.env.REACT_APP_BACKEND_URL)
    try {
        let data: object = yield call(signInApis.signIn.getToken, payload.payload);
        // @ts-ignore
        if (data?.status === 200) {
            // @ts-ignore
            yield put(signInRequestSuccess(data.data))
        } else {
            yield put(signInRequestFail({
                error: "",
                message: "",
                timestamp: ""
            }));
        }
    } catch (err: any) {
        yield put(signInRequestFail({
            error: err.response.data.error,
            message: err.response.data.message,
            timestamp: err.response.data.timestamp
        }));
    }
}

function* watchSignInActions() {
    // @ts-ignore
    yield takeLatest(SIGN_IN_REQUEST, getToken);
}

export default function* signInSaga() {
    yield all([watchSignInActions()]);
}