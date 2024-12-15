import { Box, styled, Grid, Typography, Link, List, ListItem, Checkbox, FormControlLabel } from "@mui/material";
import * as React from 'react';
import CardComp from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link as routerLink } from "react-router-dom";






const Wrapper = styled(Box)(({ theme }) => ({
    transition: "all .5s ease-in-out",
    marginBottom: "10px",
    width: "210px",
    ":hover": {
        boxShadow: "2px 2px 20px 20px #DFE1E5",
        transform: "scale(1.1)"
    },
   
}))



export default function Card({ prod }) {
    const prod_name = prod.content.title;
    return <>
        <Link to={`filter-product/${prod._id}`} component={routerLink} style={{ cursor: "pointer" }}>
            <Wrapper className="p-2 py-3 cart" >

                <CardComp >

                    <Box>
                        <img src={prod.url} className="d-block mx-auto p-4" alt="" height="250px" width="100%" />
                    </Box>



                    <CardContent >
                        <Box className="d-flex flex-direction-column gap-1 text-center">
                            <Link to="" className="text-dark" component={routerLink} style={{ fontSize: "14px" }}>{prod_name.substring(0, (prod_name.length > 20) ? 18 : prod_name.length)}</Link>
                            <Link to="" className="text-dark" component={routerLink} style={{ fontSize: "14px" }}>{prod.content.price.sell_price}</Link>

                        </Box>
                    </CardContent>


                </CardComp>


            </Wrapper>
        </Link>
    </>
}