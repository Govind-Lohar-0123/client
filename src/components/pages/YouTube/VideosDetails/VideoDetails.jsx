// import { Box, styled, Typography,Grid, Link } from "@mui/material";
import { Box, styled, Typography, Grid, TextField, Link, Button } from "@mui/material";

import VideoWatch from "./VideoWatch";
import VideosList from "./VideosList";







// ---------------COMMON COMPONENT CSS------------
const Container = styled(Grid)(({ theme }) => ({
    backgroundColor: "white",


    [theme.breakpoints.down("md")]: {
        padding: "20px",
    }
}))
const DetailWrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    marginInline: "auto",
    [theme.breakpoints.down("md")]: {
        width: "100%",


    }

}))
const RightComponent = styled(Grid)(({ theme }) => ({
    paddingInline: "15px",
    position: "relative",

}))
const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingInline: "15px",
    marginBottom: "20px",

    [theme.breakpoints.down()]: {

    }
}))





const VideoDetails = () => {





    return (
        <>
            <Box className=" mt-1 mx-auto ">




                <DetailWrapper className="mt-1 bg-white">

                    <Container container className="pt-4 mx-auto  " style={{width:"95%"}} spacing={0}>
                        <LeftComponent item lg={8.5} md={8} sm={12} xs={12} >
                            <VideoWatch />
                        </LeftComponent>
                        <RightComponent item lg={3} md={11} sm={12} xs={12} >

                            <VideosList />
                        </RightComponent>

                    </Container>

                </DetailWrapper>

            </Box>

        </>

    )
}
export default VideoDetails;
