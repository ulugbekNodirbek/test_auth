const initialState = {
    test: {},
    token: null
}

export const rootReducer = (state = initialState, {
        type,
        payload
    }) => {
    switch (type) {
        case 'test':
            return {
                ...state,
                test: payload
            }
    
        case 'token':
            return {
                ...state,
                token: payload
            }
    
        default:
            return state;
    }
}