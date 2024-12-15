import { Box, styled, Grid, Button, List, ListItem } from "@mui/material"
import { ShoppingCart as Card, FlashOn as Flash } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux"
import { addToCart, getAllCarts } from "../../react_redux/redux/actions/cartAction";
import { useState } from "react";
import Carousel from "./Carousel";
import { getCookie } from "../auth/cookieAction";
import v1 from "../../videos/v1.mp4";
import { useNavigate } from "react-router-dom";
import { clientUrl } from "../partials/data";
// ---------------LEFT COMPONENT CSS------------
const LeftComponent = styled(Grid)(({ theme }) => ({
    width: "100%",

    height: "65vh",
    marginInline: "auto",
    [theme.breakpoints.down("md")]: {
        width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    }

}))


const ButtonStyle = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center!important",
    gap: "5px",
    margin: "auto",
    ">button": {
        borderRadius: "0px",
        width: "100%",
        // paddingBlock: ".8rem"
        whiteSpace: "nowrap",
        fontSize: "12px",
        padding: "10px"
    },

}))
const BigImage = styled("Box")(({ theme }) => ({

    width: "100%",
    height: "100%",
    minWidth: "85%",
    border: "solid 1px #f0f0f0",
    padding: "10px",
    verticalAlign: "center",
    textAlign: "center",


}))

let token = getCookie("token");

export default function ActionItem({ url, prod }) {
    const [{ src, isImg }, setUrl] = useState({ src: url, isImg: true });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addToCartHandle = () => {
        if ( token == null || token == undefined)
            navigate(`${clientUrl}/login`);

        dispatch(addToCart(prod));
    }


    return (<>

        <LeftComponent className="d-flex gap-2  justify-content-space-evenly mb-5">
            <Carousel setUrl={setUrl} url={url} />

            <BigImage style={{ zIndex: 100 }}>

                {
                    (isImg == true) ?
                        <img src={src} className="h-100 w-100 d-block" alt="" />
                        :
                        <video className="h-100 w-100 d-block" controls autoPlay loop><source src={v1} /></video>

                }


                <ButtonStyle className="mt-4 ">
                    <Button variant="contained" size="large" className="bg-white text-bold" onClick={addToCartHandle} style={{ color: "#878787" }}><Card /> ADD TO CARD</Button>
                    <Button variant="contained" size="large" className="text-bold" style={{ backgroundColor: "#878787" }}><Flash /> BUY NOW </Button>
                </ButtonStyle>
            </BigImage>

        </LeftComponent >

    </>)
}

