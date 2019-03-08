const defaultState = {
    user: '',
    data: []
};

export default function (state = defaultState, action) {
    if (action.type === "ADD_PII") {
        return {
            data: action.payload
        };
    }
    if (action.type === "INIT_ENCRYPT") {
        return {
            user: action.payload
        };

    }
    if (action.type === "GET_PII") {
        return {};
    }
    return state;
}