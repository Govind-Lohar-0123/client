import { Box, styled, Grid } from "@mui/material"
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";
import Header from "../partials/Header1";
import Footer from "../partials/Footer";




const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "#f5f7fa !important",
    width: "100%",
    height: "100%",

    [theme.breakpoints.down("md")]: {
        marginTop: "30px"
    }

}))

const Component = styled(Grid)(({ theme }) => ({
    width: "80%",
    [theme.breakpoints.down("lg")]: {
        width: "100%"
    },

    marginInline: "auto",

}))

const GridContainer = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        ">div": {
            margin: "auto"
        }
    }
}))

export default function MyProfileLayout() {
    return (
        <>

            <Wrapper className="mx-2" style={{ marginTop: "150px" }}>

                <Component className="mt-4">

                    <GridContainer container >
                        <Grid item lg={3.4} md={3.5} sm={5} xs={10} className="mb-3">
                            <Dashboard />
                        </Grid>



                        <Grid item lg={8.5} md={8} sm={10} xs={11} className="mr-auto" style={{ backgroundColor: "white", marginLeft: "auto", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)" }}>
                            <Outlet />

                        </Grid>

                    </GridContainer>
                </Component>
            </Wrapper >
            <Footer />
        </>

    )

}