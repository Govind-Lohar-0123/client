import { Box, styled, } from "@mui/material";
import React from "react";
import SearchBox from "../SearchBox";
import CustomeButton1 from "./CustomeButton1";
import DrawerComponent from "./DrawerComponent";

const Image = styled("img")(({ theme }) => ({
    width: "170px",

    height: "100%",
    display: "block",
    marginLeft: "-24px",
    [theme.breakpoints.down("md")]: {
        marginInline: "-50px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "125px",
    },

    objectFit: "contain",

}))
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
const RightComponent = styled(Box)(({ theme }) => ({
    width: "40%",

    [theme.breakpoints.down("md")]: {
        width: "80%",
        marginInline: "0",
        marginLeft: "20px"
    }


}))
const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "100%",
 marginInline:"10px",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("lg")]: {
        gap: "5px",
       
    }


}))
const Logo = styled(Box)(({ theme }) => ({
    padding: "10px",
    height: "100%",
    //   padding:"5px",
    marginRight: "30px",
}))
const StyledSearchBox = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
        display: "none ",
        
    }

}))





export default function Navbar1() {


    return (<>
        <Wrapper >
            <DrawerComponent />
            <LeftComponent>
                <Logo>
                    <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart" />
                </Logo>
                <StyledSearchBox className="">
                    <SearchBox />
                </StyledSearchBox>
            </LeftComponent>
            <RightComponent>
                <CustomeButton1 />
            </RightComponent>


        </Wrapper>
    </>)
}