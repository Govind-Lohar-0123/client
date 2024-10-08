import { Box, Typography, Grid, styled, Table, TextField, Toolbar, Button, TableRow, Slider, TableCell, List, ListItem, Link, Radio, FormControlLabel, Checkbox, TableHead } from "@mui/material";
import VideoCard2 from "../Slides/VideoCard2";


const RightComponent = styled(Box)(({ theme }) => ({
    position: "relative",
    "p": {
        fontSize: "14px",
        fontFamily: " Inter, -apple-system, Helvetica, Arial, sans-serif",
    },

}))

export default function VideosList() {

    return (

        <>
            <RightComponent >


                <Box>
                    {
                        Array.from(new Array(20), (it, idx) => {
                            return <VideoCard2 key={idx} />
                        })


                    }
                </Box>



            </RightComponent>
        </>

    )
}