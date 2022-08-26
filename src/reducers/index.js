import { combineReducers } from 'redux';

import SignInReducer from "./SignInReducer";

// list the reducers list
export default combineReducers({
    signIn: SignInReducer
});