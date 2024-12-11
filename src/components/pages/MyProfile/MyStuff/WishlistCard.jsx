import { Box, styled, Grid, Typography, Link,} from "@mui/material"


const PriceComponent = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "15px",
    alignItems: "center",

}))
const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "contain"
}))
const LeftComponent=styled(Grid)(({theme})=>({
    [theme.breakpoints.down("md")]:{
        marginInline:"auto",
        textAlign:"center",
       
        
            
       
    }
}))
const RightComponent=styled(Grid)(({theme})=>({
    "a":{height:"10px"}
}))
export default function WishlistCard() {
    return (
        <>
            <Box>
                <hr className="w-100" />
                <Box >
                    <Grid container lg={12} sm={10} xs={12} >
                        <LeftComponent item lg={2} md={2} sm={6} xs={10} className="mb-4">
                            <Box className=" w-50 p-2 mx-auto" style={{  verticalAlign: "center" }}>
                                <Link className="w-100 h-50"><Image src="https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/c/0/q/-original-imagyzrfxesmgjdq.jpeg?q=70" alt="" /></Link>

                            </Box>

                        </LeftComponent>
                        <RightComponent item lg={10} md={10} sm={12} >
                            <Box>
                                <Box className="d-flex w-100 justify-content-space-between">

                                    <Typography className="" style={{ fontSize: "15px", width: "80%" }} > IFB 187 L Direct Cool Single Door 2 Star Refrigerator  with Powered by E-Tech,with Extraordinary Stora...</Typography>
                                    <Link >
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLjUuNWgxNXYxNWgtMTV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0MyQzJDMiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMSAxMy44MzNjMCAuOTE3Ljc1IDEuNjY3IDEuNjY3IDEuNjY3aDYuNjY2Yy45MTcgMCAxLjY2Ny0uNzUgMS42NjctMS42Njd2LTEwSDF2MTB6bTEwLjgzMy0xMi41SDguOTE3TDguMDgzLjVIMy45MTdsLS44MzQuODMzSC4xNjdWM2gxMS42NjZWMS4zMzN6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" ></img>
                                    </Link>
                                </Box>
                                <Box className="">
                                    <Typography variant="span" className="px-2 py-1 border-rounded text-white text-bold" style={{ backgroundColor: "#008c00", fontSize: "12px", borderRadius: "3px" }}>4.4 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                                    <Typography variant="span" className="text-muted mx-2 text-bold" style={{ fontSize: "15px" }}>(277)</Typography>
                                    <Link><img height="21" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" /></Link>
                                </Box>
                                <PriceComponent className="my-1 mt-4" style={{ fontSize: "14px" }}>
                                    <Typography className="text-bold" style={{ fontSize: "22px" }}>₹13,990</Typography>
                                    <Typography variant="span" className="text-muted text-bold"><del>₹17,650</del></Typography>
                                    <Typography variant="span" style={{ color: "#388e3c", fontWeight: "bold" }}>20 % off</Typography>
                                </PriceComponent>
                            </Box>
                        </RightComponent>
                    </Grid>
                </Box>

            </Box>
        </>

    )

}