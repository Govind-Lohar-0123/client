export function addEmailPassToCookie(email, password) {
    const date = new Date();
    let days=3;
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    email = `email=${email}`
   password = `password=${password}`
     document.cookie = `${email} ;${password} ; ${expires}`;
}
export function setEmailForResetPass(email) {
    
    document.cookie = `resetPassEmail=${email};`

}
export function removeCookies() {

    document.cookie = `email=${""};`
    document.cookie = `password=${""};`
}
export function getEmailForResetPass() {
    const cookies = document.cookie.split(';');
    let nameEQ="resetPassEmail" + "=";
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        // If the cookie starts with the name, return its value
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }

    return "";
  

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

    return ""; // Return null if the cookie is not found
}

