import * as Api from "../lib/Api.js";
import showSnackbar from "../lib/Snackbar";
import * as IronWeb from '@ironcorelabs/ironweb';

function encrypt(data) {
    const UTF8 = IronWeb.codec.utf8.toBytes(data);
    return IronWeb.document.encrypt(UTF8)
        .then((data) => {
            return data;
        })

}
export function addPII(message) {
    const UTF8 = IronWeb.codec.utf8.toBytes(message);
    return (dispatch) => {
        IronWeb.document.encrypt(UTF8)
            .then((data) => {
                Api.addPII(data.documentID, data.document).then(() => {
                    dispatch({
                        type: "ADD_PII",
                        payload: {
                            id: data.documentID,
                            document: data.document,
                        }
                    })
                    showSnackbar('PII saved', "success");
                }).catch((e) => {
                    showSnackbar(e.message, "error");
                })
            })
    }
}

export function initialize(password) {
    const newUserID = (Math.floor(Math.random() * (1000 - 0 + 1)) + 0).toString();
    return (dispatch) => {
        IronWeb.initialize(
                () => Api.getJWT(newUserID),
                () => Promise.resolve(password))
            .then(() => {
                dispatch({
                    type: "INIT_ENCRYPT",
                    payload: newUserID,
                });
                showSnackbar('User initialized', "success");
            });
    };

}

export function getPII() {
    return {
        type: "GET_PII",
        operation: Api.getPII,
    };
}