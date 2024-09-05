

import { Box, Grid, Link, Typography } from "@mui/material";
import { Link as routerLink } from "react-router-dom";
import ReviewCard from "./ReviewCard"


export default function ReviewSlide({data}) {
   
    
    return (
        <>
            {data && data.loading == false && data.prods &&
            

                    <Box className="bg-white my-4 ">
                        <Box className="px-4 py-3"><Typography variant="h6" className="text-bold">Reviews for Popular Mobiles</Typography></Box>
                        <hr className="m-0" />
                        <Box className="px-4 py-3">
                           
                            <ReviewCard prod={data.prods.prods[0]}/><hr />
                            <ReviewCard prod={data.prods.prods[1]}/><hr />
                            <ReviewCard prod={data.prods.prods[2]}/><hr />
                                

                            
</Box>
                    </Box>

               
            }
        </>)
}