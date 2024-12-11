



import { Box, styled, Grid, Typography, Button, List, Link, Table, TableBody, TableCell, TableContainer, Paper, TableRow, ListItem } from "@mui/material"
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Slider from '@mui/material/Slider';

import Backdrop from '@mui/material/Backdrop';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Link as routerLink } from "react-router-dom"
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
const QuestionMark = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    backgroundColor: "#fff",
    color: "#878787",
    fontWeight: 500,
    width: "16px",
    height: "16px",
    fonSize: "11px",
    lineHeight: "16px",
    textAlign: "center",
    display: "inlineBlock",
    border: "1px solid #e0e0e0",
    boxShadow: "0 0 1px 0 rgba(0, 0, 0, .2)",
    verticalAlign: "middle",
    margin: " 0 2px 0 8px",
    cursor: "pointer"
}))
const TransDetails = styled(Grid)(({ theme }) => ({
    "p": {
        paddingBlock: "3px",
        fontSize: "11px",
    }
}))
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',


    backgroundColor: "white",
    outline: "none",
    borderRadius: "5px",
    width: "420px",

    boxShadow: 24,

};;
const ListStyle = styled(List)(({ theme }) => ({
    "li": { borderBottom: "1px solid #e0e0e0 !important", padding: "20px" },
}))

