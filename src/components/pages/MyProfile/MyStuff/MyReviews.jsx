
import { Box, Grid, Button, Link, styled, Typography, List, ListItem } from "@mui/material";
import { Link as routerLink } from "react-router-dom";
import Filters from "../MyOrders/Filters";
import NavList from "../NavList";
import Dashboard from "../Dashboard";

const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "#f5f7fa !important",
    width: "100%",
    height: "100%",

}))
const Component = styled(Grid)(({ theme }) => ({
    width: "80%",

    marginInline: "auto",

}))
export default function MyReviews() {
    const arr = ["Home", "My Account", "Orders", "Search Results"];

    return (

        <>







            <Wrapper className="mt-2">

                <Component className="mt-4">

                    <Grid container lg={12}>
                        <Grid item lg={3} >
                            <Dashboard />
                        </Grid>

                        <Grid item lg={8.86} style={{ backgroundColor: "white", marginLeft: "auto", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)" }}>
                            <Box>

                                <Box className="mt-3 bg-white d-flex flex-direction-column justify-content-center align-item-center" style={{ width: "100%", height: "80vh" }}>
                                    <Box className="text-center" style={{ fontSize: "14px" }}>
                                        <Box>
                                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myReviewsEmpty_343559.png" />
                                        </Box>
                                        <Typography className="text-bold my-2 mt-4 " style={{ fontSize: "18px" }}>No Reviews & Ratings</Typography>
                                        <Typography className="text-muted" style={{ fontSize: "14px" }}>You have not rated or reviewed any product yet!</Typography>

                                    </Box>
                                </Box>

                            </Box>
                        </Grid>

                    </Grid>
                </Component>
            </Wrapper>








        </>
    )
}