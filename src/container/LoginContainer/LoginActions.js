import LoginService from "./LoginService";

export function isLoading(bool) {
    console.log('loading')
    return {
        type: 'IS_LOADING',
        isLoading: bool,
        result: null,
        error: null
    };
}

export function loginSuccess(result) {
    console.log('login successs')

    return {
        type: 'LOGIN_SUCCESS',
        result
    };
}

export function loginFailure(error) {
    console.log('login failure')

    return {
        type: 'LOGIN_FAILURE',
        error
    };
}
export function resetLoginForm() {
    console.log('login reset')

    return {
        type: 'RESET_LOGIN_FORM',
        result: null,
        error: null
    }
}
export const verifyLoginDetails = data => {
    loginService = new LoginService;
    return async dispatch => {
        dispatch(isLoading(true));
        dispatch(resetLoginForm());
        await this.loginService.authenticateUser(data, (result) => { dispatch(isLoading(false)); dispatch(loginSuccess(result)) }, (error) => { dispatch(isLoading(false)); dispatch(loginFailure(error)) })
    };
}

