


import axios from "axios";
import { setUser } from "./userAction";
import { setToken } from "./tokenAction";
import { url } from "../../Home/data";

const temp = { token: null, user: null }
export const userRegister = async (signData, setResult) => {

    try {
        const { state, data } = await axios({
            method: 'post',
            url: `${url}/user-api/signup`,
            data: { user_data: signData }
        });

        if (data.status == true) {
            setToken(data.token);
            setUser(data.user);
            window.location.href = "/";
        }
        else {
            setResult({ type: true, msg: data.msg });
            return false;
        }
    }
    catch (err) {

        setResult({ type: true, msg: "Server Error..." });
    }
    return false;

}

export const userUpdate = async (user_data, setResult) => {

    try {

        const { state, data } = await axios({
            method: 'put',
            url: `${url}/user-api/update`,
            data: { user_data }
        });
       
        setResult({ type: true, msg: data.msg });
        return true;
    }
    catch (err) {
        setResult({ type: true, msg: "Error" });
    }
    setTimeout(() => setResult({ status: false, msg: "" }))
    return false;

}

export const deleteAccount = async (prod_id, setResult) => {

    try {
        const { state, data } = await axios({
            method: 'delete',
            url: `${url}/user-api/delete/${prod_id}`,

        });

        return true;
    }
    catch (err) {
        return false;
    }


}
export const userLogin = async (loginData, setResult) => {

    try {
        const { status, data } = await axios({
            method: 'post',
            url: `${url}/user-api/login`,
            data: { user_data: loginData }
        });

        if (data.status == true) {
            temp.token = data.token;
            temp.user = data.user;
            return true;
        }
        else {
            setResult({ type: true, msg: data.msg });

            return false;
        }

    }
    catch (err) {

        setResult({ type: true, msg: "Server Error..." });
    }

    return false;


}
export const sendOTP = async (email, setResult, setIsOtp) => {
    try {


        const { state, data } = await axios({
            method: 'post',
            url: `${url}/otp-api/send-otp`,
            data: { email }
        });
        if (data.success) setIsOtp(false);
        setResult({ type: true, msg: data.message });


        return true;
    }
    catch (err) { }

}
export const verifyOTP = async (email, otp, setResult) => {
    let otplen = otp.toString().length;
    if (otplen != 4) {

        setResult({ type: true, msg: "Please Enter Only 4 Digit OTP" });
        return false;
    }
    try {

        const { state, data } = await axios({
            method: 'post',
            url: `${url}/otp-api/verify-otp`,
            data: { email, otp }
        });

        if (data.success == true) {
            
            setToken(temp.token);
            setUser(temp.user);
        }

        setResult({ type: true, msg: data.message });
        

    }
    catch (err) {

        setResult({ type: true, msg: "Server Error..." + err.message });
    }
    setTimeout(()=>setResult({type:false,msg:""}),5000);
}
