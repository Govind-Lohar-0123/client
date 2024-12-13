import { Box, styled, Divider, Link } from "@mui/material";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import ProductTitle from "../Home/Slides/ProductTitle";

import { Link as routerLink, useParams } from "react-router-dom"
import SimilarCard from "./SimilarCard";

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



const SimilarProdSlide = ({ prods, time, title }) => {



    return (

        <>

            <SlideContainer className="my-3 bg-white  " >
                <ProductTitle data={{ title: title, time: false }} />
                <Divider className="text-dark" />
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
                                return (<Link key={i} component={routerLink} to={"/filter-product/" + p._id}>
                                    <SimilarCard key={i} prod={p} />
                                </Link>)
                            })

                        }
                        <h1></h1>


                    </StyledCarousel>
                </Box>
            </SlideContainer>

        </>


    )
}
export default SimilarProdSlide;