
function setToken(token){
    window.localStorage.setItem("Token",token);
    
}
function getToken(){
    
    return localStorage.getItem("Token");
}
function removeToken(){
    localStorage.removeItem("Token");
}

export {setToken,getToken,removeToken};