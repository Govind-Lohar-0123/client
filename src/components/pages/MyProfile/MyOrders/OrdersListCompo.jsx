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