import { Box, styled, TextField, Grid, Typography, Button, List, Link, Table, TableBody, TableCell, TableContainer, Paper, TableRow, ListItem } from "@mui/material"

import { Link as routerLink } from "react-router-dom"





const OrderBoxStyled = styled(Box)(({ theme }) => ({
    "&:hover": {
        boxShadow: "1px 1px 3px 1px #dbdbdb !important",
    },
    transition: "box-shadow .1s linear"
}))



export default function HelpOrderCard() {



    return (
        <>











            <OrderBoxStyled className="mt-2" style={{ padding: "16px 0", borderBottom: "1px solid #f0f0f0", cursor: "pointer" }}>

                <Link to="/order_details/1" component={routerLink} className="text-dark">
                    <Box style={{ marginLeft: "4%" }} >

                        <Box className="d-flex  gap-5 " >
                            <Link style={{ height: "75px", width: "75px" }}>
                                <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src="https://rukminim2.flixcart.com/image/200/200/xif0q/recharge-bill-payment/w/h/j/-original-imagqjnvmr86drxt.jpeg?q=90" />
                            </Link>
                            <Box  >
                                <Typography style={{ fontSize: "14px" }} >
                                    Vi Mobile Prepaid Recharge
                                </Typography>
                                <Box className="d-flex align-item-center gap-3 mt-2">
                                    <Box style={{ backgroundColor: "#26a541", height: "10px", width: "10px", borderRadius: "50%", border: "2px solid #26a541" }}></Box>
                                    <Typography className="" style={{ fontSize: "14px", color: "#878787" }}>Purchased</Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Link>
            </OrderBoxStyled>






        </>

    )

}