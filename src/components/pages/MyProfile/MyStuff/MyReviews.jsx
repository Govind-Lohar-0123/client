
import { Box, Typography } from "@mui/material";


export default function MyReviews() {

    return (

        <>







            <Box className="mt-3 bg-white d-flex flex-direction-column justify-content-center align-item-center" style={{ width: "100%", height: "80vh" }}>
                <Box className="text-center" style={{ fontSize: "14px" }}>
                    <Box>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myReviewsEmpty_343559.png" />
                    </Box>
                    <Typography className="text-bold my-2 mt-4 " style={{ fontSize: "18px" }}>No Reviews & Ratings</Typography>
                    <Typography className="text-muted" style={{ fontSize: "14px" }}>You have not rated or reviewed any product yet!</Typography>

                </Box>
            </Box>









        </>
    )
}