import * as Api from "../lib/Api.js";
import showSnackbar from "../lib/Snackbar";

export function addPII(title, pii) {
    return (dispatch) => {
        Api.addPII(title, pii).then(() => {
            dispatch({
                type: "ADD_PII",
                payload: {
                    title,
                    pii,
                }
            })
            showSnackbar('PII saved', "success");

        }).catch((e) => {
            showSnackbar(e.message, "error");
        })
    }
}

export function getPII() {
    return {
        type: "GET_PII",
        operation: Api.getPII,
    };
}