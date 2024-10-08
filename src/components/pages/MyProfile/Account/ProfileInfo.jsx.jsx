import { Box, styled, TextField, Grid, Typography, Button, Link } from "@mui/material"
import Dashboard from "../Dashboard";
import Input from "@mui/material"
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import { useState } from "react";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getUser, removeUser } from "../auth/userAction";
import FormLabel from '@mui/material/FormLabel';
import { deleteAccount, userUpdate } from "../auth/userApi";
import { NavLink, useNavigate } from "react-router-dom"
import { removeToken } from "../auth/tokenAction";

const TextFieldStyled = styled(TextField)(({ theme }) => ({

    "label": {
        color: "black !important",
        fontWeight: "bold",
    }

}))
const RadioGroupStyled = styled(RadioGroup)(({ theme }) => ({

    "label": {
        color: " #878787 !important",
        cursor: "not-allowed",
    }

}))
const ComponentBox = styled(Box)(({ theme }) => ({
    "label": {
        color: "black !important",
        fontSize: "13px !important"
    }
}))
const FAQsStyled = styled(Box)(({ theme }) => ({
    "p": {
        fontSize: "13px", marginBlock: "20px"
    },
    "a": { fontSize: "13px", fontWeight: "bold" }


}))

const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "#f5f7fa !important",
    width: "100%",
    height: "100%",

}))
const Component = styled(Grid)(({ theme }) => ({
    width: "80%",

    marginInline: "auto",

}))

