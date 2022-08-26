import axios from 'axios';
import {SignInRequest} from "../models/RegistrationFlow/SignInModel";

export default {
    signIn: {
        getToken: (payload: SignInRequest) =>
            axios.post(`/user/sign-in`, {
                ...payload
            }).then(res => res),
    },
};