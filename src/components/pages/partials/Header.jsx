import React, { Component } from 'react'
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import MoreProdNav from '../FilterProduct/MoreProdNav';
import SearchBox from "../SearchBox";







const StyledSearchBox = styled(Box)(({ theme }) => ({
    width: "90%",
    display: "none",
    marginInline:"auto",
    [theme.breakpoints.down("md")]: {
        display: "block",

    }

}))
export default function Header() {

    return (
        <>

            <AppBar className="fixed-top" style={{ backgroundColor: "#2874f0", height: "56px" }}>
                <Navbar2 />

                <Box className="mb-5">
                    <MoreProdNav />
                </Box>
            </AppBar>
            <Box style={{ marginBlock: "7rem" }}></Box>
            <StyledSearchBox className="mx-auto">
                <SearchBox />
            </StyledSearchBox>
            







        </>
    )
}