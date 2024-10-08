import React, { useState } from "react";
import { Typography, styled, Box, Link, CardHeader, Avatar } from "@mui/material";
import { Link as routerLink } from "react-router-dom"
import v1 from "../../../videos/v1.mp4";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import cartoon from "../../../videos/cartoon.mp4";



const CartContent = styled(Box)({

})
const Cart = styled(Box)({
    ":hover": { cursor: "pointer" },
    display: "flex",
})
const CartMedian = styled("video")(({ theme }) => {

})


export default function VideoCard2({ prod, time }) {
    const [play, setPlay] = useState(false);


    return (

        <><Link component={routerLink} to="/detail-video" className="text-dark">
            <Cart className=" d-flex  mb-4 gap-2 border-rounded" style={{ borderRadius: "10px", width: "420px" }}>
                <CartMedian controls loop width="168px" height="94px" style={{ borderRadius: "14px" }} className="d-block " onMouseOut={() => setPlay(false)} onMouseOver={() => setPlay(true)}>
                    <source src={cartoon} className="w-100 h-100 d-block" />
                </CartMedian>

                <CartContent className="d-flex ">

                    <Box className="text-start ">
                        <Typography style={{ fontSize: "13px" }} className="text-bold ">Mock Low Level System Design Interview with Qualcomm Sr.</Typography>
                        <Typography style={{ fontSize: "13px" }} className="text-muted ">September 14, 2016</Typography>
                        <Box style={{ fontSize: "13px" }}>
                            <Typography variant="span" className="text-muted " >24K views </Typography>
                            <Typography variant="span" className="text-muted " >. 3 weeks ago</Typography>
                        </Box>

                    </Box>
                    <Box className="ml-auto p-0 m-0">
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    </Box>

                </CartContent>

            </Cart >

        </Link>

        </>
    )
}