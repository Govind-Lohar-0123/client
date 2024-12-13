import { Box, styled, TextField, Grid, Typography, Button, List, Link, Table, TableBody, TableCell, TableContainer, Paper, TableRow, ListItem } from "@mui/material"

import { Link as routerLink } from "react-router-dom"
import HelpOrderCard from "./HelpOrderCard"
import { useState } from "react"



const OrderBoxStyled = styled(Box)(({ theme }) => ({
    "&:hover": {
        boxShadow: "1px 1px 3px 1px #dbdbdb !important",
    },
    transition: "box-shadow .1s linear"
}))
const ListStyle = styled(List)(({ theme }) => ({
    "a": {
        fontSize: "13px"
    }
    ,
    "li": {
        padding: "12px"
    }
}))
const Component = styled(Box)(({ theme }) => ({

    width: "100%",
    height: "100%",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",


    marginInline: "auto"

}))
const LeftComponent=styled(Box)(({theme})=>({

}))

export default function HelpCare() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <>

            <Box className="mt-2 mx-auto" style={{ width: "90%" }}>

                <Box className="mt-4 mx-2">

                    <Typography style={{ fontSize: "17px" }} className="text-bold"> Flipkart Help Center | 24x7 Customer Care Support</Typography>
                    <Typography style={{ fontSize: "12px", color: "rgb(135, 135, 135)", fontFamily: "Inter, -apple-system, Helvetica, Arial, sans-serif" }} className=" mt-2">The Flipkart Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Flipkart Help Centre also lists out more information that you may need regarding Flipkart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Flipkart Help Centre number or even access Flipkart Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on 23-Aug-24

                    </Typography>

                </Box >

                <Component className="mx-auto">

                    <Grid container  className=" mt-2">
                        <Grid item lg={3} md={4} sm={10}className="mx-auto mb-3" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                            <LeftComponent >
                                <ListStyle className="mb-2" style={{ padding: "22px 16px 0 32px" }}>
                                    <Typography className="text-bold" style={{ fontSize: "12px", color: "#212121" }} >TYPE OF ISSUE</Typography>
                                    <List>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Help with your issues</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Help with your order</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Help with other issues</Link></ListItem>
                                    </List>
                                </ListStyle>
                                <hr />
                                <Box className="mb-2" style={{ padding: "22px 16px 0 32px" }}>
                                    <Typography className="text-bold" style={{ fontSize: "13px", color: "#212121" }}>Help Topics</Typography>
                                    <ListStyle>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Delivery related</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Login and my account</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Flipkart Pay Later</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Payment</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Bajaj Finserv EMI</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>EMI / Pre-approved loan</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Credit Card No Cost EMI</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Flipkart Axis Bank Credit Card</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Returns & Pickup related</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Return related</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Return related</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Return related</Link></ListItem>
                                        <ListItem><Link to="" className="text-dark" component={routerLink}>Return related</Link></ListItem>
                                    </ListStyle>
                                </Box>
                            </LeftComponent>





                        </Grid>


                        <Grid item lg={8.7} md={7.8} sm={10}style={{ marginInline: "auto" }} >
                            <Box>
                                <Box className="bg-white p-3 px-4 " style={{ color: "#878787", backgroundColor: "#fff", borderRadius: "2px", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)" }}>
                                    <Typography style={{ fontSize: "12px", }} className="text-bold">Help Centre</Typography>
                                </Box>

                                <Box className="mt-4 py-3" style={{ backgroundColor: "#fff", borderRadius: "2px", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)" }}>
                                    <Typography className="px-4 " style={{ fontSize: "18px", }}>Which item are you facing an issue with?</Typography>

                                    <Box >
                                        {
                                            Array.from(new Array(5), (item, idx) => {
                                                return (
                                                    <>
                                                        <HelpOrderCard />
                                                    </>
                                                )
                                            })
                                        }
                                        <Button onClick={handleOpen} className="p-3 text-center  w-100" style={{ display: (open) ? "none" : "block", border: " 1px solid #e0e0e0" }}>VIEW MORE </Button>
                                    </Box >
                                    <Box className="mt-4" style={{ display: (open) ? "block" : "none" }} >
                                        {
                                            Array.from(new Array(5), (item, idx) => {
                                                return (
                                                    <>
                                                        <HelpOrderCard />
                                                    </>
                                                )
                                            })
                                        }
                                    </Box>



                                </Box>
                            </Box>

                        </Grid>
                    </Grid>


                </Component>



            </Box >
        </>

    )

}