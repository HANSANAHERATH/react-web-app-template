import axios from "axios";
import {SignUpModel} from "../../models/RegistrationFlow/SignUpModels";

export default {
    signUp: {
        register: (payload: SignUpModel) =>
            axios.post(`/user/sign-up`, {
                ...payload
            }).then(res => res),
    },
};