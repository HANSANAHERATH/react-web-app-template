import {call, all, put, takeLatest} from 'redux-saga/effects';

import forgotPassApis from '../services/ForgotPasswordApis';

import {
    FORGOT_PASS_REQUEST
} from '../actions/types';

import {
    forgotPasswordRequestSuccess,
    forgotPasswordRequestFail,
} from '../actions/RegistrationFlow/ForgotPasswordAction';


function* forgotPasswordSubmit(payload: any) {
    try {
        let data: object = yield call(forgotPassApis.forgotPassword.forgotPass, payload.payload);
        // @ts-ignore
        if (data?.status === 200) {
            // @ts-ignore
            yield put(forgotPasswordRequestSuccess(data.data))
        } else {
            yield put(forgotPasswordRequestFail({
                error: "",
                message: "",
                timestamp: ""
            }));
        }
    } catch (err: any) {
        yield put(forgotPasswordRequestFail({}));
    }
}

function* watchForgotPasswordActions() {
    // @ts-ignore
    yield takeLatest(FORGOT_PASS_REQUEST, forgotPasswordSubmit);
}

export default function* forgotPasswordSaga() {
    yield all([watchForgotPasswordActions()]);
}