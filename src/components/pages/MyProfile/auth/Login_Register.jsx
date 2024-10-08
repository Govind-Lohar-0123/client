import { Dialog, TextField, styled, Box, Button, Typography, FormControl } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"


import { useDispatch, useSelector } from "react-redux";

import { userRegister, userLogin } from "./userApi";




const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",


    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)",
    margin: "auto",
    width: "60%",

    height: "75vh"

}))





const LoginBtn = styled(Button)`
    background-color:#FB641B;
`
const RequestOTP = styled(Button)`
    box-shadow:0 2px 6px 0 rgb(0 0 0/ 20%);
    background-color:white;
    color:#2874fe;
    border-radius:2px;
`
const accountinitialvalue = {
    login: { view: "login", heading: "Login", subHeading: "Get access to your Order,Wishlist and Recommendation" },
    singup: { view: "signup", heading: "Looks like you`re new here! ", subHeading: "Singup with your mobile number to get started" }
}
function validateEmail(userEmail) {

    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(userEmail);
    if (result) {
        return true;
    } else {
        return false;
    }
}
function validateNumber(input) {
    var re = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/

    return re.test(input);
}
const signupinitialvalue = {
    firstname: "",
    lastname: "",
    phone: "",
    username: "",
    password: "",
    email: "",

}
const logininitialvalue = {
    password: "",
    email: ""
}

const resultinitialvalue = {
    status: true, msg: ""
}

export default function Login_Register() {

    const [account, toggleAccount] = useState(true);
    const [signData, setSignData] = useState(signupinitialvalue);
    const [loginData, setLoginData] = useState(logininitialvalue);
    const [result, setResult] = useState(resultinitialvalue);

    // **********HANDLES***********

    const registerHandle = async () => {
        let flag = await userRegister(signData, setResult);
        if (flag == true) {
            window.location.href = "/"
        }

    }

    const loginHandle = async () => {
        // let isValidEmail = validateEmail(loginData.email);
        // let isValidNumber = validateEmail(loginData.email);

        // if (isValidEmail) {
        //     setResult({ status: false, msg: "" });
        // }
        // else if (isValidNumber) {
        //     setResult({ status: false, msg: "" });
        // }
        // else setResult({ status: true, msg: "Please enter valid Email ID/Mobile number" });
        let flag = await userLogin(loginData, setResult);
        if (flag == true) {
            window.location.href = "/"
        }
        //smtp male send
    }


    const accountHandle = () => {
        toggleAccount((account == true) ? false : true);
    }


    const signInputHandle = (e) => {

        setSignData({ ...signData, [e.target.name]: e.target.value });
    }
    const loginInputHandle = (e) => {
        setResult({ status: false, msg: "" });
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }
    return <>

        <Wrapper className="bg-white " >

            <Box style={{ maxWidth: "45%" }} className=" bg-primary text-white py-5 d-flex flex-direction-column justify-content-space-between align-item-center">
                {
                    (account == true) ? <Box className="px-4 mx-auto">
                        <h3 className="text-bold">{accountinitialvalue.login.heading}</h3>
                        <Typography className="mt-3" style={{ color: "#dbdbdb", fontSize: "18px" }}>{accountinitialvalue.login.subHeading}</Typography>
                    </Box>
                        : <Box className="px-4  mx-auto">
                            <h3 className="text-bold">{accountinitialvalue.singup.heading}</h3>
                            <Typography className="mt-3" style={{ color: "#dbdbdb", fontSize: "18px" }}>{accountinitialvalue.singup.subHeading}</Typography>
                        </Box>
                }

                <Box >
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
                </Box>

            </Box>
            <Box className=" h-100 w-100" >
                {(account == true) ?
                    <Box className="d-flex flex-direction-column h-100 justify-content-space-between" >
                        <Box className="mt-5">
                            {(result.type == true) ? <div className="mx-5 alert alert-primary">{result.msg}</div> : ""}
                            <FormControl className="w-100 px-5"  >
                                <TextField variant="standard" className="w-100" defaultValue={signData.email} onChange={loginInputHandle} name="email" label="Enter Email" />
                                <TextField variant="standard" className=" w-100 my-3" defaultValue={signData.password} onChange={loginInputHandle} name="password" label="Enter Password" />
                                <Typography className="text-danger text-bold mt-1" style={{ fontSize: "11px" }}>{(result.status) ? result.msg : ""}</Typography>
                                <Typography className="mb-3 text-muted  mt-4" style={{ fontSize: "12px" }}>
                                    By continuing, you agree to Flipkart's <span className="text-primary">Terms of Use</span> and <span className="text-primary">Privacy Policy.</span>
                                </Typography>
                                <LoginBtn variant="contained" className="w-100  py-3" onClick={loginHandle}>Login</LoginBtn>
                               
                                {/* <RequestOTP variant="contained" >Request OTP</RequestOTP>  */}

                            </FormControl>
                        </Box>
                        <Typography className="text-center text-primary mb-4 text-bold " onClick={accountHandle} style={{ fontSize: "14px", cursor: "pointer" }}>New to Flipkart? Create an account</Typography>
                    </Box>
                    :
                    <Box className=" mt-2" >
                        {(result.type == true) ? <div className="alert mx-5 alert-primary">{result.msg}</div> : ""}
                        <FormControl className="d-flex flex-direction-column gap-2 w-100 px-5">
                            <TextField variant="standard" onChange={signInputHandle} defaultValue={signData.firstname} className="w-100" name="firstname" label="Enter FirstName" />
                            <TextField variant="standard" onChange={signInputHandle} defaultValue={signData.lastname} className=" w-100 " name="lastname" label="Enter LastName" />
                            <TextField variant="standard" onChange={signInputHandle} defaultValue={signData.username} className=" w-100 " name="username" label="Enter UserName" />
                            <TextField variant="standard" onChange={signInputHandle} defaultValue={signData.email} className=" w-100 " name="email" label="Enter Email" />
                            <TextField variant="standard" onChange={signInputHandle} defaultValue={signData.password} className=" w-100 " name="password" label="Enter Password" />
                            <TextField variant="standard" onChange={signInputHandle} defaultValue={signData.phone} className=" w-100 " name="phone" label="Enter Phone" />
                            <LoginBtn variant="contained" onClick={registerHandle} className="w-100  py-2 mt-2">Continue</LoginBtn>
                            <RequestOTP variant="contained" className="w-100  py-2 mt-2 " onClick={accountHandle} >Existing User?Log in</RequestOTP>

                        </FormControl>
                    </Box>
                }

            </Box>


        </Wrapper>
    </>
}