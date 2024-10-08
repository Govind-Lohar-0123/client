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

import FormLabel from '@mui/material/FormLabel';

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

export default function VPADetails() {
    const [editPerInfo, setEditPerInfo] = useState(true);
    const [editEmail, setEditEmail] = useState(true);
    const [editMobile, setEditMobile] = useState(true);
    const Wrapper = styled(Box)(({ theme }) => ({
        backgroundColor: "#f5f7fa !important",
        width: "100%",
        height: "100%",

    }))
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

                                    <Box className="d-flex gap-4 align-item-center ">
                                        <Typography className="text-bold" style={{ fontSize: "19px" }} >No VPAs saved to be shown</Typography>
                                    </Box>
                                    <FAQsStyled className="mt-5">
                                        <Typography className="text-bold" style={{ fontSize: "16px" }}>FAQs</Typography>
                                        <Box>
                                            <Typography className="text-bold ">
                                                Why is my UPI being saved on Flipkart?
                                            </Typography>
                                            <Typography>
                                                It's quicker. You can save the hassle of typing in the complete UPI information every time you shop at Flipkart by saving your UPI details. You can make your payment by selecting the saved UPI ID of your choice at checkout. While this is obviously faster, it is also very secure.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="text-bold ">
                                                Is it safe to save my UPI on Flipkart?
                                            </Typography>
                                            <Typography>
                                                Absolutely. Your UPI ID information is 100 percent safe with us. UPI ID details are non PCI compliant and are non confidential data.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="text-bold ">
                                                What all UPI information does Flipkart store?
                                            </Typography>
                                            <Typography>
                                                Flipkart only stores UPI ID and payment provider details. We do not store UPI PIN/MPIN.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="text-bold ">
                                                Can I delete my saved UPI?
                                            </Typography>
                                            <Typography>
                                                Yes, you can delete your UPI ID at any given time.
                                            </Typography>
                                        </Box>


                                        <Link className="text-bold mt-5" style={{ marginTop: "5rem" }}>View all FAQs</Link>



                                    </FAQsStyled>
                                </Box>



                            </ComponentBox>
                        </Grid>

                    </Grid>
                </Component>
            </Wrapper >
        </>

    )

}