import { Box,  styled, Grid } from "@mui/material";

import DemoItem from "./DemoItem";
import { prod } from "../partials/data";
const DemoBox = styled(Grid)(({ theme }) => ({
    backgroundColor: "white",
    height: "150px",
   
    textAlign: "center",
    alignItems: "center",
   
    [theme.breakpoints.down("lg")]: {
        paddingInline: "40px",height: "300px",
        paddingBlock:"5px"
    },
    [theme.breakpoints.down("md")]: {
       
        overflowX: "scroll",


    }


}))



const DemoAll = () => {


    return (
        <>
            <Box className="px-2 " >
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