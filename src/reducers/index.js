const defaultState = {
    messages: []
};

export default function (state = defaultState, action) {
    console.log('in reducer')
    if (action.type === "ADD_PII") {
        return {
            ...state,
            messages: [action.payload, ...state.messages],
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