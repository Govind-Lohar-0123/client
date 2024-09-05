import DemoAll from "../Home/DemoAll";
import { Box, Link, Grid } from "@mui/material";
import Background from "../Home/Background";
import Slide from "../Home/Slide";

import { styled } from "@mui/material";
import MidSlide from "../Home/MidSlide";
import MidSection from "../Home/MidSection";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Slide2 from "../Home/Slides/Slide2";
import { Link as routerLink } from "react-router-dom"
import Slide3 from "../Home/Slides/Slide3";
import { imageURL } from "../Home/data";
import AdvertismentSlide1 from "../Home/Advertisment/Slide1";
import { AppBar } from "@mui/material";
import Navbar1 from "./Navbar1.jsx";
import Footer from "./Footer.jsx";
const Adver = styled(Box)`
   margin-top:1rem;
`


export default function Home() {
    const disptach = useDispatch();
    useEffect(() => {
        disptach(getProducts());
    }, [])
    const data = useSelector((state) => state.getProd);


    return (
        <>
            <AppBar className="fixed-top  p-3 px-4" style={{ backgroundColor: "white", height: "56px" }}><Navbar1 /></AppBar>
            <Box style={{ marginTop: "4.5rem" }} className="mx-2">
                <DemoAll />
                <Background />


                {data && data.loading == false && data.prod &&
                    <>
                        <MidSlide prod={data.prod[0]} time={false} />
                        <MidSection limit={{ start: 0, end: 2 }} />


                        {
                            data.prod.map((prod, ind) => {
                                return <Slide prod={prod} time={true} />
                            })
                        }
                        <MidSection limit={{ start: 3, end: 5 }} />
                        <AdvertismentSlide1 item={{ imgs: imageURL, title: "Feature Brands" }} />
                        {
                            data.prod.map((prod, ind) => {
                                return <Slide prod={prod} time={true} />
                            })
                        }
                        <Grid container lg={12}>
                            <Grid item lg={5} md={6} sm={6} xs={12}className="mx-auto mt-2">
                                <Slide2 prod={data.prod[1]} time={false} />
                            </Grid>
                            <Grid item lg={7} md={6} sm={6} xs={12} className="mx-auto mt-2">
                                <Box style={{ height: "100%" }} >
                                    <Link to="" component={routerLink}>
                                        <picture>
                                            <source srcset="https://rukminim1.flixcart.com/www/1070/770/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80 1x, https://rukminim1.flixcart.com/www/2140/1540/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=60 2x, " media="(min-width: 1192px)" />
                                            <source srcset="https://rukminim1.flixcart.com/www/660/480/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80 1x, https://rukminim1.flixcart.com/www/1320/960/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=60 2x, " media="(min-width: 768px) and (max-width: 1191px)" />
                                            <img src="https://rukminim1.flixcart.com/www/1070/770/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=90" loading="eager" alt="" srcSet="https://rukminim1.flixcart.com/www/320/230/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80 1x, https://rukminim1.flixcart.com/www/640/460/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=60 2x, " style={{ width: "100%", margin: "auto", display: "block", objectFit: "cover", opacity: 1, aspectRatio: 884 / 638 }} />
                                        </picture>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container >

                            <Grid item lg={3.8} md={5.8} sm={12} xs={12} className="mx-auto mt-4">
                                <Slide3 prod={data.prod[0]} time={false} />
                            </Grid>

                            <Grid item lg={3.8} md={5.8} sm={12} xs={12}className="mx-auto mt-4">
                                <Slide2 prod={data.prod[1]} time={false} />
                            </Grid>

                            <Grid item lg={3.8} md={12} sm={12} xs={12}className="mx-auto mt-4">
                                <Slide3 prod={data.prod[0]} time={false} />
                            </Grid>



                        </Grid>


                    </>
                }
            </Box>
            <Footer />
        </>
    )


}





