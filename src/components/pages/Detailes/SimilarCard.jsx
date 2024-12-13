import React from "react";
import { Typography, styled, Box, Link } from "@mui/material";
const Image = styled("img")({
    width: "100%",
    padding: "15px",
    height: "30vh",
})

const Text = styled(Typography)`
    font-size:0.9rem;
    margin-block:4px;
`
const PriceComponent = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "9px",
    alignItems: "center",

}))



export default function SimilarCard({ prod, time }) {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const prod_name = prod.content.title;
    return (

        <>
            <Box className="card  text-dark pt-1 mx-2" style={{ marginBottom: "20px", width: "100%", border: "solid 1px rgb(239, 233, 233)" }} >
                <Image className="card-img-top m-auto" src={prod.url} alt="Card image cap" />
                <Box className="card-body " >
                    <Text className="card-title text-dark "  >{prod_name.substring(0, (prod_name.length > 20) ? 20 : prod_name.length)}</Text>
                    <Box className="mt-1 d-flex align-item-center gap-1">

                        <Box className="d-flex gap-1 border-rounded p-1" style={{ backgroundColor: "#008c00", fontSize: "10px", borderRadius: "6px" ,width:"100px"}}>
                            <Typography className="  text-white text-bold" fontSize={"11px"} >{4.4}</Typography>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} />
                        </Box>
                        <Typography className="text-muted  text-bold" style={{ fontSize: "15px" }}>(1,13,485)</Typography>
                        <Box className="w-50 h-50"><img src={fassured} className="d-flex w-100 h-100" /></Box>
                    </Box>
                    <Box>

                        <PriceComponent className="">
                            <Text className="card-text p-0 " style={{ fontWeight: "bold", fontSize: "15px" }}> {prod.content.price.sell_price}</Text>
                            <Text className="card-text p-0 " style={{ fontWeight: "bold", fontSize: "14px" }}><del className="text-muted">{prod.content.price.org_price}</del></Text>
                            <Text className="card-text p-0 " style={{ color: "#388e3c", fontWeight: "bold", fontSize: "14px" }}> {prod.content.price.discount}</Text>

                        </PriceComponent>

                    </Box>
                    {/* <Text className="card-text text-muted ">{prod.tagline}</Text> */}

                </Box>
            </Box >


        </>
    )
}