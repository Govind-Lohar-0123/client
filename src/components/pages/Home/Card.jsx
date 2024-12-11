import React from "react";
import { Typography, styled, Box, Link } from "@mui/material";
import { Link as routerLink } from "react-router-dom"
const Image = styled("img")({
    width: "100%",
    height: "70%",
    padding: "10px"

})

const Text = styled(Typography)`
    font-size:0.9rem;
    margin-block:4px;
`



export default function Card({ prod, time }) {


    const prod_name = prod.content.title;
    return (

        <>
            
                <Link component={routerLink} to={"/filter-product/" + prod._id} className="d-block mx-auto"  style={{ width: 220, height: "72%" }}>
                    <Box className="card  text-dark pt-1 mt-4 h-100" style={{ border: "solid 1px rgb(239, 233, 233)" }} >
                        <Image className="card-img-top m-auto " src={prod.url} alt="Card image cap" />
                        <Box className="card-body ">
                            <Text className="card-title text-dark text-center"  >{prod_name.substring(0, (prod_name.length > 20) ? 18 : prod_name.length)}</Text>
                            <Text className="card-text p-0 text-center" style={{ fontWeight: "bold", fontSize: "17px" }}> {prod.content.price.sell_price}</Text>


                        </Box>
                    </Box>
                </Link>
          


        </>
    )
}