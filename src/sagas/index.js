import signInSaga from "./SignInSaga";

const sagas = [signInSaga];

export default sagaMiddleware => {
    sagas.forEach(saga => {
        sagaMiddleware.run(saga);
    });
};