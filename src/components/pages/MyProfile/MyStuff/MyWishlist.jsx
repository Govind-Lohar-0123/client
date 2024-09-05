import { Box, styled, TextField, Grid, Typography, Button, List, Link, Table, TableBody, TableCell, TableContainer, Paper, TableRow, ListItem } from "@mui/material"
import Dashboard from "../Dashboard";
import Input from "@mui/material"
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link as routerLink } from "react-router-dom"
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import FormLabel from '@mui/material/FormLabel';
import CouponsCard from "./CouponsCard";
import WishlistCard from "./WishlistCard";

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
const TableStyle = styled(Table)(({ theme }) => ({
    "td p:first-child": {
        color: "#878787",
        fontSize: "10px !important",
        fontWeight: "bold",
    },
    "td p:last-child": {

        fontSize: "14px",

    }
}))
const CloseIconStyle = styled(Table)(({ theme }) => ({
    "svg": {
        // color:"white",
        color: "white",
        height: "40px"
        , width: "40px",
        fontWeight: "0"
    },
    position: 'absolute',
    top: -5,
    left: 420,
    cursor: "pointer"



}))
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,

    backgroundColor: "white",
    outline: "none",
    borderRadius: "5px",
    width: "420px",
    height: "350px",
    boxShadow: 24,
    p: 4,
};;

const PriceComponent = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "15px",
    alignItems: "center",

}))
const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "contain"
}))
export default function MyWishlist() {



    const Wrapper = styled(Box)(({ theme }) => ({
        backgroundColor: "#f5f7fa !important",
        width: "100%",
        height: "100%",

    }))
    return (
        <>

            <Wrapper className="mt-2">

                <Component className="mt-4">

                    <Grid container lg={12} >
                        <Grid item lg={3} >
                            <Dashboard />
                        </Grid>



                        <Grid item lg={8.86} style={{ backgroundColor: "white", height: "100%", marginLeft: "auto", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)" }}>
                            <ComponentBox className="" style={{

                            }}>
                                <Box className="p-4 ">

                                    <Box className="d-flex gap-4 align-item-center mb-4">
                                        <Typography className="text-bold" style={{ fontSize: "18px" }} >My Coupons (2)</Typography>

                                    </Box>
                                    <WishlistCard />
                                    <WishlistCard />
                                    <WishlistCard />
                                    <WishlistCard />
                                </Box>



                            </ComponentBox>
                        </Grid>

                    </Grid>
                </Component >
            </Wrapper >
        </>

    )

}