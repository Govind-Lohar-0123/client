import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../../partials/Footer";




export default function YoutubeLayout() {

    var getData = async () => {
        var res = fetch("https://imdb8.p.rapidapi.com/title/v2/get-countries-of-origin?tconst=tt0120338&first=20&country=US&language=en-US' \
	--header 'x-rapidapi-host: imdb8.p.rapidapi.com' \
	--header 'x-rapidapi-key: 9f50447d2fmsh375dc6711d5b84bp113a0bjsn3247925dd66c")
    console.log(res);
    }
    
    return (
        <>


            <Header />
            <Box className="mt-5">
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}