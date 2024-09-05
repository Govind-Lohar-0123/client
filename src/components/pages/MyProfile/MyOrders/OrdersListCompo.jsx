import SearchComponent from "./SearchComponent";
import { Box, Grid, Button, Link, styled, Typography, List, ListItem } from "@mui/material";
import OrderBox from "./OrderBox";

export default function OrderListCompo() {


    return (

        <>
            <Box>
                <Box className="bg-white" style={{ height: "40px", width: "90%" }}>
                    <SearchComponent />
                </Box>
                {/* <Box className="mt-3 bg-white d-flex flex-direction-column justify-content-center align-item-center" style={{ width: "100%", height: "80vh" }}>
                    <Box className="text-center" style={{fontSize:"14px"}}>
                        <Box>
                            <img src="https://rukminim2.flixcart.com/www/100/100/promos/23/08/2020/c5f14d2a-2431-4a36-b6cb-8b5b5e283d4f.png?q=90" />
                        </Box>
                        <Typography className="text-bold my-3 ">Sorry, no results found</Typography>
                        <Typography className="text-muted" style={{fontSize:"14px"}}>Edit search or go back to My Orders Page</Typography>
                        <Button variant="contained" className="my-3" style={{
                            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .2)",
                            background: "#2874f0",fontSize:"14px",
                            textTransform:"capitalize"
                        }}>Go to My Orders</Button>
                    </Box>
                </Box> */}
                <Box className="mt-4">
                    {
                        Array.from(new Array(10),(item)=>{
                            return (<OrderBox/>)
                        })
                    }
                </Box>
                <Button variant="contained" className="mx-auto mt-4 p-3" style={{textTransform:"capitalize",marginInline:"auto"}}>No more results to display</Button>
            </Box>
        </>
    )
}