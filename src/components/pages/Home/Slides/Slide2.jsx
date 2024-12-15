import { Box, Stack, Typography, styled, Button, typographyClasses, Divider, Grid } from "@mui/material";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Card from "../Card";
import ProductTitle from "../Slides/ProductTitle";



const StyledCarousel = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
        ">div": {
            display: "block !important",

        }
    }
}))

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const SlideContainer = styled(Box)(({ theme }) => ({

    height: "100%",
    [theme.breakpoints.down("md")]:{
        ".cart":{
            width:"280px!important",
            marginInline:"auto",
        }
    }
}))








const Slide2 = ({ prods, time ,title}) => {
   


    return (

        <>
            <SlideContainer className=" bg-white  ">
                <ProductTitle data={{ title, time }} />
                {/* <Divider className="text-dark"/> */}
                <StyledCarousel className="px-2 " >
                    <Carousel
                        responsive={responsive} dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px" swipeable={false}
                        draggable={false}
                        showDots={false}
                        // infinite={true}
                        // autoPlay={true}
                        // autoPlaySpeed={2000}
                        containerClass="carousel-container"
                        keyBoardControl={true}
                    >

                        <Grid container  spacing={1}>
                            <Grid item lg={6} md={10} sm={10} xs={10} className="mx-auto"><Card key={1} prod={prods[1]} /></Grid>
                            <Grid item lg={6} md={10} sm={10} xs={10} className="mx-auto"><Card key={2} prod={prods[0]} /></Grid>
                            <Grid item lg={6} md={10} sm={10} xs={10} className="mx-auto"><Card key={3} prod={prods[0]} /></Grid>
                            <Grid item lg={6} md={10} sm={10} xs={10} className="mx-auto"><Card key={4} prod={prods[1]} /></Grid>
                        </Grid> 


                    </Carousel>
                </StyledCarousel>
            </SlideContainer>
        </>


    )
}
export default Slide2;