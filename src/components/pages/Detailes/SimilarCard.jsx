import React from "react";
import { Typography, styled, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
const Image = styled("img")({
    width: "140px",
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
            <Box className="card  text-dark pt-1 mx-2" style={{ marginBottom: "20px",width:"220px", border: "solid 1px rgb(239, 233, 233)" }} >
                <Image className="card-img-top m-auto " src={prod.url} alt="Card image cap" />
                <Box className="card-body">
                    <Text className="card-title text-dark "  >{prod_name}</Text>
                    <Box className="mt-1 d-flex align-item-center gap-1">
                        <Typography  className="px-1  border-rounded text-white text-bold" style={{ backgroundColor: "#008c00", fontSize: "12px", borderRadius: "6px" }}>{prod.content.rating.star} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                        <Typography  className="text-muted  text-bold" style={{ fontSize: "15px" }}>(1,13,485)</Typography>
                        <Box className="w-50 h-50"><img src={fassured} className="d-flex w-100 h-100"/></Box>
                    </Box>
                    <Box>

                        <PriceComponent className="">
                            <Text className="card-text p-0 " style={{ fontWeight: "bold", fontSize: "15px" }}> {prod.content.price[0]}</Text>
                            <Text className="card-text p-0 " style={{ fontWeight: "bold", fontSize: "14px" }}><del className="text-muted">{prod.content.price[1]}</del></Text>
                            <Text className="card-text p-0 " style={{ color: "#388e3c", fontWeight: "bold", fontSize: "14px" }}> {prod.content.price[2]}</Text>

                        </PriceComponent>

                    </Box>
                    {/* <Text className="card-text text-muted ">{prod.tagline}</Text> */}

                </Box>
            </Box>


        </>
    )
}