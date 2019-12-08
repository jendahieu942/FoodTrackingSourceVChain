export const apiLogin = "http://178.128.217.110:8105/authentication";

export const login = (username, password) => {
    console.info(apiLogin)
    console.info(username + " - " + password)
    if (username == null || password == null) {
        return null;
    }
    return fetch(apiLogin, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }).then((response) => {
        return response.json();
    })
    .then(responseJson => {
        console.info(responseJson);
        if (responseJson['statusCode'] == 0) {
            const token = responseJson['authorization'];
            return token;
        } else {
            return null;
        }
    })
}