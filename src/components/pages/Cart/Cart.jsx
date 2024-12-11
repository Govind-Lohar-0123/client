import { Box, styled, TextField, Grid, Typography, Button, Link, Table, } from "@mui/material"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import CardProd from "./CardProd";
import PriceDetail from "./PriceDetail";
import { Link as RouterLink } from "react-router-dom"
import ExtendedCart from "./Extended";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import { useState } from "react";
import { getAllCarts, removeFromCart } from "../../react_redux/redux/actions/cartAction";

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
    left: 390,
    cursor: "pointer"



}))
const CardWrapper = styled(Box)(({ theme }) => ({
    width: "95%",
    
    marginInline: "auto",
}))
const ButtonStyle = styled(Button)(({ theme }) => ({

    width: "33%", height: "60px", backgroundColor: "#fb641b",
    fontSize: "1.2rem",
    fontWeight: "bold",


}))
const PlaceOrder = styled(Button)(({ theme }) => ({
    justifyContent: "flex-end",
    position: "sticky",
    top: "64px",
    bottom: " 0",
    height: "100px",
    width:"50%",
    boxShadow: "0 -2px 10px 0 rgba(0, 0, 0, .1)",
    [theme.breakpoints.down("md")]:{
        "button":{width:"80%"}
    }

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
    width: "390px",
    height: "320px",
    boxShadow: 24,
    p: 4,
};;


const LeftComponent = styled(Grid)(({ theme }) => ({
    padding: "0 !important",
    border: "solid 1px rgb(225, 220, 220)",
    boxShadow: " rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
    
    // marginBottom: "100rem",

}))
const RightComponent = styled(Grid)(({ theme }) => ({

}))
const InputStyle = styled("input")(({ theme }) => ({
    padding: "4px",
    outline: "none",
    border: "none", fontSize: "14px",
    width: "80%",
    borderBottom: "2px solid rgba(133, 137, 143, 0.66)",

}))

export const Cart = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCarts());
    }, [])

    const data = useSelector((state) => state.cart)





    return (
        <>
            <CardWrapper className="mt-3">

                {
                    (data.status!=false && data.prods!=undefined && data.prods.length!=0)?
                
                <Grid container  lg={12}>
                    <LeftComponent item lg={8} md={7.5} sm={12} className="mx-auto mb-2" >
                        <Box className="p-3 d-flex flex-wrap bg-white justify-content-space-between align-items-center" >
                            <Typography style={{ fontSize: "14px" }}>From Saved Address</Typography>

                            <Button variant="outlined" onClick={handleOpen} className="text-bold" style={{
                                border: "1px solid rgb(224, 224, 224)",
                                backgroundColor: "rgb(255, 255, 255)",
                                borderRadius: "4px",
                                textTransform: "capitalize",
                                color: "rgb(40, 116, 240)", fontSize: "13px",
                                cursor: "pointer", fontWeight: 500
                            }}
                            >
                                Enter Delivery Pincode
                            </Button>



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

                                            <Typography className="text-bold ">Select Delivery Address</Typography>

                                            <Box className="d-flex gap-4 my-3 mt-4">
                                                <img src="https://rukminim1.flixcart.com/www/70/70/promos/19/07/2018/5810194b-8d7f-466f-a0f2-e3416d181f1f.png?q=90" />
                                                <Typography className=" ">No addresses found</Typography>
                                            </Box>
                                            <Typography className="text-bold "> Use pincode to check delivery info</Typography>
                                            <Box className="d-flex align-item-center gap-2 mt-4">
                                                <InputStyle type="text" className="text-dark" placeholder="Enter pincode" />

                                                <Button variant="contained" className="p-1 px-3" style={{
                                                    textTransform: "capitalize", background: "rgb(184, 187, 191)",
                                                    color: "rgb(255, 255, 255)",
                                                    cursor: "not-allowed"
                                                }}>Submit</Button>
                                            </Box>

                                            <Box className="mt-4" style={{ background: "url(https://rukminim1.flixcart.com/www/122/122/promos/21/06/2018/3bd082e2-af75-425a-834f-cb5100f35e3d.png?q=65) left no-repeat" }}>
                                                <img width="100" />
                                                <Link to="" ><span style={{ fontSize: "14px" }} className="text-bold">Use my current location</span></Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Fade>
                            </Modal>

                        </Box>
                        <Box className="mt-2 bg-white p-4">
                            {
                                (data != null && data.status &&
                                    data.prods.map((item, idx) => {

                                        return <>
                                            <CardProd key={idx} value={{ prod: item, showWar: true }} idx={idx} />
                                        </>


                                    })
                                )
                            }
                        </Box>
                        <PlaceOrder className="w-100 bg-white d-flex p-4">
                            <ButtonStyle variant="contained" size="large" ><Link component={RouterLink} className="text-white"> PLACE ORDER </Link></ButtonStyle>
                        </PlaceOrder>
                    </LeftComponent>
                    <RightComponent item lg={3.5} md={4.5} sm={6} className="mx-auto" >
                        <PriceDetail />

                        <Box style={{ marginLeft: "26px" }}>
                            <Box className="mt-4 mx-auto   " style={{ color: "rgb(135, 135, 135)", background: "url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg) 0px 50% / 25px 31px no-repeat" }}>
                                <Typography style={{ fontSize: "14px", marginLeft: "50px" }} className=" text-bold">Safe and Secure Payments.Easy returns.100% Authentic products.</Typography>
                            </Box>
                        </Box>
                    </RightComponent>
                </Grid>:<Box className="mx-auto ">
                    <Typography variant="h2" className="text-center">Card is empty</Typography>
                </Box>
}
            </CardWrapper >
        </>
    )
}