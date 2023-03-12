const initialState = {
    test: {}
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
    
        default:
            return state;
    }
}