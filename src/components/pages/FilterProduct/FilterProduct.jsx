import { Box, Grid, Link, Typography } from "@mui/material";
import MoreProdNav from "./MoreProdNav";
import Filter from "./Filter";
import { Link as routerLink } from "react-router-dom";
import Products from "./Products";
import ReviewCard from "./Reviews/ReviewCard"
import { useEffect } from "react";
import { getProducts } from "../../react_redux/redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import ReviewSlide from "./Reviews/ReviewSlide";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../react_redux/redux/actions/productAction";

export default function FilterProduct() {
    const {cat_id}=useParams();
    const disptach = useDispatch();
    useEffect(() => {
        disptach(getProductsById(cat_id));
    }, [])
    const data = useSelector((state) => state.getProdById);
    
   
    return (
        <>
            {data && data.loading == false && data.prods &&
                <Box className="" >
                  
                    <Grid container lg={12} className="mt-2 justify-content-center">
                        <Grid item lg={2.2}>
                            <Filter />
                            <Box className="d-flex flex-direction-column gap-2 justify-content-center p-5 text-center">
                                <Typography>Need help ?</Typography>
                                <Link component={routerLink}><Box class="e1wDS3"></Box></Link>
                                <img alt="Buying Guide" className="px-4"src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/buying-guide-illustration_4dd325.png"></img>
                            </Box>
                        </Grid>
                        <Grid item lg={9.8}>
                            <Products prods={data.prods} />
                        </Grid>
                    </Grid>

                   <ReviewSlide data={data}/>

                </Box>
            }
        </>)
}