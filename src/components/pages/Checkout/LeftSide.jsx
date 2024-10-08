import { useSelector } from "react-redux"
import { Box, Grid, styled, Typography, Button, Link, TextField } from "@mui/material";
import { Link as routerLink } from "react-router-dom";
import Login from "./Login";
import DeliveryAddress from "./DeliveryAddress";


const Wrapper = styled(Box)(({ theme }) => ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
    gap: "20px",

    "> div": {
        width: "100%",

        backgroundColor: "white",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.2) ",

    }

}))
const Count = styled(Typography)(({ theme }) => ({
    color: "#2874f0",
    backgroundColor: "#f0f0f0",
    padding: "0 7px",
    fontSize: "0.9rem",
    borderRadius: "10%",
    textWeight: "bold",
    textAlign: "center",
    boxShadow: "0 0 2px white",

}))


const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "2%",
}))

const StepStyle = styled(Box)(({ theme }) => ({
    width: "100%",


    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "12px",
    paddingLeft: "30px",

}))

export default function LeftSide() {



    return (
        <>
            <Wrapper>
                <Box className="bg-white">
                    {/* <StepStyle style={{ backgroundColor: "#2874f0" }}>
                        <Count component="span" >1</Count>
                       
                    </StepStyle> */}
                    <StepStyle >
                        <Count component="span" >1</Count>
                         {/* <Typography component="span" style={{ fontSize: "1.1rem" }} className="text-bold text-white">LOGIN OR SIGNUP</Typography> */}
                        <Box className="d-flex justify-content-space-between w-100 ">
                            <Box>
                                <Typography className="text-muted text-bold">Login <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#2974f0"></path></svg></Typography>
                                <Typography style={{fontSize:"14px"}} className="my-1"><Typography variant="span" className="text-dark text-bold " >Govind Lohar</Typography> +9109024482</Typography>
                            </Box>
                            <Button variant="outlined" className=" text-bold mt-1" style={{height:"40px",width:"18%"}} ><Link to="" component={routerLink} > CHANGE </Link></Button>
                        </Box>
                    </StepStyle>
                   <Login/>

                </Box>
                <Box>
                    <StepStyle style={{background:"#2874f0"}} >
                        <Count component="span" >2</Count>
                        <Typography component="span" style={{ fontSize: "1.1rem" }} className="text-bold text-white">DELIVERY ADDRESS</Typography>
                    </StepStyle>
                    <DeliveryAddress/>
                </Box>
                <Box>
                    <StepStyle >
                        <Count component="span" >3</Count>
                        <Typography component="span" style={{ fontSize: "1.1rem" }} className="text-bold text-muted">ORDER SUMMARY</Typography>
                    </StepStyle>
                </Box>
                <Box>
                    <StepStyle >
                        <Count component="span">4</Count>
                        <Typography component="span" style={{ fontSize: "1.1rem" }} className="text-bold text-muted">PAYMENT OPTIONS</Typography>
                    </StepStyle>
                </Box>
            </Wrapper>
        </>
    )
}