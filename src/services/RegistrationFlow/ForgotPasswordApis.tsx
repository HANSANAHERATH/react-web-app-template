import axios from 'axios';
import {SignInRequest} from "../models/RegistrationFlow/SignInModel";
import {ForgotPassModel} from "../models/RegistrationFlow/ForgotPasswordModels";

export default {
    forgotPassword: {
        forgotPass: (payload: ForgotPassModel) =>
            axios.post(`/user/forgot-pass`, {
                ...payload
            }).then(res => res),
    },
};