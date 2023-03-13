export const test_action = (payload) => {
    return {
        type: 'test',
        payload
    }
}
export const set_token = (payload) => {
    return {
        type: 'token',
        payload
    }
}