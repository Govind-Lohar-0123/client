
import { getUser, removeUser } from '../MyProfile/auth/userAction';
import { getToken, removeToken } from '../MyProfile/auth/tokenAction';
export default function Logout() {

   

    removeToken();
    removeUser();
   

}



