import { Box, styled, Grid, Typography, Link, List, ListItem, Checkbox, FormControlLabel } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link as routerLink } from "react-router-dom";

const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "block",
}))
const AddToCompare = styled(Grid)(({ theme }) => ({
    "span":{
        fontSize:"14px",
    }
}))
const CardStyled = styled(Grid)(({ theme }) => ({


}))
const RightComponent = styled(Grid)(({ theme }) => ({

}))
const Component = styled(Grid)(({ theme }) => ({

}))
const Wrapper = styled(Box)(({ theme }) => ({
    transition: "all .5s ease-in-out",
    marginBottom: "10px",
    ":hover": {
        boxShadow: "2px 2px 200px #DFE1E5",
    }
}))
const PriceComponent = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItem: "center",
    flexDirection: "column",
}))

const ProductDetail = styled(Box)(({ theme }) => ({
    "p": {
        fontSize: "14px",
    },
    "li": {
        paddingBlock: "2px !important",
    }
}))


export default function Card2() {
    const src = "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100";
    return <>
        <Wrapper className="p-2">

            <CardStyled sx={{ width: "250px" }}>
                <CardMedia
                    sx={{ height: 230 }}
                    image={src}
                // title="green iguana"
                />
                <CardContent >
                    <Box className="d-flex flex-direction-column gap-1">
                        <Typography variant="small" className="text-muted" style={{ fontSize: "12px" }}>Sponsored</Typography>
                        <Link to="" component={routerLink} style={{ fontSize: "14px" }}>Crucial 2 TB External Solid State Drive (SSD)</Link>
                        <Typography variant="small" style={{ fontSize: "12px" }}>Black</Typography>
                        <Box className="">
                            <Typography variant="span" className="px-1 py-1 border-rounded text-white text-bold" style={{ backgroundColor: "#008c00", fontSize: "12px", borderRadius: "3px" }}>4.4 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                            <Typography variant="span" className="text-muted mx-2 " style={{ fontSize: "15px" }}>(70)</Typography>
                        </Box>
                        <Box className="d-flex gap-2 align-item-center" >
                            <Typography variant="small" className="text-bold" style={{ fontSize: "18px" }}> ₹ 18,000</Typography>
                            <del style={{ fontSize: "14px" }} className="text-muted text-bold d-inline-block">₹ 17,998</del>
                            <Typography style={{ color: "green", fontSize: "13px" }} className="text-bold">22 % off</Typography>
                        </Box>
                        <Typography style={{ fontSize: "12px" }}>Free Delivery</Typography>
                        <Typography style={{ fontSize: "12px" }} className="text-danger text-bold">Only 1 left</Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <AddToCompare className="h-25">
                        <FormControlLabel control={<Checkbox size="small" />} label="Add to Compare" style={{ fontSize: "13px" }} />
                    </AddToCompare>
                </CardActions>

            </CardStyled>


        </Wrapper>
    </>
}