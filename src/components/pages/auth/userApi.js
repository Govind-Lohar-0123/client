


import axios from "axios";


import { url } from "../partials/data";
import { clientUrl } from "../partials/data";
import { setCookieForRememberMe, setToken, getCookie, setUser } from "./cookieAction";

const temp = { token: null, user: null }
export const userRegister = async (signData, setResult) => {

    try {
        const { state, data } = await axios({
            method: 'post',
            url: `${url}/user-api/signup`,
            data: { user_data: signData }
        });

        if (data.status == true) {
            setToken(data.token, 4);
            setUser(data.user, 4);
            window.location.href = clientUrl;
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
    setTimeout(() => setResult({ type: false, msg: "" }))
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
export const verifyOTP = async (email, password, otp, setResult) => {
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

            setToken(temp.token,4);
            setUser(JSON.stringify(temp.user),4);
            setCookieForRememberMe(email, password, 3);
            setTimeout(() => window.location.href = clientUrl, 5000);

        }

        setResult({ type: true, msg: data.message });

    }
    catch (err) {

        setResult({ type: true, msg: "Server Error..." + err.message });
    }
    setTimeout(() => setResult({ type: false, msg: "" }), 4000);
}

export async function changeUserPassword(user_data, setResult) {

    let { confirmPassword, newPassword } = user_data;

    for (let key in user_data) {
        if (user_data[key] == "" || user_data[key] == undefined) {
            setResult({ type: true, msg: "Please Fill All Field" });
            return;
        }
    }
    if (confirmPassword != newPassword) {
        setResult({ type: true, msg: "Password is MissMatch..." });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);
        return;
    }



    try {
        let token = getCookie("token");
        let { status, data } = await axios({
            method: "put",
            url: `${url}/user-api/change-pass`,
            data: { user_data },
            headers: {
                'Authorization': 'Bearer ' + token
            }

        })

        if (status == 200) {
            window.location.href = clientUrl;
        }

        setResult({ type: true, msg: data.msg });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);

    }
    catch (err) {
        setResult({ type: true, msg: err.message });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);
    }

}
export async function userForgetPassword(user_data, setResult) {

    let { confirmPassword, newPassword } = user_data;

    for (let key in user_data) {
        if (user_data[key] == "" || user_data[key] == undefined) {
            setResult({ type: true, msg: "Please Fill All Field" });
            return;
        }
    }
    if (confirmPassword != newPassword) {
        setResult({ type: true, msg: "Password is MissMatch..." });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);
        return;
    }



    try {
        let { status, data } = await axios({
            method: "put",
            url: `${url}/user-api/forget-password`,
            data: { user_data },

        })

        if (status == 200) {
            window.location.href = clientUrl;
        }

        setResult({ type: true, msg: data.msg });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);

    }
    catch (err) {
        setResult({ type: true, msg: err.message });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);
    }

}
