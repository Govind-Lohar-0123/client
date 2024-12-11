import { TextField, styled, Box, Button, Typography, FormControl, Link } from "@mui/material";
import { useState } from "react";
import { userUpdate, sendOTP, verifyOTP } from "./userApi";



const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",


    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)",
    margin: "auto",
    width: "30%",

    height: "50vh"

}))



const RequestOTP = styled(Button)`
    box-shadow:0 2px 6px 0 rgb(0 0 0/ 20%);
    background-color:white;
    color:#2874fe;
    border-radius:2px;
`
export default function ForgetPassword() {

    const [toggle, setToggle] = useState(true);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [result, setResult] = useState({ type: false, msg: "" })
    const [otp, setOtp] = useState("");
    const [showPassForm, setShowPassForm] = useState(false);

    // **********HANDLES***********





    const changePassHande = (e) => {
        if (userUpdate({ email, password: pass })) window.location.href = "/account/login";
        setResult({ type: false, msg: "User Password has been changed..." });
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const sendOTPHandle = () => {

        if (isValidEmail(email) == false) {
            setResult({ type: true, msg: "Email Type is not Valid" });

        }
        else {
            sendOTP(email, setResult, setToggle);
            setResult({ type: true, msg: "Loading..." });
        }
        setTimeout(() => setResult({ type: false, msg: "" }), 3000);


    }
    const verifyOTPHandle = () => {
        if (verifyOTP(email, otp, setResult) == true) setShowPassForm(true);
        setTimeout(() => setResult({ type: false, msg: "" }), 3000);
        setShowPassForm(true);
    }


    return <>

        <Wrapper className="bg-white " >
            <Box className=" h-100 w-100" >

                <Box  >
                    <Box className="mt-5">
                        {(result.type == true) ? <div className="mx-5 alert alert-primary">{result.msg}</div> : ""}
                        <Typography variant="h5" className="mx-auto text-center mb-3">Forget Password</Typography>
                        <FormControl className="w-100 px-5"  >
                            {(toggle == true) ?
                                <>
                                    <TextField variant="standard" onChange={(e) => setEmail(e.target.value)} className="w-100" value={email} name="email" label="Enter email" />
                                    <RequestOTP variant="contained" onClick={sendOTPHandle} className="w-75 mx-auto text-white mt-4" style={{ backgroundColor: "orange" }}>Send OTP</RequestOTP>
                                </>
                                :
                                <>
                                    {
                                        (showPassForm == false) ?
                                            <>
                                                <TextField variant="standard" onChange={(e) => setOtp(e.target.value)} className="w-100" value={otp} name="Enter OTP" label="Enter OTP" />
                                                <RequestOTP variant="contained" onClick={verifyOTPHandle} className="w-75 mx-auto text-white mt-4" style={{ backgroundColor: "green" }}>verify OTP</RequestOTP>
                                            </>
                                            :
                                            <>
                                                <TextField variant="standard" onChange={(e) => setPass(e.target.value)} className="w-100" value={pass} label="Enter New Password" />
                                                <RequestOTP variant="contained" onClick={changePassHande} className="w-75 mx-auto text-white mt-4" style={{ backgroundColor: "blue" }}>Change Password</RequestOTP>
                                            </>


                                    }

                                </>
                            }
                        </FormControl>
                    </Box>

                </Box>



            </Box>


        </Wrapper >
    </>
}