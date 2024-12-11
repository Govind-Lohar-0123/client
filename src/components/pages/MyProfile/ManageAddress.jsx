
import { Box, Button, Typography } from "@mui/material";

export default function ManageAddress() {
    const arr = ["Home", "My Account", "Orders", "Search Results"];

    return (

        <><Box>

            <Box className="mt-3 bg-white d-flex flex-direction-column justify-content-center align-item-center" style={{ width: "100%", height: "80vh" }}>
                <Box className="text-center" style={{ fontSize: "14px" }}>
                    <Box>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myaddresses-empty_3b40af.png" />
                    </Box>
                    <Typography className="text-bold my-2 mt-4 " style={{ fontSize: "18px" }}>No Addresses found in your account!</Typography>
                    <Typography className="text-muted" style={{ fontSize: "14px" }}>Add a delivery address.</Typography>
                    <Button variant="contained" className="my-3 p-3 px-4" style={{
                        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .2)",
                        background: "#2874f0", fontSize: "14px",
                        textTransform: "capitalize"
                    }}>ADD ADDRESSES</Button>
                </Box>
            </Box>

        </Box>









        </>
    )
}