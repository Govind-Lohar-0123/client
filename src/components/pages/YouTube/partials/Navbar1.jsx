import { Box, styled, Avatar } from "@mui/material";

import YouTubeLogo from "../../../img/YouTubeLogo.png"
import React from "react";
import SearchBox from "./SearchBox";

import { Link } from "react-router-dom";

import Badge from '@mui/material/Badge';





const LeftComponent = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "58%",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
        width: "90%",
    },
    [theme.breakpoints.down("md")]: {
        width: "40%",
    }


}))
const StyledBadge = styled(Badge)(({ theme }) => ({
    position: "absolute",
    top: 5,
    borderRadius: "22px", border: "2px solid #fff", width: "20px", height: "20px",
    textAlign: "center",
    fontSize: "12px",
    right: 65,
    paddingInline: "1px",
    background: "red",
    color: "white",
    fontWeight: "bold",





}));
const RightComponent = styled(Box)(({ theme }) => ({
    width: "40%",

    [theme.breakpoints.down("md")]: {
        width: "80%",
        marginInline: "0",
    }


}))
const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "100%",

    alignItems: "center",

    justifyContent: "space-between"

}))
const Logo = styled(Box)(({ theme }) => ({

    height: "50px",
    width: "100px"







}))
const MiddleComponent = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
        display: "none "
    }

}))





export default function Navbar() {




    return (<>
        <Wrapper className="mx-4">

            <LeftComponent>
                <Box >
                    <div style={{ position: "relative", width: "24px", height: "100%", display: "block", fill: "black" }}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: "none", display: "inherit", width: "100%", height: "100%" }}><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg></div>
                </Box>
                <Logo className="" style={{marginLeft:"10px"}}>
                    <img className="d-block w-100 h-100" src={YouTubeLogo} title="Flipkart" />
                </Logo>

            </LeftComponent>
            <MiddleComponent className="">
                <SearchBox />
            </MiddleComponent>
            <RightComponent >
                <Box className="d-flex gap-3 align-item-center " style={{ justifyContent: "flex-end" }}>
                    <Link >
                        <div style={{ width: "24px", height: "100%", display: "block", fill: "black" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" style={{ pointerEvents: "none", display: "inherit", width: "100%", height: "100%" }} viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg></div>
                    </Link>
                    <Link>
                        <StyledBadge variant="span" className="_2U7eDE">9+</StyledBadge>
                        <div style={{ position: "relative", width: "24px", height: "100%", display: "block", fill: "black" }}><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: "none", display: "inherit", width: "100%", height: "100%" }}><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg></div>
                    </Link>
                    <Avatar sx={{ backgroundColor: "#f01221", width: "30px", height: "30px" }}>G</Avatar>
                </Box>
            </RightComponent>


        </Wrapper>
    </>)
}