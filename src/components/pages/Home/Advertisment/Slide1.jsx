import { Box, Stack, Typography, styled, Button,Grid,Link, typographyClasses, Divider } from "@mui/material";
import {Link as routerLink} from "react-router-dom";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


import AdvertimentTitle from "./AdvertimentTitle";



const Image = styled("img")(({ theme }) => ({
    width:"100%",
    height:"214px",
    display:"block",
}))
const StyledCarousel = styled(Carousel)(({ theme }) => ({
    "ul": {
        gap: "20px",
        width:"100%",
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
    object-fit:cover;
    

`



const AdvertismentSlide1 = ({ item }) => {
    const { imgs, title } = item;


    return (

        <>
            <SlideContainer className="my-3 bg-white  " >
                <AdvertimentTitle title={title} />
                {/* <Divider className="text-dark"/> */}
                <Box className="w-100 px-auto " >
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
                        <Grid container className="p-2 gap-2 mx-auto" >
                            {
                                imgs.map((url, i) => {
                                    return (
                                     <Grid key={i} item lg={3.8} md={3.8} sm={5.5} className="mx-auto" style={{marginBottom:"15px"}}><Link component={routerLink} className="w-100 h-100"><Image src={url} /></Link></Grid>
                                    )
                                })

                            }


                        </Grid>



                    </StyledCarousel>
                </Box>
            </SlideContainer>
        </>


    )
}
export default AdvertismentSlide1;