import { Box, styled,Typography } from "@mui/material"

const Component=styled(Box)(({theme})=>({
    // width:"500px",
    [theme.breakpoints.down("md")]:{
        overflowX:"scroll",
        whiteSpace:"nowrap",
        "h3,h4":{
            fontSize:"1.3rem"
        }
    
    }
}))
export default function DownloadApp() {




    return (
        <>

            <Component style={{
                 marginInline: "auto", background: "url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/background_1686f2.png) no-repeat top"
            }} className="mt-3 p-2 "  height={"100vh"}>
                <Box style={{ width: "70%", paddingTop: "80px" }} className="my-auto text-center">
                    <img width="180px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-logo_f64bb3.png" alt="" />
                    <Typography variant="h3" className="text-white my-3">INDIA'S MOST POPULAR!</Typography>
                    <Typography variant="h4" className="text-white">SHOPPING APP</Typography>
                    <Box className="d-flex flex-wrap align-item-center justify-content-center gap-5 my-5" style={{ fontSize: "14px" }}>
                        <Box>
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/genuine-products_9b0a2f.png" />
                            <Typography variant="span" className="text-white" >Genuine Products</Typography>
                        </Box>
                        <Box>
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/secure-shopping_817688.png" />
                            <Typography variant="span" className="text-white">Secure Shopping</Typography>
                        </Box>
                        <Box>
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/Hassle-free_be7c77.png" />
                            <Typography variant="span" className="text-white">Hassle - free Returns</Typography>
                        </Box>
                    </Box>
                    <Box className="d-flex flex-wrap align-item-center justify-content-center gap-4 mt-4" >
                        <a href="https://itunes.apple.com/in/app/flipkart/id742044692" target="_blank" rel="noopener noreferrer">
                            <img height="70px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/App-Store_50c61d.png"  />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.flipkart.android" target="_blank" rel="noopener noreferrer">
                            <img height="70px"src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/Play-Store_33bb40.png"  />
                        </a>
                    </Box>

                </Box>

            </Component >
        </>

    )

}