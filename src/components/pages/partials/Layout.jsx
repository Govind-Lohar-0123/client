import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";




export default function Layout() {
    return (
        <>

            <Header />
            <Box >
            <Outlet />
            </Box>
            <Footer />
        </>
    )
}