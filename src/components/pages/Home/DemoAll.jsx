import { Box, List, ListItem, Stack, Typography, styled, Grid } from "@mui/material";
import { useState } from "react";
import DemoItem from "./DemoItem";
import { prod } from "./data";
const DemoBox = styled(Grid)(({ theme }) => ({
    backgroundColor: "white",
    height: "150px",
    // width: "100%",
    // justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    // paddingInline: "60px",
    [theme.breakpoints.down("lg")]: {
        paddingInline: "40px",height: "300px",
        paddingBlock:"5px"
    },
    [theme.breakpoints.down("md")]: {
        marginTop: "9rem",
      
        
        overflowX: "scroll",


    }


}))



const DemoAll = () => {


    return (
        <>
            <Box className=" px-2" >
                <DemoBox container lg={12} className="" >
                    {
                        prod.map((p, idx) => {
                            return (<DemoItem items={{ item: p, idx }} key={idx} />)
                        })
                    }

                </DemoBox>
            </Box>
        </>
    )
}
export default DemoAll;