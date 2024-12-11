import { Box, styled, Grid, Button, List, ListItem, Typography, Avatar } from "@mui/material"
import v1 from "../../../videos/v1.mp4"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton'
import cartoon from "../../../videos/cartoon.mp4";
// ---------------LEFT COMPONENT CSS------------
const LeftComponent = styled(Grid)(({ theme }) => ({
    width: "100%",


    marginInline: "auto",
    [theme.breakpoints.down("md")]: {
        ".title": {
            justifyContent: "space-between"
        }
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    }

}))



export default function VideoWatch() {




    return (<>

        <LeftComponent className=" gap-2  my-3 ">

            <video controls autoPlay muted loop className="w-100 h-100 d-block border-none" style={{ borderRadius: "14px" }}>
                <source src={cartoon} className="w-100 h-100 d-block" />
            </video>
            <Typography style={{ fontSize: "19px", letterSpacing: "0px", wordSpacing: 0 }} className="text-bold my-2">How to prepare Low Level Design & Machine Coding for Interviews? LLD Roadmap and my Prep Strategy</Typography>
            <Box className="d-flex align-item-center justify-content-space-between px-1 flex-wrap gap-2">
                <Box className="d-flex align-item-center gap-4 title flex-wrap ">
                    <Box className="d-flex align-item-center gap-3">
                        <Avatar sx={{ backgroundColor: "red" }}>G</Avatar>
                        <Box>
                            <Typography style={{ fontSize: "15px" }} className="text-bold ">Govind Lohar</Typography>
                            <Typography style={{ fontSize: "13px" }} className="text-muted ">82k subscribers</Typography>
                        </Box>
                    </Box>
                    <Button variant="contained" className="bg-dark text-white text-bold " style={{ textTransform: "none", borderRadius: "20px" }}>Subscribe</Button>
                </Box>
                <Box className="d-flex align-item-center flex-wrap  gap-4" style={{ fontSize: "14px" }}>
                    <Box className="bg-muted p-2 px-2 d-flex align-item-center gap-1" style={{ borderRadius: "20px", backgroundColor: "#f5f6f4 " }}>
                        <ThumbUpIcon />
                        <Typography variant="span" className="mx-1 text-muted ">956</Typography>

                        <ThumbUpIcon />


                    </Box>
                    <Box className="bg-muted p-2 px-2" style={{ borderRadius: "20px", backgroundColor: "#f5f6f4 " }}>
                        <i className="fa-thin fa-arrow-down fa-1x"></i>
                        <Typography variant="span" className="mx-1 text-muted">Share</Typography>
                    </Box>
                    <Box className="bg-muted p-2 px-2" style={{ borderRadius: "20px", backgroundColor: "#f5f6f4 " }}>
                        <i className="fa-thin fa-arrow-down fa-1x"></i>
                        <Typography variant="span" className="mx-1 text-muted">Download</Typography>
                    </Box>
                    <Box className="bg-muted p-2 px-2" style={{ borderRadius: "20px", backgroundColor: "#f5f6f4 " }}>
                        <i className="fa-thin fa-arrow-down fa-1x"></i>
                        <Typography variant="span" className="mx-1 text-muted">Clip</Typography>
                    </Box>

                    <IconButton aria-label="settings" className="p-2" sx={{ borderRadius: "100%", backgroundColor: "#f5f6f4 " }}>
                        <MoreHorizIcon />
                    </IconButton>


                </Box>
            </Box>



        </LeftComponent >

    </>)
}

