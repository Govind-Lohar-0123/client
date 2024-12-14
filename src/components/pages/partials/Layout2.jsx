import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header2 from "./Header2";
import Footer from "./Footer";




export default function Layout2() {
    return (
        <>

            <Header2 />
            <Box  style={{marginTop:"180px"}}>
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}