import { Box, Stack, Typography, styled, Button, typographyClasses, Divider, Link } from "@mui/material";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Card from "../Card";
import ProductTitle from "./ProductTitle";



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
        breakpoint: { max: 6000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
const SlideContainer = styled(Box)`
    width:100%;
    min-height:58vh;
    

`



const Slide1 = ({ prods, time, title }) => {



    return (

        <>
            <SlideContainer className="my-3 bg-white  " >
                <ProductTitle data={{ title: title, time }} />
                {/* <Divider className="text-dark"/> */}
                <Box className="w-100 px-2 " >
                    <StyledCarousel className="w-100"
                        responsive={responsive} dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px" swipeable={false}
                        draggable={false}
                        showDots={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={15000}
                        containerClass="carousel-container"
                        keyBoardControl={true}
                    >
                        {
                            prods.map((p, i) => {
                                return (
                                    <Card key={i} prod={p} />
                                )
                            })

                        }


                    </StyledCarousel>
                </Box>
            </SlideContainer>
        </>


    )
}
export default Slide1;