

function setUser(user_data){
    
    localStorage.setItem("user",JSON.stringify(user_data));
    
    
}
function getUser(){
   
   if(localStorage.getItem("user")==undefined)return undefined;
    return JSON.parse(localStorage.getItem("user"));
}
function removeUser(){
    localStorage.removeItem("user");
}



export {setUser,getUser,removeUser};