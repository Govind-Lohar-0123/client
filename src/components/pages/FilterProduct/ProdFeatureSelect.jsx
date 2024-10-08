import { Box, styled, List, ListItem, Typography, FormControl, Input, Grid, Slider, FormGroup, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
const ariaLabel = { 'aria-label': 'description' };
const Component = styled(Box)(({ theme }) => ({
    "*": {
        fontSize: "14px"
    }
}))

export default function ProdFeatureSelect({ items }) {
    const [featureOpen, setFeature] = useState(false);

    const { featureTitle, featureList } = items;

    return (
        <>
            <Component >

                <Box className="d-flex justify-content-space-between " onClick={() => setFeature((featureOpen) ? false : true)}>
                    <Typography className="text-bold" style={{ textTransform: "uppercase", letterSpacing: ".3px", fontSize: "13px" }} >{featureTitle}</Typography>
                    <Typography variant="span" style={{ marginLeft: "auto" }}><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="Chevron" className="-dOa_b XdYXbi" width="12" height="12" /></Typography>
                </Box>
                <Box className={(featureOpen) ? "" : "d-none"} style={{ fontSize: "14px" }}>

                    <FormGroup style={{ marginTop: "5px" }} >
                        {
                            featureList.map((featureName, idx) => {
                                return <FormControlLabel key={idx} control={<Checkbox />} label={featureName} />
                            })

                        }
                    </FormGroup>
                </Box>
            </Component>
        </>
    )
}