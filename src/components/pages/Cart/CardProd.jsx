
import { Box, Grid, styled, Typography, Button } from "@mui/material";
import ExtendedCart from "./Extended";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../react_redux/redux/actions/cartAction";

const Wrapper = styled(Box)(({ theme }) => ({

}))


const Incre_Decre = styled(Button)(({ theme }) => ({

    ">button": {
        minWidth: "33px",
        border: "solid 2px rgb(234, 232, 232)",
        color: "black",

        height: "33px",
        fontSize: "1.2rem",

        borderRadius: "100%",
    }

}))
const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "2%",



}))

export default function CardProd({ value, idx }) {
    const { prod, showWar } = value;
    const [prodQuantity, setProdQuantity] = useState(1);
    const { url, content } = prod;
    const dispatch = useDispatch();

   
    return (
        <>
            <Wrapper className="my-3">
                <Grid container    >
                    <Grid item lg={2} md={3} sm={4} >
                        <Box className=" w-75 text-center  mx-auto" style={{ height: "90%" }}>
                            <img src={url} className="d-block w-100 h-100 "></img>
                        </Box>
                    </Grid>
                    <Grid item lg={9.8} md={9} sm={8} style={{ marginLeft: "auto" }}>
                        <Box >
                            <Box className="d-flex gap-2 flex-wrap">
                                <Typography component="span">{content.title}</Typography>
                                <Typography component="span" className="" style={{ marginLeft: "auto", marginRight: "5rem", fontSize: ".9rem" }}>Delivery by Mon Jul 8 | <Typography className="text-muted mx-2" component="span">{"Free "}</Typography></Typography>
                            </Box>
                            {/* <Typography component="span" className="mt-1 text-muted" style={{ fontSize: ".9rem" }}>{content.other[0]}</Typography> */}
                            <Typography className="my-3 text-muted" style={{ fontSize: ".9rem" }}>Seller:Truenet Commerce</Typography>
                            <Box className="my-3 ">
                                <Typography component="span" className="text-muted" style={{ fontSize: "1rem" }}><del>{content.price.org_price}</del></Typography>
                                <Typography component="span" className="mx-3 text-bold" style={{ fontSize: "1.2rem", }}>{content.price.sell_price}</Typography>
                                <Typography component="small" className="text-bold" style={{ fontSize: ".9rem", color: "rgb(17, 138, 17)" }}>{content.price.discount}</Typography>
                            </Box>

                        </Box>
                    </Grid>

                </Grid>
                {
                    (showWar == true) ? <ExtendedCart prod={prod} /> : ""
                }

                <StyledBox className="flex-wrap">
                    <Incre_Decre >
                        <Button variant="text" onClick={() => setProdQuantity((prodQuantity > 1) ? prodQuantity - 1 : 1)}>-</Button>
                        <Button variant="text" className="mx-2" style={{ borderRadius: "0", minWidth: "50px" }}>{prodQuantity}</Button>
                        <Button variant="text" onClick={() => setProdQuantity((prodQuantity < 10) ? prodQuantity + 1 : 10)}>+</Button>
                    </Incre_Decre>
                    <Box className="d-flex flex-wrap gap-2 ">
                        <Typography component="span" className="text-bold" style={{cursor:"pointer"}}>SAVE FOR LATER</Typography>
                        <Typography component="span" className="text-bold mx-5 text-dark" onClick={() => dispatch(removeFromCart(prod._id))} style={{ cursor: "pointer", color: "#878787" }}>REMOVE</Typography>
                    </Box>
                </StyledBox>
                <hr />
            </Wrapper>
        </>
    )
}