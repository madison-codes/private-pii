const URL = 'http://localhost:3001';

export function addPII(title, pii) {
    const payload = {
        title,
        pii
    }
    return fetch(`${URL}/new`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(payload)
    })
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