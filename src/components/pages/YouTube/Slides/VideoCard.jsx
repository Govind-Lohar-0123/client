import React, { useState } from "react";
import { Typography, styled, Box, Link, CardHeader, Avatar } from "@mui/material";
import { Link as routerLink } from "react-router-dom"
import v1 from "../../../videos/v1.mp4";
import cartoon from "../../../videos/cartoon.mp4";





const CartContent = styled(Box)({

})
const Cart = styled(Box)({
    ":hover": { cursor: "pointer" }
})
const CartMedian = styled("video")(({ theme }) => {

})


export default function VideoCard({ prod, time }) {
    const [play, setPlay] = useState(false);


    return (

        <><Link component={routerLink} to="/detail-video">
            <Cart className="text-center text-dark  mt-4 h-100 w-100 border-none" style={{ marginBottom: "20px" }} >
                <CartMedian muted autoPlay controls={(play) ? "controls" : ""} style={{ borderRadius: "14px" }} loop onMouseOut={() => setPlay(false)} className="w-100 h-100 d-block border-none" onMouseOver={() => setPlay(true)}>
                    <source src={cartoon} className="w-100 h-100 d-block" />
                </CartMedian>

                <CartContent className="d-flex align-item-center gap-3 py-2  px-3 border-none">
                    <Avatar sx={{ backgroundColor: "red" }}>G</Avatar>
                    <Box className="text-start">
                        <Typography style={{ fontSize: "1rem" }} className="text-bold ">Shrimp and Chorizo Paella</Typography>
                        <Typography style={{ fontSize: "15px" }} className="text-muted ">September 14, 2016</Typography>
                        <Box style={{ fontSize: "15px" }}>
                            <Typography variant="span" className="text-muted " >24K views </Typography>
                            <Typography variant="span" className="text-muted " >. 3 weeks ago</Typography>
                        </Box>

                    </Box>
                </CartContent>

            </Cart >

        </Link>

        </>
    )
}