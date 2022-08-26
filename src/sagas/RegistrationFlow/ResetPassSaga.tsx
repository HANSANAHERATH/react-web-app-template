import {all, call, put, takeLatest} from 'redux-saga/effects';

import resetPassApis from '../../services/RegistrationFlow/ResetPassApis';

import {RESET_PASS_REQUEST} from '../../actions/types';
import {resetPassRequestFail} from "../../actions/RegistrationFlow/ResetPassAction";

function* resetPassRequestFun(payload: any) {
    try {
        let data: object = yield call(resetPassApis.resetPass.resetPass, payload.payload);
        // @ts-ignore
        if (data?.status === 200) {
            // @ts-ignore
            yield put(resetPassRequest(data.data))
        } else {
            yield put(resetPassRequestFail({}));
        }
    } catch (err: any) {
        yield put(resetPassRequestFail({}));
    }
}

function* watchResetPassActions() {
    // @ts-ignore
    yield takeLatest(RESET_PASS_REQUEST, resetPassRequestFun);
}

export default function* resetPassSaga() {
    yield all([watchResetPassActions()]);
}