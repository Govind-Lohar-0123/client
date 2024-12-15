import { Box, Grid, Link, Typography, styled } from "@mui/material";

import Filter from "./Filter";

import Products from "./Products";
import {CircularProgress} from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../react_redux/redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import ReviewSlide from "./Reviews/ReviewSlide";


const FilterComponent = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
        display: "none",
    }
}))

export default function FilterProduct() {

    const disptach = useDispatch();
    useEffect(() => {
        disptach(getProducts());
    }, [])

    const data = useSelector((state) => state.getProd);



    return (
        <>
            {(data && data.loading == false && data.prod) ?
                <Box className="mt-5" >

                    <Grid container className="mt-2 justify-content-center" lg={12}>
                        <Grid item lg={2.2}>
                            <FilterComponent>
                                <Filter />
                            </FilterComponent>
                            {/* <Box className="d-flex flex-direction-column gap-2 justify-content-center p-5 text-center">
                                <Typography>Need help ?</Typography>
                                <img alt="Buying Guide" className=" px-4" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/buying-guide-illustration_4dd325.png"></img>
                            </Box> */}
                        </Grid>
                        <Grid item lg={9.8} md={12} sm={12} xs={12}>
                            <Products />
                        </Grid>
                    </Grid>

                    <ReviewSlide prods={data.prod} />

                </Box>
                : <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10, textAlign: "center" }}>
                    <CircularProgress color="inherit" />
                    <Typography className="text-bold text-muted">Loading</Typography>
                </Box>
            }
        </>)
}