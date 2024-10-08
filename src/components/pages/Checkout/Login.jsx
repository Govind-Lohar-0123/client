import { Box, Grid, styled, Typography, Button, Link, TextField } from "@mui/material";
import { Link as routerLink } from "react-router-dom";
export default function Login() {
    return (

        <>

            <Box style={{ margin: "1.5rem 3rem" }} className="d-none">
                <Grid container >
                    <Grid item lg={5} md={12}>
                        <Box>
                            <TextField id="standard-basic" className="w-100 text-bold text-muted" style={{ fontSize: "1.2rem" }} label="Enter Email/Mobile number" variant="standard" />
                            <Box className="my-4"><Typography component="span" className="text-muted" style={{ fontSize: "13px" }}>By continuing ,You are agree to Flipkart`s <Link to="" component={routerLink}>Terms Of Use</Link> and <Link to="" component={routerLink}>Privacy Policy</Link></Typography></Box>
                            <Button variant="contained" size="large" className="" style={{ fontSize: "1.2rem", fontWeight: "bold", backgroundColor: "#fb641b", width: "100%", height: "55px" }}><Link component={routerLink} className="text-white" > CONTINUE </Link></Button>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={12} style={{ marginLeft: "auto" }}>
                        <Box >
                            <Typography className="text-muted">Advantage of our secure login</Typography>
                            <Box className="my-3">
                                <Typography>Easily Track Orders , Hassel free Returns</Typography>
                                <Typography className="my-3">Get Relevant Alerts and Recommendation</Typography>
                                <Typography>Wishilist, Reviews ,Rating and more .</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}