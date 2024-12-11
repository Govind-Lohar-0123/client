import { Box, Typography, } from "@mui/material"
import WishlistCard from "./WishlistCard";
export default function MyWishlist() {



    return (
        <>
            <Box className="p-4 ">
                <Box className="d-flex gap-4 align-item-center mb-4">
                    <Typography className="text-bold" style={{ fontSize: "18px" }} >My Coupons (2)</Typography>
                </Box>
                
                {
                    Array.from(new Array(5),()=>{
                        return <WishlistCard />;
                    })
                }
                
              
            </Box>



        </>

    )

}