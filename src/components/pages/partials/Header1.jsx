import React from 'react'
import { AppBar, styled, Box } from "@mui/material"; 
import Navbar1 from './Navbar1';

import SearchBox from "../SearchBox";







const StyledSearchBox = styled(Box)(({ theme }) => ({
    width: "90%",
    display: "none",
    marginInline: "auto",
    [theme.breakpoints.down("md")]: {
        display: "block",
        ">div":{
            top:"80px"
        }


    }

}))

export default function Header1() {

    return (
        <>

            <AppBar className="fixed-top " id="header" style={{ backgroundColor: "white", height: "56px" }}>
                <Navbar1 />
            </AppBar>

            <StyledSearchBox className="mx-auto">
                <SearchBox />
            </StyledSearchBox>








        </>
    )
}