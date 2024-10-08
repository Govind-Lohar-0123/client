
import { Box, Grid, styled, Typography, Button, Link, TextField, FormControl } from "@mui/material";
import { Link as routerLink } from "react-router-dom";
import { Radio, RadioGroup } from '@mui/joy';

const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "#f5faff",
    padding: "0 20px",
    paddingBottom:"20px",

    ">div": {

        marginLeft: "40px ",
        marginRight: "25%"
    }
}))

const StyleRadio=styled(Radio)(({theme})=>({
    poition:"absolute",
   top:"23px"

}))
export default function DeliveryAddress() {
    return (
        <>
            <Wrapper  >
             <StyleRadio readOnly checked style={{ marginRight: "10px" }}></StyleRadio>
                <Box>  
                    <form>
                      
                      
                            
                        <Typography className=" text-primary text-bold" style={{ fontSize: ".9rem" }}>ADD A NEW ADDRESS</Typography>
                      
                        <Button variant="contained" size="large" className="bg-primary my-4" style={{ textTransform: "none", fontSize: ".9rem", fontWeight: "bold", height: "45px" }}><Link component={routerLink} className="text-white" > Use my current location </Link></Button>
                        <Grid container >
                            <Grid item lg={5.8}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Name"
                                    className="w-100"
                                    type="text"
                                    autoComplete="current-password"
                                />
                                <TextField className="mt-2 w-100"
                                    id="outlined-password-input"
                                    label="Pincode"
                                    type="password"

                                    autoComplete="current-password"
                                />

                            </Grid>
                            <Grid item lg={5.8} style={{ marginLeft: "auto" }}>
                                <TextField
                                    id="outlined-password-input"
                                    className="w-100"
                                    label="10-digit mobile number"
                                    type="text"
                                    autoComplete="current-password"
                                />
                                <TextField className="mt-2 w-100"
                                    id="outlined-password-input"
                                    label="Locality"
                                    type="text"
                                    autoComplete="current-password"
                                />

                            </Grid>
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="Address (Area and Street)"
                            className="w-100 mt-3"

                            type="text"
                            autoComplete="current-password"
                        />
                        <Grid container  className="my-3">
                            <Grid item lg={5.8}>
                                <TextField
                                    id="outlined-password-input"
                                    label="City/District/Town"
                                    className="w-100"
                                    type="text"
                                    autoComplete="current-password"
                                />
                                <TextField className="mt-2 w-100"
                                    id="outlined-password-input"
                                    label="State"
                                    type="text"

                                    autoComplete="current-password"
                                />

                            </Grid>
                            <Grid item lg={5.8} style={{ marginLeft: "auto" }}>
                                <TextField
                                    id="outlined-password-input"
                                    className="w-100"
                                    label="Landmark (Optional)"
                                    type="text"
                                    autoComplete="current-password"
                                />
                                <TextField className="mt-2 w-100"
                                    id="outlined-password-input"
                                    label="Alternet Phone (Optional)"
                                    type="text"
                                    autoComplete="current-password"
                                />

                            </Grid>

                        </Grid>
                        <Box>
                            <Typography className="text-muted text-bold" style={{ fontSize: ".8rem" }}>Address Type</Typography>
                            <Box style={{ display: 'flex', justifyContent: "space-between" }} className="mt-2">

                                <Radio label="Home (All day delivery)" style={{ fontSize: ".9rem" }} />
                                <Radio label="Work (Delivery between 10 AM - 5 PM)" style={{ fontSize: ".9rem" }} defaultChecked />
                            </Box>
                        </Box>
                        <Button variant="contained" size="large" className="mt-4 text-bold " style={{ fontSize: ".8rem", fontWeight: "bold", backgroundColor: "#fb641b", width: "45%", height: "50px" }}><Link component={routerLink} className="text-white" > SAVE DELIVERY HERE </Link></Button>
                    </form>
                </Box>
            </Wrapper>
        </>
    )
}