export default function ProfileInfo() {
    const user = getUser();

    const { firstname, lastname, phone } = user;
    const [editPerInfo, setEditPerInfo] = useState(true);
    const [editEmail, setEditEmail] = useState(true);
    const [editMobile, setEditMobile] = useState(true);
    const [result, setResult] = useState({ msg: "", status: true });
    const [perInfo, setPerInfo] = useState({ firstname, lastname, phone, _id: user._id, gender: "" });
    const Wrapper = styled(Box)(({ theme }) => ({
        backgroundColor: "#f5f7fa !important",
        width: "100%",
        height: "100%",

    }))
    const navigate = useNavigate();

    const deactivateAccount = async () => {

        await userUpdate(perInfo, setResult);

    }
    const deleteAccountHandle = async () => {
        removeToken();
        removeUser();

        await deleteAccount(user._id);
        navigate("/");

    }
    const updateInputHandle = (e) => {

        setPerInfo({ ...perInfo, [e.target.name]: e.target.value });
    }
    const genderHandle = (e) => {

        setPerInfo({ ...perInfo, "gender": e.target.value });
    }

    return (
        <>

            <Wrapper className="mt-2">

                <Component className="mt-4">

                    <Grid container >
                        <Grid item lg={3} >
                            <Dashboard />
                        </Grid>



                        <Grid item lg={8.86} style={{ backgroundColor: "white", marginLeft: "auto", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)" }}>
                            <ComponentBox className="" style={{

                            }}>
                                <Box className="p-4">
                                    <Box >
                                        <Box className="d-flex gap-4 align-item-center ">
                                            <Typography className="text-bold" style={{ fontSize: "18px" }} >Personal Information</Typography>
                                            <Typography onClick={() => setEditPerInfo((editPerInfo) ? false : true)} className="text-primary text-bold" style={{ fontSize: "14px", cursor: "pointer" }} >Edit</Typography>
                                        </Box>
                                        {
                                            (editPerInfo) ?
                                                <>
                                                    <Box className="d-flex gap-3 mt-4">
                                                        <Box style={{ border: "solid 2px #e6f4e8", width: "250px", height: "52px", }}>
                                                            <input type="text" name=" " value={perInfo.firstname} className="border-none h-100 w-100" style={{ width: "100%", paddingLeft: "16px", fontSize: "14px", outline: "none", border: "none", backgroundColor: "#f5f7fa ", }} />
                                                        </Box>
                                                        <Box style={{ border: "solid 2px #e6f4e8", width: "250px", height: "52px", }}>
                                                            <input type="text" name=" " value={perInfo.lastname} className="border-none h-100 w-100" style={{ width: "100%", paddingLeft: "16px", fontSize: "14px", outline: "none", border: "none", backgroundColor: "#f5f7fa ", }} />
                                                        </Box>

                                                    </Box>
                                                    <Box>
                                                        <FormControl className="mt-4">
                                                            <FormLabel id="demo-row-radio-buttons-group-label" className="text-dark py-1" >Your Gender</FormLabel>
                                                            <RadioGroupStyled
                                                                row
                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                name="row-radio-buttons-group"
                                                            >

                                                                <FormControlLabel value="male" disabled control={<Radio size="small" />} label="Male" />
                                                                <FormControlLabel value="female" disabled control={<Radio size="small" />} label="Female" />

                                                            </RadioGroupStyled>
                                                        </FormControl>

                                                    </Box>
                                                </>
                                                :
                                                <>
                                                    <Box className="d-flex gap-3 my-4">

                                                        <FormControl variant="filled" style={{ height: "52px" }}>
                                                            <InputLabel htmlFor="component-filled">First Name</InputLabel>
                                                            <FilledInput onChange={updateInputHandle} name="firstname" />
                                                        </FormControl>
                                                        <FormControl variant="filled" style={{ height: "52px" }}>
                                                            <InputLabel htmlFor="component-filled">Last Name</InputLabel>
                                                            <FilledInput id="component-filled" onChange={updateInputHandle} name="lastname" defaultValue={perInfo.lastname} />
                                                        </FormControl>
                                                        <Button variant="contained" size="large" style={{ backgroundColor: "#2874f0", height: "53px", padding: "14px", width: "130px", fontSize: "16px", borderRadius: "3px" }}>
                                                            SAVE
                                                        </Button>
                                                    </Box>
                                                    <Box>
                                                        <FormControl className="mt-4">
                                                            <FormLabel id="demo-row-radio-buttons-group-label" className="text-dark py-1" >Your Gender</FormLabel>
                                                            <RadioGroupStyled
                                                                row
                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                name="row-radio-buttons-group"
                                                                value={perInfo.gender}
                                                                onChange={genderHandle}
                                                            >

                                                                <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />

                                                                <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />

                                                            </RadioGroupStyled>
                                                        </FormControl>

                                                    </Box>
                                                </>

                                        }

                                        <Box className="my-5">
                                            <Box className="d-flex gap-4 align-item-center ">
                                                <Typography className="text-bold" style={{ fontSize: "18px" }} >Email Address</Typography>
                                                {/* <Typography onClick={() => setEditEmail((editEmail) ? false : true)} className="text-primary text-bold" style={{ fontSize: "14px", cursor: "pointer" }}>Edit</Typography> */}
                                            </Box>
                                            <Box className="mt-4" style={{ border: "solid 2px #e6f4e8", width: "250px", height: "52px", }}>
                                                <input type="text" name=" " readOnly value={user.email} className="border-none h-100 w-100" style={{ width: "100%", paddingLeft: "16px", fontSize: "14px", outline: "none", border: "none", backgroundColor: "#f5f7fa ", }} />
                                            </Box>
                                            
                                        </Box>
                                        <Box className="my-5">
                                            <Box className="d-flex gap-4 align-item-center ">
                                                <Typography className="text-bold" style={{ fontSize: "18px" }} >Mobile Number</Typography>
                                                <Typography onClick={() => setEditMobile((editMobile) ? false : true)} className="text-primary text-bold" style={{ fontSize: "14px", cursor: "pointer" }}>Edit</Typography>
                                            </Box>
                                            {

                                                (editMobile) ?


                                                    <Box className="mt-4" style={{ border: "solid 2px #e6f4e8", width: "250px", height: "52px", }}>
                                                        <input type="text" name=" " value={perInfo.phone} className="border-none h-100 w-100" style={{ width: "100%", paddingLeft: "16px", fontSize: "14px", outline: "none", border: "none", backgroundColor: "#f5f7fa ", }} />
                                                    </Box>
                                                    :
                                                    <Box className="d-flex gap-3 mt-4" style={{ height: "50px" }} >
                                                        <TextField
                                                            onChange={updateInputHandle}

                                                            label="Mobile Number"
                                                            type="password"
                                                            style={{ fontWeight: "bold" }}
                                                            // autoComplete="current-password"
                                                            name="phone"
                                                        />
                                                        <Button variant="contained" size="large" style={{ backgroundColor: "#2874f0", height: "48px", padding: "14px", width: "130px", fontSize: "16px", borderRadius: "3px" }}>
                                                            SAVE
                                                        </Button>
                                                    </Box>

                                            }

                                        </Box>

                                        <FAQsStyled >
                                            <Typography className="text-bold" style={{ fontSize: "16px" }}>FAQs</Typography>
                                            <Box>
                                                <Typography className="text-bold ">
                                                    What happens when I update my email address (or mobile number)?
                                                </Typography>
                                                <Typography>
                                                    Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-bold ">
                                                    When will my Flipkart account be updated with the new email address (or mobile number)?
                                                </Typography>
                                                <Typography>
                                                    It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-bold ">
                                                    What happens to my existing Flipkart account when I update my email address (or mobile number)?
                                                </Typography>
                                                <Typography>
                                                    Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-bold ">
                                                    Does my Seller account get affected when I update my email address?
                                                </Typography>
                                                <Typography>
                                                    Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
                                                </Typography>
                                            </Box>
                                            <Box className="d-flex flex-direction-column gap-4 mt-5">
                                                <Link onClick={deactivateAccount} style={{ cursor: "pointer" }}>Deactivate Account</Link>
                                                <Link onClick={deleteAccountHandle} style={{ cursor: "pointer" }} className="text-danger">Delete Account</Link>
                                            </Box>


                                        </FAQsStyled>
                                    </Box>
                                    <Box>
                                        <img width="100%" height="auto" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png" style={{ verticalAlign: "middle" }} />
                                    </Box>

                                </Box>
                            </ComponentBox>

                        </Grid>

                    </Grid>
                </Component>
            </Wrapper >
        </>

    )

}