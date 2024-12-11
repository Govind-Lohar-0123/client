import * as React from 'react';
import { Link, styled } from '@mui/material';
import { Link as routerLink } from "react-router-dom"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { getUser } from './userAction';
import { changeUserPassword } from './userApi';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,

    boxShadow: 24,
    p: 4,
};

const Component = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        backgroundColor: "white",
        marginTop: "3rem"

    },
    [theme.breakpoints.down("sm")]: {
        width: "90%"
    }
}))

export default function ChangePassword() {

    let [user_data, setUser_data] = React.useState({ email: getUser().email, confirmPassword: "", oldPassword: "", newPassword: "" });

    const [result, setResult] = React.useState({ type: false, msg: "" });
    const handleInput = (e) => {
        setUser_data({ ...user_data, [e.target.name]: e.target.value });
    }
    const changePassHandle = () => {
        changeUserPassword(user_data, setResult);
    }
    return (
        <div className="border-none">


            <Component sx={style} className="p-4 mt-5">
                {(result.type == true) ? <div className="alert alert-primary" role="alert">
                    {result.msg}
                </div> : ""}
                <Typography variant='h5' className="text-center text-bold">Change Password</Typography>
                <form className="my-4">

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><i className="fa-regular text-dark fa-envelope "></i> Enter Email </label>
                        <input type="email" value={user_data.email} readOnly className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><i className="fa-solid fa-lock"></i> Old Password</label>
                        <input type="password" value={user_data.oldPassword} onChange={handleInput} name="oldPassword" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><i className="fa-solid fa-lock"></i>New  Password</label>
                        <input type="password" value={user_data.newPassword} onChange={handleInput} name="newPassword" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><i className="fa-solid fa-lock"></i> Confirm Password</label>
                        <input type="password" value={user_data.confirmPassword} onChange={handleInput} name="confirmPassword" className="form-control" id="exampleInputPassword1" />
                    </div>



                    <Box className="d-flex gap-2">

                        <Link to="/profile" component={routerLink} ><Button variant='contained' className="mt-3  bg-danger px-5 text-bold w-50">Cancel</Button>
                        </Link>
                        <Button variant='contained' onClick={changePassHandle} className="mt-3  btn-primary text-bold w-50">Change Password</Button>
                    </Box>
                </form>
            </Component>




        </div>
    );
}