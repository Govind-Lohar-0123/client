import { Box, Grid, Link, Typography, List, ListItem } from "@mui/material";
import MoreProdNav from "../../FilterProduct/MoreProdNav";
import Filters from "./Filters";
import { Link as routerLink } from "react-router-dom";


import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import OrderListCompo from "./OrdersListCompo";


export default function MyOrders() {


    return (
        <>


            <Box className="w-100 " marginTop="80px" >
                <Box className="mx-2 pt-4 ">
                    <Box className=" text-muted mt-3" style={{ fontSize: "12px" }} >
                        <List className="d-flex align-item-center gap-3 p-0 m-0" style={{ justifyContent: "flex-start" }}>
                            <ListItem className="px-0 py-0 w-auto"><Link to="/" component={routerLink} style={{ color: "#878787" }}>Home </Link></ListItem>
                            <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)", }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#ffg" ></path></svg></Link></ListItem>
                            <ListItem className="px-0  py-0 w-auto"><Link to="/account" component={routerLink} style={{ color: "#878787" }}>My Account</Link></ListItem>
                            <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)" }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#ffg" ></path></svg></Link></ListItem>

                            <ListItem className="px-0  py-0 w-auto"><Link to="/account/orders" component={routerLink} style={{ color: "#878787" }}>Orders</Link></ListItem>
                            <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)" }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#ffg" ></path></svg></Link></ListItem>

                            {/* <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787" }}> Search Results</Link></ListItem> */}
                        </List>
                    </Box>
                    <Grid container  className=" mt-2">
                        <Grid item lg={2.5} md={3} sm={5} className="mx-auto mb-4">
                            <Filters />
                        </Grid>
                        <Grid item lg={9} md={8} sm={10}style={{ marginInline: "auto" }}>
                            <OrderListCompo />
                        </Grid>
                    </Grid>



                </Box>
            </Box>

        </>)
}