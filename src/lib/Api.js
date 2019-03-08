const URL = 'http://localhost:3001';

export function addPII(message) {
    return fetch(`${URL}/new`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
            message
        })
    })
}

export function getJWT(userID) {
    return fetch(`http://localhost:3001/jwt?userID=${userID}`)
        .then((response) => response.text())
        .catch((e) => console.log(e));
}


export function getPII(key, item) {
    fetch(`${URL}/pii`, {
            mode: 'cors'
        })
        .then(res => res.json())
        .then(res => {
            context.commit('pii', res);
        });

}