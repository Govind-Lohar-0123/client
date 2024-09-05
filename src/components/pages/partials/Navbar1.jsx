import { Box, styled, } from "@mui/material";


import React from "react";
import SearchBox from "../SearchBox";
import CustomeButton from "./CustomeButton";

import DrawerComponent from "./DrawerList";

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
    }


}))
const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "100%",

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
        position: "absolute",
        top: 87,
        width: "90%",
        right: 27,

    }

}))





export default function Navbar() {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';



    return (<>
        <Wrapper  >
            <DrawerComponent />
            <LeftComponent>
                <Logo>
                    <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart" />
                </Logo>
                <StyledSearchBox>
                    <SearchBox />
                </StyledSearchBox>
            </LeftComponent>
            <RightComponent>
                <CustomeButton />
            </RightComponent>


        </Wrapper>
    </>)
}