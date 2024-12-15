

export function setToken(token, days) {

    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    token = `token=${token}`
    document.cookie = `${token}; ${expires}`;
}
export function setUser(user, days) {

    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    user = `user=${user}`
    document.cookie = `${user}; ${expires}`;
}

export function removeToken() {
    document.cookie = "token" + "=null; path=/;";

}
export function removeUser() {
    document.cookie = "user" + "=null; path=/;";

}

export function setCookieForRememberMe(email, password, days) {
    const date = new Date();

    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = `email=${email}; ${expires}`;
    document.cookie = `password=${password}; ${expires}`;
}
export function setCookieForResetPass(resetEmail, min) {
    const date = new Date();
    date.setTime(date.getTime() + (min * 60 * 1000)); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    resetEmail = `resetEmail=${resetEmail}`;
    document.cookie = `${resetEmail} ; ${expires}`;
}



export function getCookie(name) {
    // Create a pattern to find the cookie name and value
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        // If the cookie starts with the name, return its value
        if (cookie.indexOf(nameEQ) === 0) {

            return cookie.substring(nameEQ.length);
        }
    }

    return (name=="token" || name=="user")?null : "";
}


