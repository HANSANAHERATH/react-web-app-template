import {call, all, put, takeLatest} from 'redux-saga/effects';

import signUpApis from '../services/SignUpApis';

import {
    SIGN_UP_REQUEST
} from '../actions/types';

import {
    signUpRequestSuccess,
    signUpRequestFail,
} from '../actions/RegistrationFlow/SignUpAction';

function* registerUser(payload: any) {
    try {
        let data: object = yield call(signUpApis.signUp.register, payload.payload);
        // @ts-ignore
        if (data?.status === 200) {
            // @ts-ignore
            yield put(signUpRequestSuccess(data.data))
        } else {
            yield put(signUpRequestFail({}));
        }
    } catch (err: any) {
        yield put(signUpRequestFail({}));
    }
}

function* watchSignUpActions() {
    // @ts-ignore
    yield takeLatest(SIGN_UP_REQUEST, registerUser);
}

export default function* signUpSaga() {
    yield all([watchSignUpActions()]);
}