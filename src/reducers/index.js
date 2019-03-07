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
        console.log('test', action.payload)
        return {
            user: action.payload
        };

    }
    if (action.type === "GET_PII") {
        return {
            id: action.payload.groupID,
            admins: action.payload.groupAdmins,
            members: action.payload.groupMembers,
        };
    }
    return state;
}