const RightComponent = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {


        "div": { width: "100%!important", paddingInline: "5px" }

    }
}))
export default function OrderDetails() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const arr = ["Home", "My Account", "My Order", "OD331415795331962300"];
    return (

        <>
            <Box style={{ width: "90%", marginTop: "120px" }} className="mx-auto">
                <Box>
                    <Box className=" ">
                        <Box className=" text-muted mt-3" style={{ fontSize: "12px" }} >
                            <List className="d-flex flex-wrap align-item-center gap-3 p-0 m-0" style={{ justifyContent: "flex-start" }}>
                                <ListItem className="px-0 py-0 w-auto" ><Link to="/" component={routerLink} style={{ color: "#878787" }}>Home</Link></ListItem>
                                <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)", }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#ffg" ></path></svg></Link></ListItem>
                                <ListItem className="px-0 py-0 w-auto" ><Link to="/account" component={routerLink} style={{ color: "#878787" }}>My Account</Link></ListItem>
                                <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)", }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#ffg" ></path></svg></Link></ListItem>
                                <ListItem className="px-0 py-0 w-auto" ><Link to="/account/orders" component={routerLink} style={{ color: "#878787" }}>My Orders</Link></ListItem>
                                <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)", }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#ffg" ></path></svg></Link></ListItem>
                                <ListItem className="px-0 py-0 w-auto" ><Link style={{ color: "#878787" }}>OD331415795331962300</Link></ListItem>










                            </List>
                        </Box>
                    </Box>
                </Box>

                <Box className="bg-white mt-2 p-4 " style={{ boxShadow: " 0px 2px 4px 0px rgba(0, 0, 0, .08)" }} >
                    <Typography className="text-bold" style={{ fontSize: "15px" }}>Your Rewards</Typography>
                    <Box className="d-flex gap-3 align-item-center my-4" >
                        <Link >
                            <img style={{ display: "flex", width: "24px", height: "24px" }} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/lockinEarlyAccess_e0bd6e.png" ></img>
                        </Link>
                        <Link to="/supercoins" component={routerLink} className="text-dark">
                            <Box >
                                <Typography style={{ fontSize: "14px" }} >₹15 Saved Using SuperCoins</Typography>
                                <Typography style={{ color: " #878787", fontSize: "12px" }}>15 coins paid</Typography>
                            </Box>
                        </Link>
                    </Box>
                </Box>

                <Box className="mt-3 bg-white py-3 " style={{ borderRadius: "4px", border: "1px solid #dbdbdb", boxShadow: " 0px 2px 4px 0px rgba(0, 0, 0, .08)" }}>

                    <Box style={{ marginLeft: "4%" }} >
                        <Grid container >
                            <Grid item lg={3} md={3} sm={10}>
                                <Box className="d-flex gap-3 " >
                                    <Link style={{ height: "75px", width: "75px" }}>
                                        <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src="https://rukminim2.flixcart.com/image/200/200/xif0q/recharge-bill-payment/w/h/j/-original-imagqjnvmr86drxt.jpeg?q=90" />
                                    </Link>
                                    <Box >
                                        <Typography style={{ fontSize: "14px" }} >Mobile Prepaid Recharge</Typography>
                                        <Box className="mt-2" style={{ color: " #878787", fontSize: "12px" }}><span className="mx-2">9xxxxx1239</span></Box>
                                        <Box className="d-flex align-item-center gap-2 text-bold mt-2">
                                            <span className="text-bold">₹140</span>
                                            <Box className="d-flex align-item-center">
                                                <span> + </span>
                                                <Modal
                                                    aria-labelledby="transition-modal-title"
                                                    aria-describedby="transition-modal-description"
                                                    open={open}
                                                    onClose={handleClose}
                                                    closeAfterTransition
                                                    slots={{ backdrop: Backdrop }}
                                                    slotProps={{
                                                        backdrop: {
                                                            timeout: 500,
                                                        },
                                                    }}
                                                >
                                                    <Fade in={open} style={{ position: "relative" }}>

                                                        <Box sx={style} >
                                                            <CloseIconStyle onClick={handleClose}><CloseIcon /></CloseIconStyle>
                                                            <Box className="">
                                                                <Box>
                                                                    <ListStyle>
                                                                        <ListItem className="text-bold">Price details</ListItem>
                                                                        <ListItem className="d-flex justify-content-space-between">
                                                                            <Typography >Selling Price</Typography>
                                                                            <Typography >₹155</Typography>
                                                                        </ListItem>
                                                                        <ListItem className="d-flex text-bold justify-content-space-between">
                                                                            <Typography variant="span">Price</Typography>
                                                                            <Typography variant="span">₹140</Typography>
                                                                        </ListItem>
                                                                        <ListItem className="" style={{ fontSize: "13px" }}>Flipkart UPI, SuperCoins: ₹155.0</ListItem>

                                                                    </ListStyle>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Fade>
                                                </Modal>
                                                <img style={{ height: "16px" }} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/lockinCoinNew_79b3fb.svg" />

                                            </Box>
                                            <span>15</span>
                                            <QuestionMark style={{ fontSize: "12px" }} onClick={handleOpen}>?</QuestionMark>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <RightComponent item lg={9} md={9} sm={12}>
                                <Box className="d-flex  gap-2 mt-3 flex-wrap">


                                    <Box style={{ fontSize: "12px", fontWeight: "bold", width: "60%" }}>
                                        <Box className="d-flex justify-content-space-between " style={{ alignItems: "flex-end" }}>
                                            <Typography variant="span" style={{ color: "#26a541", }}>Payment successful</Typography>
                                            <Typography variant="span" className="text-center" style={{ color: "#26a541", display: "inline-block", width: "115px" }}>Recharge processed</Typography>

                                        </Box>
                                        <Box width="80%" className="my-1" style={{ marginInline: "auto" }}>
                                            <Slider
                                                getAriaLabel={() => 'Temperature range'}

                                                style={{ color: "#26a541" }}

                                                valueLabelDisplay="auto"

                                            />
                                        </Box>
                                        <Box className="d-flex justify-content-space-between">
                                            <Typography variant="span" style={{ color: "#878787" }}>Sun, 2nd Jun</Typography>
                                            <Typography variant="span">Sun, 2nd Jun</Typography>

                                        </Box>
                                        <Box className="_1L+CJ0 eRsKER" style={{
                                            left: "0%", width: 0,
                                            height: 0,
                                            position: "absolute",
                                            borderLeft: " 9px solid transparent",
                                            borderRight: "9px solid transparent",
                                            borderBottom: "9px solid #e0e0e0",
                                            top: " 16px",
                                            transform: "translateX(-3px)"

                                        }}></Box>
                                        <Box width="80%" style={{ marginInline: "auto" }}>
                                            <Typography style={{ fontSize: "12px" }} className="text-bold">Your payment is successful</Typography>
                                            <Box className="my-1 d-flex align-item-center justify-content-space-between">
                                                <Typography style={{ fontSize: "10px" }}>Sun, 2nd Jun</Typography>
                                                <Typography style={{ fontSize: "10px" }}>10:01 am</Typography>
                                                <Typography style={{ fontSize: "10px" }}>Your payment is successful</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Link className="d-flex align-item-center gap-2">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTknIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiPgoJPGcgZmlsbD0nbm9uZSc+CgkJPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjMjg3NEYxIiBwb2ludHM9IjkgMTIuMDYyNSAxMy42Mzc1IDE1LjQzNzUgMTEuODYyNSA5Ljk4NzUgMTYuNSA2LjY4NzUgMTAuODEyNSA2LjY4NzUgOSAxLjA2MjUgNy4xODc1IDYuNjg3NSAxLjUgNi42ODc1IDYuMTM3NSA5Ljk4NzUgNC4zNjI1IDE1LjQzNzUiIC8+CgkJPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjAgMCAxOCAwIDE4IDE4IDAgMTgiIC8+Cgk8L2c+Cjwvc3ZnPg==" />
                                            <Typography style={{ fontSize: "13px", color: "#2874f0" }} className="text-bold">Rate &amp; Review Product</Typography>

                                        </Link>

                                        <Link className="d-flex align-item-center gap-2 my-2">
                                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/chatWithUs_69d373.svg" />

                                            <Typography style={{ fontSize: "13px", color: "#2874f0" }} className="text-bold"> Chat with us</Typography>
                                        </Link>

                                    </Box>
                                </Box>

                            </RightComponent>

                        </Grid>
                    </Box>

                </Box>

                <TransDetails className="bg-white mt-3 p-4 " style={{ boxShadow: " 0px 2px 4px 0px rgba(0, 0, 0, .08)" }} >
                    <Typography className="text-bold" style={{ fontSize: "15px" }}>Your Rewards</Typography>
                    <Grid container className="mt-2">
                        <Grid item lg={3} md={6} sm={6} xs={10} className="mb-2 mx-auto">
                            <Box>
                                <Typography className="" style={{ color: " #878787" }}>Transaction ID</Typography>
                                <Typography className="" style={{ fontSize: "12px" }}> HGADP152F10796167784</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6} xs={10} className="mb-2 mx-auto">
                            <Box>
                                <Typography className="" style={{ color: " #878787" }}>Source Reference Number</Typography>
                                <Typography className="" style={{ fontSize: "12px" }}> 331415795331962300000</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={6}sm={6} xs={10} className="mb-2 mx-auto">
                            <Box>
                                <Typography className="" style={{ color: " #878787" }}>Approval Reference Number</Typography>
                                <Typography className="" style={{ fontSize: "12px" }}> ONR2406021001150387</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={6}sm={6} xs={10}className="mb-2 mx-auto">
                            <Box>
                                <Typography className="" style={{ color: " #878787" }}>Biller Name</Typography>
                                <Typography className="" style={{ fontSize: "12px" }}> Vi Prepaid</Typography>

                            </Box>
                        </Grid>
                        <Grid item lg={3} md={6}sm={6} xs={10}className="mb-2 mx-auto">
                            <Box>
                                <Typography className="" style={{ color: " #878787" }}>Biller ID</Typography>
                                <Typography className="" style={{ fontSize: "12px" }}>VILPRE</Typography>
                            </Box>
                        </Grid >
                        <Grid item lg={3} md={6} sm={6} xs={10}className="mb-2 mx-auto">
                            <Box>
                                <Typography className="" style={{ color: " #878787" }}>

                                    Transaction Date & Time</Typography>
                                <Typography className="" style={{ fontSize: "12px" }}> 02-06-2024 10:01:36</Typography>
                            </Box>
                        </Grid>
                    </Grid >
                </TransDetails >



            </Box >
        </>
    )
}