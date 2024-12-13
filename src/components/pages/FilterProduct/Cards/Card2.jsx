import { Box, styled, Grid, Typography, Link, List, ListItem, Checkbox, FormControlLabel } from "@mui/material";
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link as routerLink } from "react-router-dom";


const AddToCompare = styled(Grid)(({ theme }) => ({
    "span": {
        fontSize: "14px",
    }
}))
const CardStyled = styled(Grid)(({ theme }) => ({


}))

const Wrapper = styled(Box)(({ theme }) => ({
    transition: "all .5s ease-in-out",
    marginBottom: "10px",
    ":hover": {
        boxShadow: "2px 2px 20px 10px #DFE1E5",
        transform: "scale(1.1)"
    }
}))




export default function Card2({ prod }) {
    const src = "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100";
    return <>
        <Wrapper className="p-2 py-3">

            <CardStyled >

                <Box>
                    <img src={prod.url} className="d-block mx-auto p-4" alt="" height="250px" width="100%" />
                </Box>



                <CardContent >
                    <Box className="d-flex flex-direction-column gap-1">
                        <Typography variant="small" className="text-muted " style={{ fontSize: "14px", color: "#bdbdbd" }}>Sponsored</Typography>
                        <Link to="" className="text-dark" component={routerLink} style={{ fontSize: "14px" }}>{prod.content.title}</Link>
                        <Typography variant="small" style={{ fontSize: "12px" }}>{prod.content.clrTitle}</Typography>
                        <Box className="">
                            <Typography variant="span" className="px-1 py-1 border-rounded text-white text-bold" style={{ backgroundColor: "#008c00", fontSize: "12px", borderRadius: "3px" }}>4.4 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                            <Typography variant="span" className="text-muted mx-2 " style={{ fontSize: "15px" }}>(70,02,30)</Typography>
                        </Box>
                        <Box className="d-flex gap-2 align-item-center" >
                            <Typography variant="small" className="text-bold" style={{ fontSize: "18px" }}>{prod.content.price.sell_price}</Typography>
                            <del style={{ fontSize: "14px" }} className="text-muted text-bold d-inline-block"><del>{prod.content.price.org_price}</del></del>
                            <Typography style={{ color: "green", fontSize: "13px" }} className="text-bold">{prod.content.price.discount}</Typography>
                        </Box>
                        <Typography style={{ fontSize: "12px" }}>Free Delivery</Typography>
                        {/* <Typography style={{ fontSize: "12px" }} className="text-danger text-bold"></Typography> */}
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