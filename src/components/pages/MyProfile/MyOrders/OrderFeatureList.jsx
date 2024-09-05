import { Box, styled, List, ListItem, Typography, FormControl, Input, Grid, Slider, FormGroup, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
const ariaLabel = { 'aria-label': 'description' };
const Component = styled(Box)(({ theme }) => ({
    "*": {
        fontSize: "14px"
    }
}))

export default function OrdersFeatureList({ items }) {


    const { featureTitle, featureList } = items;

    return (
        <>
            <Component >

                <Box className="d-flex justify-content-space-between " >
                    <Typography className="text-bold" style={{ textTransform: "uppercase",fontSize:"13px" }} >{featureTitle}</Typography>

                </Box>
                <Box>

                    <FormGroup style={{ marginTop: "5px" }} >
                        {
                            featureList.map((featureName, idx) => {
                                return <FormControlLabel key={idx} control={<Checkbox size="medium"/>} label={featureName} />
                            })

                        }
                    </FormGroup>
                </Box>
            </Component>
        </>
    )
}