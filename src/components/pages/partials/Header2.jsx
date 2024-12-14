import React from 'react'
import { AppBar, styled, Box } from "@mui/material"; import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import MoreProdNav from '../FilterProduct/MoreProdNav';
import SearchBox from "../SearchBox";







const StyledSearchBox = styled(Box)(({ theme }) => ({
    width: "90%",
    display: "none",
    marginInline: "auto",
    [theme.breakpoints.down("md")]: {
        display: "block",


    }

}))


export default function Header2() {

    return (
        <>

            <AppBar className="fixed-top " id="header" style={{ backgroundColor: "#2874f0", height: "56px" }}>
                <Navbar2 />

                <Box>
                    <MoreProdNav />
                </Box>
            </AppBar>

            <StyledSearchBox className="mx-auto">
                <SearchBox />
            </StyledSearchBox>








        </>
    )
}