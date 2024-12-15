import * as React from 'react';
import { Link, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as routerLink } from "react-router-dom"
import { useState } from 'react';



import { clientUrl } from '../partials/data.js';
import sendEmail from "../Email/email.js"
import { isValidEmail } from "../auth/regularExp.js"
import { setCookieForResetPass } from './cookieAction.js';

// import {useNavigator} from "react-router-dom";

const style = {

    marginInline: "auto",
    boxShadow: 24,
    p: 4,
};

const Component = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
        backgroundColor: "white",
        marginTop: "3rem",
        width: "70%",

    },
    [theme.breakpoints.down("sm")]: {
        "button": {
            marginInline: "auto"
        },
        "a": { marginInline: "auto" },
        width: "90%"
    }
}))
let options = {
    to: "govindlohar3210@gmail.com",
    subject: "Welcome to reset your password",
    msg: `<p>Please click on the link to reset you password link: ${clientUrl}/reset-password</p>`
}
export default function ForgetPassword() {







    const [result, setResult] = useState({ type: false, msg: "" });
    const [user_data, setUser_data] = useState({
        email: "",
    });

    const handleInput = (e) => {
        setUser_data({ ...user_data, [e.target.name]: e.target.value });
    }

    const sendEmailHandle = () => {
        if (user_data.email == "") {
            setResult({ type: true, msg: "Please Fill This Field...." });

        }
        else if (isValidEmail(user_data.email) == false) {
            setResult({ type: true, msg: "Enter Valid Email Type...." });
        }
        else {
            //send email to user
            options.to = user_data.email;
            setCookieForResetPass(user_data.email, 2);
            sendEmail(options);
            setResult({ type: true, msg: "Check your email..." })




        }
        setTimeout(() => setResult({ type: false, msg: "" }), 5000)
    }

    return (
        <div className="border-none">





            <Component sx={style} className="p-4">
                {(result.type == true) ? <div className="alert alert-primary" role="alert">
                    {result.msg}
                </div> : ""}
                <Typography variant='h5' className="text-center text-bold">Forget Password</Typography>
                <form className="my-4">

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Enter Email </label>
                        <input type="email" name="email" value={user_data.email} onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>


                    <Box className="d-flex gap-2">

                        <Link to="/login" className='d-block w-100' component={routerLink}><Button variant='contained' className="mt-3  bg-danger  text-bold w-50">Cancel</Button></Link>

                        <Button variant='contained' onClick={sendEmailHandle} className="mt-3  btn-primary text-bold w-50">Submit</Button>
                    </Box>
                </form>
            </Component>






        </div>
    );
}