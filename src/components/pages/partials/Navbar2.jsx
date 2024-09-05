import {  Box, styled} from "@mui/material";


import React from "react";
import SearchBox from "../SearchBox";

import DrawerComponent from "./DrawerList";
import CustomeButton2 from "./CustomeButton2";

const Image = styled("img")(({ theme }) => ({
    width: "170px",

    height: "100%",
    display: "block",
    marginLeft: "-24px",
    [theme.breakpoints.down("md")]: {
        marginInline: "-50px",
    },

    objectFit: "contain",

}))



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
        width: "80%",
        marginInline: "0",
    }


}))
const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "100%",
    marginRight:"100px",
    alignItems: "center",
    justifyContent:"center",
    gap: "20px",
    [theme.breakpoints.down("lg")]: {
        gap: "5px",
    }


}))
const Logo = styled(Box)(({ theme }) => ({
    padding: "10px",
    height: "100%",
    //   padding:"5px",
    
    marginLeft:"auto",
    ">div": {
        display: "flex",
        flexDirection: "column",

    }




}))
const StyledSearchBox = styled(Box)(({ theme }) => ({
    width: "70%",
    [theme.breakpoints.down("md")]: {
        position: "absolute",
        top: 87,
        width: "90%",
        right: 27,

    }

}))





export default function Navbar2() {

   



    return (<>
        <Wrapper  >
            <DrawerComponent />
            <LeftComponent>
                <Logo>
                    <div className="F9+fd2 ">
                        <a href="/">
                            <img width="65" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" className="W5mR4e" />
                        </a>
                        <a className="MwbhDR text-white d-flex gap-1 text-bold align-items-center" href="/plus" style={{ fontSize: "10px" }}>
                            <span className="text-bold">Explore</span>
                            <span className="s4NJ5L text-bold" style={{color: "#ffe500"}}>Plus</span>
                            <img width="10" height="12"src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
                        </a>
                    </div>
                </Logo>
                <StyledSearchBox>
                    <SearchBox />
                </StyledSearchBox>
            </LeftComponent>
            <RightComponent>
               <CustomeButton2/>
            </RightComponent>


        </Wrapper>
    </>)
}