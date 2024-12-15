import { Box, styled } from "@mui/material";
import React from "react";
import SearchBox from "../SearchBox";
import DrawerComponent from "./DrawerComponent";
import CustomeButton2 from "./CustomeButton2";




const LeftComponent = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "60%",

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
        width: "100%",
        marginInline: "0",

    }


}))
const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "100%",
    marginRight: "100px",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    [theme.breakpoints.down("lg")]: {
        gap: "10px",
        marginRight: "25px"
    }


}))
const Logo = styled(Box)(({ theme }) => ({

    height: "100%",
    //   padding:"5px",
    "img":{ width: "100px"},

    marginInline: "auto",
    ">div": {
        display: "flex",
        flexDirection: "column",

    }
    ,
    [theme.breakpoints.down("md")]: {
        marginInline: "auto",
        "img": {
            
        }
    },
    [theme.breakpoints.down("sm")]: {
        "img": {
            width:"85px"
        }
       
    }




}))
const StyledSearchBox = styled(Box)(({ theme }) => ({
    width: "68%",
    [theme.breakpoints.down("md")]: {
        display: "none"
    }

}))







export default function Navbar2() {





    return (<>
        <Wrapper  >
            <Box style={{ marginLeft: "15px" }}>
                <DrawerComponent />
            </Box>
            <LeftComponent className="gap-5">
                <Logo >
                    <div className="text-center mx-0 text-center">
                        <a href="/" >
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" className="W5mR4e" />
                        </a>
                        <a className="MwbhDR text-white d-flex gap-1 text-bold align-items-center" href="/plus" style={{ fontSize: "10px" }}>
                            <span className="text-bold">Explore</span>
                            <span className="s4NJ5L text-bold" style={{ color: "#ffe500" }}>Plus</span>
                            <img className="d-block " style={{ width: "10px" }} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
                        </a>
                    </div>
                </Logo>
                <StyledSearchBox>
                    <SearchBox />
                </StyledSearchBox>
            </LeftComponent>
            <RightComponent>
                <CustomeButton2 />
            </RightComponent>


        </Wrapper>
    </>)
}