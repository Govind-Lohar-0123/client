import DemoAll from "../Home/DemoAll";
import { Box, Link, Grid, styled, Typography } from "@mui/material";
import Background from "../Home/Background";
import Slide1 from "../Home/Slides/Slide1.jsx"
import { CircularProgress } from "@mui/material";


import MidSlide from "../Home/MidSlide";
import MidSection from "../Home/MidSection";
import { useEffect } from "react";
import { getProducts } from "../../react_redux/redux/actions/productAction.js";
import { useDispatch, useSelector } from "react-redux";
import Slide2 from "../Home/Slides/Slide2";
import { Link as routerLink } from "react-router-dom"
import Slide3 from "../Home/Slides/Slide3";
import { imageURL } from "./data.js";
import AdvertismentSlide1 from "../Home/Advertisment/Slide1";
import { AppBar } from "@mui/material";
import Navbar1 from "./Navbar1.jsx";
import Footer from "./Footer.jsx";
import SearchBox from "../SearchBox.jsx";

import VideoSlide from "../YouTube/Slides/VideoSlide.jsx";



const StyledSearchBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block",
        position: "absolute",
        top: 87,
        width: "90%",
        right: 27,

    }

}))
export default function Home() {
    const disptach = useDispatch();

    useEffect(() => {
        disptach(getProducts());

    }, [])

    const data = useSelector((state) => state.getProd);


    return (
        <>
            
            
            <Box style={{ marginTop: "4.5rem" }} className="mx-2">
                <DemoAll />
                <Background />

                <marquee dir="right" className="p-2 py-4 mt-2 bg-primary text-white" ><h1>Shopping</h1></marquee>


                {(data.loading == true) ?

                    <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10, textAlign: "center" }}>
                        <CircularProgress color="inherit" />
                        <Typography className="text-bold text-muted">Loading</Typography>
                    </Box> :
                    data && data.loading == false && data.prod &&
                    <>
                        <MidSlide prods={data.prod} time={false} title="Best Of Electronics" />
                        <MidSection limit={{ start: 0, end: 2 }} />




                        <Slide1 prods={data.prod} time={true} title="Beauty , Food ,Toys & More" />
                        <MidSection limit={{ start: 3, end: 5 }} />
                        <AdvertismentSlide1 item={{ imgs: imageURL, title: "Feature Brands" }} />
                        <Slide1 prods={data.prod} time={true} title="Beauty" />
                        <Grid container >
                            <Grid item lg={5} md={6} sm={6} xs={12} className="mx-auto mt-2">
                                <Slide2 prods={data.prod} time={false} title="Beauty" />
                            </Grid>
                            <Grid item lg={7} md={6} sm={6} xs={12} className="mx-auto mt-2">
                                <Box style={{ height: "100%" }} >
                                    <Link to="" component={routerLink}>
                                        <picture>
                                            <source srcSet="https://rukminim1.flixcart.com/www/1070/770/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80 1x, https://rukminim1.flixcart.com/www/2140/1540/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=60 2x, " media="(min-width: 1192px)" />
                                            <source srcSet="https://rukminim1.flixcart.com/www/660/480/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80 1x, https://rukminim1.flixcart.com/www/1320/960/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=60 2x, " media="(min-width: 768px) and (max-width: 1191px)" />
                                            <img src="https://rukminim1.flixcart.com/www/1070/770/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=90" loading="eager" alt="" srcSet="https://rukminim1.flixcart.com/www/320/230/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80 1x, https://rukminim1.flixcart.com/www/640/460/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=60 2x, " style={{ width: "100%", margin: "auto", display: "block", objectFit: "cover", opacity: 1, aspectRatio: 884 / 638 }} />
                                        </picture>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container >

                            <Grid item lg={3.8} md={5.8} sm={12} xs={12} className="mx-auto mt-4">
                                <Slide3 prods={data.prod} time={false} title="Beauty" />
                            </Grid>

                            <Grid item lg={3.8} md={5.8} sm={12} xs={12} className="mx-auto mt-4">
                                <Slide2 prods={data.prod} time={false} title="Beauty" />
                            </Grid>

                            <Grid item lg={3.8} md={12} sm={12} xs={12} className="mx-auto mt-4">
                                <Slide3 prods={data.prod} time={false} title="Beauty" />
                            </Grid>
                        </Grid>
                        <marquee dir="right" className="p-2 py-4 mt-2 bg-primary text-white" ><h1>YouTube</h1></marquee>
                        {
                            Array.from(new Array(10), (item, idx) => {
                                return (
                                    <Slide1 key={idx} prods={data.prod} time={true} title="Beauty" />
                                )
                            })
                        }
                        <VideoSlide />



                    </>
                }
            </Box>
            <Box >
                <Footer />
            </Box>

        </>
    )


}





