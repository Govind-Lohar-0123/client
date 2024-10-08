

import { Box, Grid, Link, Typography } from "@mui/material";
import { Link as routerLink } from "react-router-dom";
import ReviewCard from "./ReviewCard"


export default function ReviewSlide({ prods }) {


    return (
        <>
            {prods &&


                <Box className="bg-white my-4 ">
                    <Box className="px-4 py-3"><Typography variant="h6" className="text-bold">Reviews for Popular Mobiles</Typography></Box>
                    <hr className="m-0" />
                    <Box className="px-4 py-3">
                        <Link className="text-dark w-100" to={`/detail-view/${prods[0]._id}`} component={routerLink}>
                            <ReviewCard prod={prods[0]} /><hr />
                        </Link>
                        <Link className="text-dark w-100" to={`/detail-view/${prods[1]._id}`} component={routerLink}>
                            <ReviewCard prod={prods[1]} /><hr />
                        </Link>
                        <Link className="text-dark w-100" to={`/detail-view/${prods[2]._id}`} component={routerLink}>
                            <ReviewCard prod={prods[2]} /><hr />
                        </Link>



                    </Box>
                </Box>


            }
        </>)
}