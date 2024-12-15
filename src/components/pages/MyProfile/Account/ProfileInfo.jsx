import { Box, styled, Typography, Button, Link } from "@mui/material"
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";
import { getCookie, setUser } from "../../auth/cookieAction";
import { useNavigate } from "react-router-dom"

import { userUpdate } from "../../auth/userApi";
import { deleteAccount } from "../../auth/userApi";
import { Link as routerLink } from "react-router-dom";

import logOut from "../../partials/logout";
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
let user =JSON.parse(getCookie("user"));
if (user != undefined  && user != null) { var { firstname, lastname, phone } = user; }
export default function ProfileInfo() {

    const [editPerInfo, setEditPerInfo] = useState(true);

    const [editMobile, setEditMobile] = useState(true);
    const [result, setResult] = useState({ msg: "", type: false });
    const [perInfo, setPerInfo] = useState({ firstname, lastname, phone, _id: user._id });

    const navigate = useNavigate();


    const deactivateAccount = async () => {

        let flag = await userUpdate({ firstname, lastname, phone }, setResult);
        if (flag == true) {
            setUser({ ...user, firstname: perInfo.firstname, lastname: perInfo.lastname, phone: perInfo.phone })
            setTimeout(() => {
                window.location.reload();
            }, 2000);

        }

    }
    const deleteAccountHandle = async () => {
        await deleteAccount(user._id, setResult);
        logOut();
        setTimeout(() => {
            navigate("/");
        }, 2000);



    }
    const updateInputHandle = (e) => {

        setPerInfo({ ...perInfo, [e.target.name]: e.target.value });
    }

    const saveUserInfoHandle = (e) => {
        let name = e.target.name;
        if (name == "phone") {
            let len = perInfo.phone.toString().length;

            if (len == 10) { phone = perInfo.phone; }
            else { setResult({ type: true, msg: "Please Enter 10 Digit..." }); }
            setEditMobile(true);
        }
        else {
            if (perInfo.firstname != "" && perInfo.lastname != "") {
                firstname = perInfo.firstname;
                lastname = perInfo.lastname;
                setEditPerInfo(true);
            }
            setEditPerInfo(true);
        }

        setTimeout(() => setResult({ type: false }))
    }
    return (
        <>

            <ComponentBox>
                {(result.type) ? <Box className="alert alert-primary w-50 mx-auto mt-5">{result.msg}</Box> : ""}

                <Box className="p-4">
                    <Box >
                        <Box className="d-flex gap-4 align-item-center ">
                            <Typography className="text-bold" style={{ fontSize: "18px" }} >Personal Information</Typography>
                            <Typography onClick={() => setEditPerInfo((editPerInfo) ? false : true)} className="text-primary text-bold" style={{ fontSize: "14px", cursor: "pointer" }} >Edit</Typography>
                        </Box>
                        {
                            (editPerInfo) ?
                                <>
                                    <Box className="d-flex gap-3 mt-4 flex-wrap">
                                        <Box style={{ border: "solid 2px #e6f4e8", width: "250px", height: "52px", }}>
                                            <input type="text" name=" " value={firstname} className="border-none h-100 w-100" style={{ width: "100%", paddingLeft: "16px", fontSize: "14px", outline: "none", border: "none", backgroundColor: "#f5f7fa ", }} />
                                        </Box>
                                        <Box style={{ border: "solid 2px #e6f4e8", width: "250px", height: "52px", }}>
                                            <input type="text" name=" " value={lastname} className="border-none h-100 w-100" style={{ width: "100%", paddingLeft: "16px", fontSize: "14px", outline: "none", border: "none", backgroundColor: "#f5f7fa ", }} />
                                        </Box>

                                    </Box>

                                </>
                                :
                                <>
                                    <Box className="d-flex gap-3 my-4 flex-wrap">

                                        <FormControl variant="filled" style={{ height: "52px" }}>
                                            <InputLabel htmlFor="component-filled">First Name</InputLabel>
                                            <FilledInput onChange={updateInputHandle} name="firstname" value={perInfo.firstname} />
                                        </FormControl>
                                        <FormControl variant="filled" style={{ height: "52px" }}>
                                            <InputLabel htmlFor="component-filled">Last Name</InputLabel>
                                            <FilledInput id="component-filled" onChange={updateInputHandle} name="lastname" defaultValue={perInfo.lastname} />
                                        </FormControl>
                                        <Button variant="contained" name="firstlastname" onClick={saveUserInfoHandle} size="large" style={{ backgroundColor: "#2874f0", height: "53px", padding: "14px", width: "130px", fontSize: "16px", borderRadius: "3px" }}>
                                            SAVE
                                        </Button>
                                    </Box>

                                </>

                        }

                        <Box className="my-5">
                            <Box className="d-flex gap-4 align-item-center ">
                                <Typography className="text-bold" style={{ fontSize: "18px" }} >Email Address</Typography>

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
                                        <input type="text" name=" " value={phone} className="border-none h-100 w-100" style={{ width: "100%", paddingLeft: "16px", fontSize: "14px", outline: "none", border: "none", backgroundColor: "#f5f7fa ", }} />
                                    </Box>
                                    :
                                    <Box className="d-flex gap-3 mt-4" style={{ height: "50px" }} >
                                        <FormControl variant="filled" style={{ height: "52px" }}>
                                            <InputLabel htmlFor="component-filled">Mobile Number</InputLabel>
                                            <FilledInput onChange={updateInputHandle} name="phone" type="number" value={perInfo.phone} />
                                        </FormControl>
                                        <Button variant="contained" onClick={saveUserInfoHandle} name="phone" size="large" style={{ backgroundColor: "#2874f0", height: "48px", padding: "14px", width: "130px", fontSize: "16px", borderRadius: "3px" }}>
                                            SAVE
                                        </Button>
                                    </Box>

                            }

                        </Box>
                        <Box>
                            <Link component={routerLink} to="/account/change-password" className="bg-primary text-white text-bold p-2">Change Password</Link>
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
                                <Button onClick={deactivateAccount} style={{ cursor: "pointer", width: "50%" }} className="bg-primary mx-auto text-white ">Deactivate Account</Button>
                                <Button onClick={deleteAccountHandle} style={{ cursor: "pointer", width: "50%" }} className="text-white mx-auto bg-danger ">Delete Account</Button>
                            </Box>


                        </FAQsStyled>
                    </Box>
                    <Box>
                        <img width="100%" height="auto" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png" style={{ verticalAlign: "middle" }} />
                    </Box>

                </Box>
            </ComponentBox>



        </>

    )

}