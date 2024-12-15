
import { removeToken, removeUser } from "../auth/cookieAction";
import { clientUrl } from "./data";
export default function logOut() {



    removeToken();
    removeUser();
    window.location.href = clientUrl;


}



