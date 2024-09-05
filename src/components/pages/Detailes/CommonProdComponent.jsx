import { Box, Stack, Typography, styled, Button, typographyClasses, Divider, Link } from "@mui/material";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// import Card from "./Card";
import { useEffect } from "react";
import { getProducts } from "../../react_redux/redux/actions/productAction";
import ProductTitle from "../Home/Slides/ProductTitle";
import { useDispatch, useSelector } from "react-redux";

import SimilarProdSlide from "./SimilarProdSlide";

const StyledCarousel = styled(Carousel)(({ theme }) => ({
    "ul": {
        gap: "20px",
    },
    "li": {
        width: "190px!important",
    }
}))

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};
const SlideContainer = styled(Box)`
    width:100%;
    min-height:58vh;
    

`



const CommonProdComponent = () => {

    const disptach = useDispatch();
    useEffect(() => {
        disptach(getProducts());
    }, [])
    const data = useSelector((state) => state.getProd);

    return (

        <>
            {data && data.loading == false && data.prod &&
                // data.prod.map((prod, ind) => {
                    <>
                    <SimilarProdSlide prod={data.prod[0]} time={true} title="Similar Products" />
                    <SimilarProdSlide prod={data.prod[0]} time={true} title="Both Together"/>
                    <SimilarProdSlide prod={data.prod[0]} time={true} title="Recently Viewed"/>
                   
                    </>
                // })
                

            }
        </>


    )
}
export default CommonProdComponent;


