export interface SignInRequest {
    username: string,
    password: string
}

export interface SignInRequestSuccess {
    accessToken: string,
    tokenType: string
}

export interface InitialState {
    loading: boolean,
    error: any,
    loginSuccess: boolean
}

export interface ErrorResponse {
    error: string,
    message: string,
    timestamp: string
}