import React from "react";
import { Typography, styled, Box, Link } from "@mui/material";
import { Link as routerLink } from "react-router-dom"
const Image = styled("img")({
    width: "140px",

})

const Text = styled(Typography)`
    font-size:0.9rem;
    margin-block:4px;
`



export default function Card({ prod, time }) {
    

    const prod_name = prod.content.title;
    return (

        <><Link component={routerLink} to={"/filter-product/" + prod.content.title}>
            <Box className="card text-center text-dark pt-1 mt-4" style={{ marginBottom: "20px", border: "solid 1px rgb(239, 233, 233)" }} >
                <Image className="card-img-top m-auto " src={prod.url} alt="Card image cap" />
                <Box className="card-body">
                    <Text className="card-title text-dark "  >{prod_name.substring(0, (prod_name.length > 20) ? 20 : prod_name.length)}</Text>
                    <Text className="card-text p-0 " style={{ fontWeight: "bold", fontSize: "17px" }}> {prod.content.price.sell_price}</Text>


                </Box>
            </Box>
        </Link>


        </>
    )
}