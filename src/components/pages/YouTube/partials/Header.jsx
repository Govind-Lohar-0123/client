import React, { Component } from 'react'
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Navbar1 from './Navbar1';










const StyledSearchBox = styled(Box)(({ theme }) => ({
    width: "90%",
    display: "none",
    marginInline: "auto",
    [theme.breakpoints.down("md")]: {
        display: "block",

    }

}))
export default function Header() {

    return (
        <>

            <AppBar className="fixed-top " style={{ backgroundColor: "white", height: "56px" }}>
                <Navbar1 />
            </AppBar>










        </>
    )
}