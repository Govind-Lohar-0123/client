import { Box, Grid, Link, Typography, List, ListItem } from "@mui/material";
import MoreProdNav from "../../FilterProduct/MoreProdNav";
import Filters from "./Filters";
import { Link as routerLink } from "react-router-dom";


import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import OrderListCompo from "./OrdersListCompo";


export default function MyAccount() {
    const arr = ["Home", "My Account", "Orders", "Search Results"];

    return (
        <>


            <Box className="w-100 " >
                <Box className="mx-3 pt-4 ">
                    <Box>
                        <NavList items={arr} />
                    </Box>
                    <Grid container lg={12} className="gap-2 mt-2">
                        <Grid item lg={2}>
                            <Filters />
                        </Grid>
                        <Grid item lg={9.8} style={{ marginInline: "auto" }}>
                           
                        </Grid>
                    </Grid>



                </Box>
            </Box>

        </>)
}