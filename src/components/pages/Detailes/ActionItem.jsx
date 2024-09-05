import { Box, styled, Grid, Button, List, ListItem } from "@mui/material"
import { ShoppingCart as Card, FlashOn as Flash } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux"
import { addToDB, getAllCarts } from "../../react_redux/redux/actions/cartAction";
import { useParams } from "react-router-dom";
import { useReducer } from 'react';
import Carousel from "./Carousel";
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
const CarouselComponent = styled(Box)(({ theme }) => ({
    width: "70px",

    "li": {
        widht: "64px !important", height: "64px !important",
        border: "1px solid #f0f0f0",
        padding: 5
    },
    "img": {
        display: "block",
        ObjectFit: "contain",
        height: "100%",
        widht: "100%",
        margin: "auto !important"

    },
    "li>div": {
        width: "100%", height: "100%",


    },
    ".carousel-btn > button": {
        display: "block",
        // position: "absolute";
        width: " 100%",
        height: "24px",
        // left: 0;
        textAlign: "center",
        padding: "0px",

        verticalAlign: "middle",
        boxShadow: "0 0 10px -1px rgba(0, 0, 0, .3)",
        backgroundColor: "hsla(0, 0%, 100%, .98) !important",
        cursor: "pointer",
        border: "1px solid #f0f0f0",
        position: "absolute",
        "svg": { transform: "rotate(90deg)" },


    },
    "ul": {
        height:"95%",
        overflow: "hidden",
    },

    "button:first-child": {
        top: 0
    },
    "button:last-child": {
        bottom: 0
    },
    position: "relative"

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
        paddingBlock: ".8rem"
    },
    [theme.breakpoints.down("md")]: {
        width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    }
}))
const BigImage = styled("Box")(({ theme }) => ({

    width: "100%",
    height: "100%",
    minWidth: "85%",
    border: "solid 1px #f0f0f0",
    padding: "10px",
    verticalAlign: "center",
    textAlign: "center",
    ">img": {
        width: "77%",
        height: "100%",
        marginInline: "auto",
    }
}))
const SmallImages = styled("Box")(({ theme }) => ({

    width: "100%",
    maxHeight: "100%",

    // maxHeight:"12.7%",
    ">img": {
        border: "solid 1px #f0f0f0",
        maxHeight: "12.7%",
        ObjectFit: "cover"
    }

}))
const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "block"
}))

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function ActionItem({ url, prod }) {

    const dispatch = useDispatch();



    return (<>

        <LeftComponent className="d-flex gap-2  justify-content-space-evenly">



           
                
                  <Carousel/>
               
            <BigImage>
                <img src={url} className="d-block"></img>
                <ButtonStyle className="mt-4 ">
                    <Button variant="contained" size="large" className="bg-white text-bold" onClick={() => {
                        dispatch(addToDB(prod));
                    }}
                        style={{ color: "#878787" }}><Card /> ADD TO CARD</Button>
                    <Button variant="contained" size="large" className="text-bold" style={{ backgroundColor: "#878787" }}><Flash /> BUY NOW </Button>
                </ButtonStyle>
            </BigImage>

        </LeftComponent >

    </>)
}