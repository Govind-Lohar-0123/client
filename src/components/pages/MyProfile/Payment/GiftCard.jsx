import { Box, styled, TextField, Grid, Typography, Button, List, Link, Table, TableBody, TableCell, TableContainer, Paper, TableRow, ListItem } from "@mui/material"

import { useState } from "react";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { Link as routerLink } from "react-router-dom"
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';




const FAQsStyled = styled(Box)(({ theme }) => ({
    "p": {
        fontSize: "13px", marginBlock: "20px"
    },
    "a": { fontSize: "13px", fontWeight: "bold" }


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



export default function GiftCard() {

    const [open, setOpen] = useState({ type: false, isSet: false });
    const [toggle, setToggle] = useState(true);

    const handleClose = () => setOpen({ type: false, isSet: false });

    return (
        <><Box className="p-4">

            <Box className="d-flex gap-4 align-item-center justify-content-space-between">
                <Typography className="text-bold" style={{ fontSize: "19px" }} >Flipkart Gift Card</Typography>
                <Box className="d-flex gap-4 align-item-center text-bold" style={{ fontSize: "13px" }}>
                    <a href="#buygiftcard" style={{ color: "#2874f0", }} >Buy a Gift Card</a>
                    <Link to="" component={routerLink} style={{ color: "#2874f0" }} onClick={() => setOpen({ isSet: true, type: false })}>Check Gift Card Balance</Link>
                </Box>
            </Box>



            <Box className="p-4 px-4 mt-3 text-center" style={{ width: "100%", height: "500px", background: "linear-gradient(104deg, #34e062, #26bc4e)" }}>
                <Box className="d-flex gap-4 mx-3">

                    <img className="d-block " width="55px" height="55px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/gift-box_c4b7bb.svg" />
                    <Box className="d-flex align-item-center w-100 justify-content-space-between" style={{ alignSelf: "baseline" }}>
                        <Typography style={{ fontSize: "17px", fontWeight: "bold" }} className="text-white ">5 ACTIVE GIFT CARD</Typography>
                        <Typography style={{ fontSize: "27px" }} className="text-white " >₹50</Typography>
                    </Box>


                </Box>
                <TableContainer component={Paper} className="mt-4 border-none">
                    <TableStyle sx={{ minWidth: 650 }} aria-label="simple table" className="border-none">

                        <TableBody>
                            {
                                Array.from(new Array(5), () => {
                                    return (
                                        <>
                                            <TableRow>
                                                <TableCell style={{ verticalAlign: "baseline" }}><Typography>Recived from</Typography></TableCell>
                                                <TableCell align="" >
                                                    <Box className=" w-75" style={{ marginLeft: "auto" }}>
                                                        <Typography>Gift Card No.</Typography>
                                                        <Typography>6000170415705351</Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="">
                                                    <Box className="" style={{ marginLeft: "auto" }}>
                                                        <Typography>Expires</Typography>
                                                        <Typography>18th, Jun 2025</Typography>
                                                    </Box>
                                                </TableCell>

                                                <TableCell align="right" className="text-bold" style={{ color: "black", fontSize: "20px" }}>₹10</TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })
                            }




                        </TableBody>
                    </TableStyle>
                </TableContainer>
            </Box>

            <div className="mt-3 px-4" onClick={() => setOpen({ isSet: true, type: true })} style={{
                borderRadius: "2px",
                color: "#2874f0",
                padding: "20px 0",
                fontSize: "14px",
                cursor: "pointer",
                fontWeight: "bold",
                border: "1px solid #e0e0e0"
            }}>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTc1RkYiIGQ9Ik0xMS4yNSA2Ljc1aC00LjV2NC41aC0xLjV2LTQuNUguNzV2LTEuNWg0LjVWLjc1aDEuNXY0LjVoNC41Ii8+PHBhdGggZD0iTS0zLTNoMTh2MThILTMiLz48L2c+PC9zdmc+" height="14" width="14" />
                <span className="mx-3">ADD A GIFT CARD</span>
            </div>





            <div>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open.isSet}
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

                        {
                            (open.type == true) ?


                                <Box sx={style} >
                                    <CloseIconStyle onClick={handleClose}><CloseIcon /></CloseIconStyle>
                                    <Box className="px-2 py-2">
                                        <Box>
                                            <Typography className="text-bold ">Add a Gift Card</Typography>
                                            <Typography variant="small" style={{ fontSize: "14px" }}>Gift Card number & PIN are sent to your email inbox
                                            </Typography>

                                        </Box>
                                        <Box className="mt-4 w-100">
                                            <Box className="w-100">
                                                <TextField id="outlined-basic" label="Gift Card Number *" variant="outlined" className="w-100" />
                                            </Box>
                                            <Box className="mt-3 w-100 h-75">
                                                <TextField className="w-100" height="" id="outlined-basic" label="PIN *" variant="outlined" />
                                            </Box>
                                        </Box>
                                        <Button className="text-bold p-3 px-4 w-100 mt-3" style={{ backgroundColor: " #2370f4" }} variant="contained" size="large">ADD GIFT CARD TO ACCOUNT</Button>
                                    </Box>
                                </Box>
                                :
                                <Box sx={style} >
                                    <CloseIconStyle onClick={handleClose}><CloseIcon /></CloseIconStyle>
                                    <Box className="px-2 py-2">
                                        <Box>
                                            <Typography className="text-bold ">Check Gift Card Balance</Typography>


                                        </Box>
                                        <Box className="mt-4 w-100">
                                            <Box className="w-100">
                                                <TextField id="outlined-basic" label="Gift Card Number *" variant="outlined" className="w-100" />
                                            </Box>
                                            <Box className="mt-3 w-100 h-75">
                                                <TextField className="w-100" height="" id="outlined-basic" label="PIN *" variant="outlined" />
                                            </Box>
                                        </Box>
                                        <Button className="text-bold p-3 px-4 w-100 mt-3" style={{ backgroundColor: " #2370f4" }} variant="contained" size="large">CHECK GIFT CARD BALANCE</Button>
                                    </Box>
                                </Box>

                        }
                    </Fade>
                </Modal>
            </div>
            <Box className="mt-5 " id="buygiftcard">
                <Box className="d-flex my-2 gap-4 align-item-center justify-content-space-between">
                    <Typography className="text-bold my-3" style={{ fontSize: "19px" }} >Buy a Flipkart Gift Card</Typography>
                    <Box className="d-flex gap-4 align-item-center text-bold" style={{ fontSize: "13px" }}>
                        <Link to="" component={routerLink} style={{ color: "#878787", fontStyle: "italic", fontSize: "12px" }}>issued by</Link>
                        <Link to="" component={routerLink} ><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/qwikcilver_c036f3.png" height="14" /></Link>
                    </Box>
                </Box>
                <Box style={{
                    borderRadius: "2px",

                    width: "100%",


                    fontSize: "14px",
                    cursor: "pointer",

                    border: "1px solid #e0e0e0"
                }}>
                    <Box className="px-4 ">
                        <Box className="d-flex align-item-center gap-5" fontSize="14px" >
                            <Typography variant="span" className="py-3" borderBottom={(toggle) ? "solid 4px blue" : " "} onClick={() => setToggle(true)}>PERSONAL GIFT CARDS</Typography>
                            <Typography variant="span" className="py-3" borderBottom={(toggle == false) ? "solid 4px blue" : " "} onClick={() => setToggle(false)}>CORPORATE REQUIREMENTS</Typography>
                        </Box>
                    </Box>
                    <hr className="p-0 m-0" />
                    {
                        (toggle == false) ? <Box className="px-4 py-4" style={{ backgroundColor: "#f5faff" }}>
                            <Typography style={{ fontSize: "13px" }} className="text-bold">Buy Flipkart Gift Cards for Businesses</Typography>
                            <Grid container spacing={2} className="mt-2">
                                <Grid item lg={5} >
                                    <Box className="w-100 bg-white" >
                                        <TextField id="outlined-basic" label="First Name*" variant="outlined" className="w-100" />
                                    </Box>
                                </Grid>
                                <Grid item lg={5}>
                                    <Box className="w-100 bg-white">
                                        <TextField id="outlined-basic" label="Last Name (Optional) *" variant="outlined" className="w-100" />
                                    </Box>
                                </Grid>
                                <Grid item lg={5}>
                                    <Box className="w-100 bg-white">
                                        <TextField id="outlined-basic" label="Mobile Number *" variant="outlined" className="w-100" />
                                    </Box>
                                </Grid>
                                <Grid item lg={5}>
                                    <Box className="w-100 bg-white">
                                        <TextField id="outlined-basic" label="Email ID *" variant="outlined" className="w-100" />
                                    </Box>
                                </Grid>
                                <Grid item lg={5}>
                                    <Box className="w-100 bg-white">
                                        <TextField id="outlined-basic" label="Location* --None--" variant="outlined" className="w-100" />
                                    </Box>
                                </Grid>
                                <Grid item lg={5}>
                                    <Box className="w-100 bg-white">
                                        <TextField id="outlined-basic" label="Company Name" variant="outlined" className="w-100" />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box className="my-4">
                                <Typography style={{ fontSize: "13px" }} className="text-bold my-1">Need Help?</Typography>
                                <Typography style={{ fontSize: "11px" }} className="my-1">Have Flipkart Gift Card related queries ? <span className="text-bold text-primary">Contact Us</span></Typography>
                                <Typography style={{ fontSize: "11px" }}>Bulk sale enquiries can be send to  <span className="text-bold text-primary"> egvmarketing@flipkart.com</span></Typography>
                            </Box>
                        </Box>
                            :
                            <Box className="px-4 py-4" style={{ backgroundColor: "#f5faff" }}>
                                <Grid container>
                                    <Grid item lg={5.5} >
                                        <Box className="d-flex flex-direction-column gap-4">
                                            <TextField id="outlined-basic" label="Receiver`s Email ID *" variant="outlined" className="w-100" />
                                            <TextField id="outlined-basic" label="Receiver`s Name*" variant="outlined" className="w-100" />
                                            <Box> <TextField id="outlined-basic" label="Card Value  ₹*" variant="outlined" className="w-100" />
                                                <select required="" name="voucher-value[]" tabindex="3" fdprocessedid="jm8xj"><option value="">Select</option><option value="100">100</option><option value=" 101"> 101</option><option value=" 300"> 300</option><option value=" 500"> 500</option><option value=" 1000"> 1000</option><option value=" 2000"> 2000</option><option value=" 2500"> 2500</option><option value=" 5000"> 5000</option><option value=" 6000"> 6000</option><option value=" 7000"> 7000</option><option value=" 8000"> 8000</option><option value=" 9000"> 9000</option><option value=" 10000"> 10000</option></select>
                                            </Box>
                                            <TextField id="outlined-basic" label="Gifter`s Name (Optional) *" variant="outlined" className="w-100" />
                                            <TextField id="outlined-basic" label="Write a message (Optional,100 Characters) *" variant="outlined" className="w-100" />


                                            <div className=" px-4" onClick={() => setOpen({ isSet: true, type: true })} style={{

                                                color: "#2874f0",

                                                fontSize: "13px",
                                                cursor: "pointer",
                                                fontWeight: "bold",

                                            }}>
                                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTc1RkYiIGQ9Ik0xMS4yNSA2Ljc1aC00LjV2NC41aC0xLjV2LTQuNUguNzV2LTEuNWg0LjVWLjc1aDEuNXY0LjVoNC41Ii8+PHBhdGggZD0iTS0zLTNoMTh2MThILTMiLz48L2c+PC9zdmc+" height="14" width="14" />
                                                <span className="mx-3">Buy Another Gift Card</span>
                                            </div>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} marginLeft="auto">
                                        <Box>
                                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/giftcard_509752.png" />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                    }






                </Box>
                {
                    (toggle == false) ? <Button style={{ backgroundColor: "#fb641b" }} className="p-3 px-5 mt-4 text-bold text-white">SUBMIT DETAILS</Button>
                        : <Button style={{ backgroundColor: "#fb641b" }} className="p-3 px-5 mt-4 text-bold text-white">BUY GIFT CARD  ₹ 0</Button>

                }

            </Box>

            <FAQsStyled className="mt-5">
                <Typography className="text-bold" style={{ fontSize: "16px" }}>FAQs</Typography>
                <Box>
                    <Typography className="text-bold ">
                        How do I buy / gift a Flipkart Gift Card?
                    </Typography>
                    <ul style={{ listStyle: "disc" }} className="mx-3" >
                        <li>
                            <Typography className="my-1">
                                Enter the name and email address of the person you want to send the Flipkart Gift Card to.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="my-1">
                                Select the value of the card you would like to purchase, then click 'Proceed To Pay'.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="my-1">
                                You'll now see the payment options. You can pay by Credit Card / Debit Card / ATM Card / Netbanking. Proceed to pay using your preferred choice. If you need to make any changes to the Gift Card value, you can always click 'Edit' to modify it.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="my-1">
                                Complete the checkout process to receive an email with the Gift Card details.
                            </Typography>
                        </li>
                    </ul>
                </Box>
                <Box className="my-1">
                    <Typography className="text-bold ">
                        How do I buy / gift a Flipkart Gift Card?
                    </Typography>
                    <ul style={{ listStyle: "disc" }} className="mx-3" >
                        <li>
                            <Typography className="my-1">
                                Enter the name and email address of the person you want to send the Flipkart Gift Card to.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="my-1">
                                Select the value of the card you would like to purchase, then click 'Proceed To Pay'.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="my-1">
                                You'll now see the payment options. You can pay by Credit Card / Debit Card / ATM Card / Netbanking. Proceed to pay using your preferred choice. If you need to make any changes to the Gift Card value, you can always click 'Edit' to modify it.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="my-1">
                                Complete the checkout process to receive an email with the Gift Card details.
                            </Typography>
                        </li>
                    </ul>
                </Box>



                <Link className="text-bold mt-5" style={{ marginTop: "5rem" }}>View all FAQs</Link>



            </FAQsStyled>

            <FAQsStyled className="mt-5">
                <Typography className="text-bold" style={{ fontSize: "16px" }}>Terms & Conditions</Typography>
                <Box className="mx-3" >

                    <ul style={{ listStyle: "disc" }}>
                        <li >
                            <Typography className="my-1">
                                Enter the name and email address of the person you want to send the Flipkart Gift Card to.
                            </Typography>
                        </li>
                        <li >
                            <Typography className="my-1">
                                Select the value of the card you would like to purchase, then click 'Proceed To Pay'.
                            </Typography>
                        </li>
                        <li >
                            <Typography className="my-1">
                                You'll now see the payment options. You can pay by Credit Card / Debit Card / ATM Card / Netbanking. Proceed to pay using your preferred choice. If you need to make any changes to the Gift Card value, you can always click 'Edit' to modify it.
                            </Typography>
                        </li>
                        <li >
                            <Typography className="my-1">
                                Complete the checkout process to receive an email with the Gift Card details.
                            </Typography>
                        </li>
                    </ul>
                </Box>



                <Link className="text-bold mt-5" style={{ marginTop: "5rem" }}>View all FAQs</Link>



            </FAQsStyled>
        </Box>



        </>

    )

}