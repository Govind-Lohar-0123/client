import { styled ,Box,Grid, Typography, Button,Link} from "@mui/material"
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";


import PriceDetail from "./PriceDetail";
import {Link as RouterLink} from "react-router-dom"

import LeftSide from "./LeftSide";
const CardWrapper=styled(Box)(({theme})=>({
    
    marginTop:"6rem",
    
    width:"90%",
    marginInline:"auto",
   
}))

const ButtonStyle = styled(Button)(({ theme }) => ({
   
    width:"33%",height:"60px", backgroundColor: "#fb641b" ,
    fontSize:"1.2rem",
    fontWeight:"bold",
   
   
}))


 

const LeftComponent=styled(Grid)(({theme})=>({
    
    marginBottom:"100rem",
  
}))
const RightComponent=styled(Grid)(({theme})=>({

}))

 const Checkout=()=>{
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const data=useSelector((state)=>state.cart);
  
    return (
        <>
            <CardWrapper>
                <Grid container  >
                    <LeftComponent item lg={8} md={8}  >
                        <LeftSide/>
                    </LeftComponent>
                    <RightComponent item lg={4} md={4} >
                        <PriceDetail />
                        <Box colSpan={2} className="my-4 mx-auto px-4 ">
                            <img src={adURL} style={{width:399}}/>
                        </Box>
                        <Box className=" mx-auto px-4 ">
                            <Typography className="text-muted text-bold">Safe and Secure Payments.Easy returns.100% Authentic products.</Typography>
                        </Box>
                    </RightComponent>
                </Grid>
            </CardWrapper>
        </>
    )
}

export default Checkout;