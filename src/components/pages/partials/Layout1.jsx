import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header1 from "./Header1";
import Footer from "./Footer";




export default function Layout1() {
    return (
        <>

            <Header1 />
            <Box style={{ marginTop: "100px" }}>
                <Outlet />
            </Box>
           
        </>
    )
}