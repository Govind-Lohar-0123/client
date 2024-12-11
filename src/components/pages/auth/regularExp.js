export function isValidEmail(text) {
    const pattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(text);
}
export function isValidPhoneNumber(text) {
    const pattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return pattern.test(text);
}
export function isValidURL(text) {
    const pattern = /^(https?:\/\/)?(www\.)?([a-zA-Z\d-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
    return pattern.test(text);
}
export function isValidText(text) {
    const pattern = /^[a-zA-Z\d]$/;
    
    return pattern.test(text);
}
export function isValidPassword(text) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return  pattern.test(text);
}