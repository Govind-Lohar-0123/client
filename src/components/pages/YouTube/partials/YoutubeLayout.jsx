import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../../partials/Footer";




export default function YoutubeLayout() {

    
    return (
        <>


            <Header />
            <Box className="mt-5">
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}