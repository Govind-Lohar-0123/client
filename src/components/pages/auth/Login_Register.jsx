import { Dialog, TextField, styled, Box, Button, Grid, Typography, FormControl, Link } from "@mui/material";
import { useState } from "react";
import { userRegister, userLogin, sendOTP, verifyOTP } from "./userApi";
import { Link as routerLink } from "react-router-dom";
import { getCookie } from "./cookieAction";



const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",


    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)",
    margin: "auto",
    width: "60%",
    [theme.breakpoints.down("md")]: {
        marginTop: "35px",
        width: "80%",

        height: "80vh"
    },
    [theme.breakpoints.down("sm")]: {

        width: "90%",
        flexDirection: "column",
        ">div:first-child": {
            display: "flex"
        },

    },
    height: "75vh"


}))

const LeftComponent = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none"
    }
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


const signupinitialvalue = {
    firstname: "",
    lastname: "",
    phone: "",
    username: "",
    password: "",
    email: "",

}


let cookieEmail = getCookie("email");
let cookiePass = getCookie("password");


export default function Login_Register() {

    const [account, toggleAccount] = useState(true);
    const [signData, setSignData] = useState(signupinitialvalue);
    const [loginData, setLoginData] = useState({
        password: cookiePass,
        email: cookieEmail
    });

    const [result, setResult] = useState({ status: false, msg: "" })
    const [isOpt, setIsOtp] = useState(true);
    const [rememberMe, setRemember] = useState(false);
    const [otp, setOtp] = useState("");

    // **********HANDLES***********


    const registerHandle = () => {
        userRegister(signData, setResult);

    }

    const verifyOtpHandle = async () => {
        verifyOTP(loginData.email, loginData.password, otp, setResult);


    }
    const sendOTPHandle = async () => {
        sendOTP(loginData.email, setResult, setIsOtp);
    }
    const loginHandle = async () => {

        let flag = await userLogin(loginData, setResult);

        if (flag == true) {
            sendOTPHandle();
            setResult({ status: true, msg: "Loading..." })
        }
        //smtp male send
    }


    const accountHandle = () => {
        toggleAccount((account == true) ? false : true);
        setResult({ status: false, msg: "" });
    }


    const signInputHandle = (e) => {

        setSignData({ ...signData, [e.target.name]: e.target.value });
    }
    const loginInputHandle = (e) => {
        setResult({ status: false, msg: "" });
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }
    return <>

        <Wrapper className="bg-white "  >
            <Grid container lg={12} >
                <LeftComponent item lg={4} md={5} sm={5}>
                    <Box className=" h-100 bg-primary text-white py-5 d-flex flex-direction-column justify-content-space-between align-item-center">
                        {
                            (account == true) ?
                                <Box className="px-4 mx-auto">
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
                </LeftComponent>
                <Grid item lg={8} md={7} sm={7} xs={12}>
                    <Box className=" h-100 w-100" >
                        {(account == true) ?
                            <Box className="d-flex flex-direction-column h-100 justify-content-space-between" >
                                <Box className="mt-5">
                                    {(result.type == true) ? <div className="mx-5 alert alert-primary">{result.msg}</div> : ""}
                                    <Typography variant="h5" className="text-center text-bold mb-2">LOGIN</Typography>
                                    <FormControl className="w-100 px-5"  >
                                        {(isOpt == true) ?
                                            <Box>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" defaultValue={loginData.email} onChange={loginInputHandle} name="email" label="Enter Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                                </div>
                                                <div className="form-group my-4">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control" defaultValue={loginData.password} onChange={loginInputHandle} name="password" label="Enter Password" id="exampleInputPassword1" placeholder="Password" />
                                                </div>




                                                <Typography className="text-danger text-bold mt-1" style={{ fontSize: "11px" }}>{(result.status) ? result.msg : ""}</Typography>
                                                <Box>
                                                    <input type="checkbox" onClick={() => setRemember((rememberMe) ? false : true)} />
                                                    <label for="vehicle1" className="mx-2">Remember Me</label>
                                                </Box>
                                                <Link to="/forget-password" component={routerLink} className="forget-password">Forget Password</Link>
                                                <Typography className="mb-3 text-muted  mt-4" style={{ fontSize: "12px" }}>
                                                    By continuing, you agree to Flipkart's <span className="text-primary">Terms of Use</span> and <span className="text-primary">Privacy Policy.</span>
                                                </Typography>
                                                <LoginBtn variant="contained" className="w-100  py-3" onClick={loginHandle}>Login</LoginBtn>
                                            </Box>

                                            :
                                            <>
                                                <TextField variant="standard" type="number" className=" w-100 my-3" defaultValue={otp} onChange={(e) => {

                                                    setOtp(e.target.value)
                                                }} name="OTP" label="Enter OTP" />
                                                <RequestOTP variant="contained" onClick={verifyOtpHandle} className="w-75 mx-auto text-white" style={{ backgroundColor: "orange" }}>Request OTP</RequestOTP>
                                            </>
                                        }
                                    </FormControl>





                                </Box>
                                <Typography className="text-center text-primary mb-4 mt-2 text-bold " onClick={accountHandle} style={{ fontSize: "14px", cursor: "pointer" }}>New to Flipkart? Create an account</Typography>
                            </Box>
                            :
                            <Box className=" mt-2" >
                                {(result.type == true) ? <div className="alert mx-5 alert-primary">{result.msg}</div> : ""}
                                <Typography variant="h5" className="text-center text-bold mb-2">REGISTER</Typography>
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
                </Grid>

            </Grid>

        </Wrapper>
    </>
}