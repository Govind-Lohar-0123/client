// import { Box, styled, Typography,Grid, Link } from "@mui/material";
import { Box, styled, Typography, Grid, TextField, Link, Button } from "@mui/material";
import { useParams } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductDetails } from "../../react_redux/redux/actions/productAction";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetail";



import CommonProdComponent from "./CommonProdComponent";
// ---------------COMMON COMPONENT CSS------------
const Container = styled(Grid)(({ theme }) => ({
    backgroundColor: "white",


    [theme.breakpoints.down("md")]: {
        padding: "20px",
    }
}))
const DetailWrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    marginInline: "auto",
    [theme.breakpoints.down("md")]: {
        width: "100%",


    }

}))
const RightComponent = styled(Grid)(({ theme }) => ({
    paddingInline: "15px",
    position: "relative",
    
}))
const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingInline: "15px",
    marginBottom: "20px",

    [theme.breakpoints.down()]: {

    }
}))





const DetailView = () => {
    const { prod_id } = useParams();
    const disptach = useDispatch();
    useEffect(() => {
        disptach(getProductDetails(prod_id));
    }, [])

    const data = useSelector((state) => state.getProdDetail);

    return (
        <>
            <Box className=" mt-1 mx-auto" style={{ width: "90%" }}>

                {((data.loading == false && data.prod)) &&


                    <DetailWrapper className="mt-1">

                        <Container container className="pt-4 " spacing={0}>
                            <LeftComponent item lg={4.8} md={4} sm={12} xs={12} >
                                <ActionItem url={data.prod.prod.url} prod={data.prod} />
                            </LeftComponent>
                            <RightComponent item lg={7.2} md={8} sm={12} xs={12} style={{ height: "85vh", overflowY: "scroll" }}>

                                <ProductDetails content={data.prod.prod.content} />
                            </RightComponent>

                        </Container>
                        <Box className="mt-5">
                            <CommonProdComponent />
                        </Box>
                    </DetailWrapper>
                }
            </Box>

        </>

    )
}
export default DetailView;
