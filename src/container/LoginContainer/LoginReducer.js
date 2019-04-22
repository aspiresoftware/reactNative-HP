const initialState = {
    isLoading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'IS_LOADING':
            return Object.assign({}, state, { isLoading: action.isLoading, result: action.result, error: action.error });
            break;
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, { result: action.result });
            break;
        case 'LOGIN_FAILED':
            return Object.assign({}, state, { error: action.error });
            break;
        case 'RESET_LOGIN_FORM':
            return Object.assign({}, state, { result: action.result, error: action.error })
        default:
            return state;
    }
}
