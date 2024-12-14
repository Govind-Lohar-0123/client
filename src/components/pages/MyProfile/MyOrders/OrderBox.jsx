import { Box, Grid, Link, Typography, styled } from "@mui/material"
import { Link as routerLink } from "react-router-dom"
const OrderBoxStyled = styled(Box)(({ theme }) => ({
    "&:hover": {
        boxShadow: "2px 5px 20px 2px #dbdbdb !important",
    },
    transition: "box-shadow .1s linear"
}))

export default function OrderBox() {

    return (

        <>
            <OrderBoxStyled className="mt-2 bg-white py-3 " style={{ borderRadius: "4px", border: "1px solid #dbdbdb", boxShadow: "0 0 0 0 rgba(0, 0, 0, .15)" }}>
                <Link to="/account/order_details/1" component={routerLink} className="text-dark">
                    <Box style={{ marginLeft: "4%" }} >
                        <Grid container >
                            <Grid item lg={3} md={3}>
                                <Box className="d-flex justify-content-space-between gap-4" >
                                    <Link style={{ height: "75px", width: "90px" }}>
                                        <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src="https://rukminim2.flixcart.com/image/200/200/xif0q/recharge-bill-payment/w/h/j/-original-imagqjnvmr86drxt.jpeg?q=90" />
                                    </Link>
                                    <Box >
                                        <Typography style={{ fontSize: "14px" }} >Mobile Prepaid Recharge</Typography>
                                        <Box className="mt-2" style={{
                                            color: " #878787",
                                            fontSize: "12px"
                                        }}><span >•</span><span className="mx-2">9xxxxx1239</span></Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={8}style={{ marginInline: "auto" }}>
                                <Box className="d-flex justify-content-space-between " style={{ alignItems: "flex-start", marginBottom: "8px" }}>
                                    <Box className="d-flex align-item-center gap-2">
                                        <span style={{ fontSize: "14px" }}>₹140</span>
                                        <Box className="d-flex align-item-center">
                                            <span> + </span>
                                            <img style={{ height: "16px" }} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/lockinCoinNew_79b3fb.svg"  />

                                        </Box>
                                        <span style={{ fontSize: "14px" }} className="mx-2">15</span>
                                    </Box>
                                    <Box className="d-flex flex-direction-column  gap-2">
                                        <Box className="d-flex align-item-center gap-3">
                                            <Box style={{ backgroundColor: "#26a541", height: "10px", width: "10px", borderRadius: "50%", border: "2px solid #26a541" }}></Box>
                                            <Typography className="text-bold" style={{ fontSize: "14px" }}>Successful on Jun 02</Typography>
                                        </Box>
                                        <Typography style={{ fontSize: "12px" }}>Your recharge is successful</Typography>

                                        <Link className="d-flex align-item-center gap-2">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTknIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiPgoJPGcgZmlsbD0nbm9uZSc+CgkJPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjMjg3NEYxIiBwb2ludHM9IjkgMTIuMDYyNSAxMy42Mzc1IDE1LjQzNzUgMTEuODYyNSA5Ljk4NzUgMTYuNSA2LjY4NzUgMTAuODEyNSA2LjY4NzUgOSAxLjA2MjUgNy4xODc1IDYuNjg3NSAxLjUgNi42ODc1IDYuMTM3NSA5Ljk4NzUgNC4zNjI1IDE1LjQzNzUiIC8+CgkJPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjAgMCAxOCAwIDE4IDE4IDAgMTgiIC8+Cgk8L2c+Cjwvc3ZnPg=="  />
                                            <Typography style={{ fontSize: "13px", color: "#2874f0" }} className="text-bold">Rate &amp; Review Product</Typography>
                                        </Link>

                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Link>
            </OrderBoxStyled>
        </>
    )
}