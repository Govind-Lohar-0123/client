import { Box, Stack, Typography, Grid,styled, Button, typographyClasses, Divider, Link } from "@mui/material";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Card from "../../Home/Card";
import ProductTitle from "../../Home/Slides/ProductTitle";
import VideoCard from "./VideoCard";



const StyledCarousel = styled(Grid)(({ theme }) => ({
    
}))


const SlideContainer = styled(Box)`
    width:100%;
    min-height:58vh;
    

`



const VideoSlide = ({ prods, time, title }) => {



    return (

        <>
            <SlideContainer className="my-3 bg-white  " >

                {/* <Divider className="text-dark"/> */}
                <Box className="w-100 px-2 " >
                    <StyledCarousel container className="w-100 mx-auto" spacing={2}>
                        {

                            Array.from(new Array(20), (it, idx) => {
                                return <Grid item lg={3} md={4} sm={5}className="h-100 mx-auto"><VideoCard key={idx} /></Grid>
                            })


                        }


                    </StyledCarousel>
                </Box>
            </SlideContainer>
        </>


    )
}
export default VideoSlide;