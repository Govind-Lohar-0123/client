import { Box, styled, TextField, Grid, Typography, Button, List, Link, Table, TableBody, TableCell, TableContainer, Paper, TableRow, ListItem } from "@mui/material"
import Dashboard from "../Dashboard";
import Input from "@mui/material"
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link as routerLink } from "react-router-dom"
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import FormLabel from '@mui/material/FormLabel';
import CouponsCard from "./CouponsCard";


const PriceComponent = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "15px",
    alignItems: "center",

}))
const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "contain"
}))
export default function WishlistCard() {




    return (
        <>






            <Box style={{height:"150px"}}>
                <hr className="w-100" />
                <Box >
                    <Grid container lg={12}>
                        <Grid lg={2} className="">
                            <Box className=" w-100 p-2" style={{ height: "40%", verticalAlign: "center" }}>
                                <Link className="w-100 h-100"><Image src="https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/c/0/q/-original-imagyzrfxesmgjdq.jpeg?q=70" alt="" /></Link>

                            </Box>

                        </Grid>
                        <Grid lg={10}>
                            <Box>
                                <Box className="d-flex w-100 justify-content-space-between">

                                    <Typography className="" style={{ fontSize: "15px", width: "80%" }} > IFB 187 L Direct Cool Single Door 2 Star Refrigerator  with Powered by E-Tech,with Extraordinary Stora...</Typography>
                                    <Link >
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLjUuNWgxNXYxNWgtMTV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0MyQzJDMiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMSAxMy44MzNjMCAuOTE3Ljc1IDEuNjY3IDEuNjY3IDEuNjY3aDYuNjY2Yy45MTcgMCAxLjY2Ny0uNzUgMS42NjctMS42Njd2LTEwSDF2MTB6bTEwLjgzMy0xMi41SDguOTE3TDguMDgzLjVIMy45MTdsLS44MzQuODMzSC4xNjdWM2gxMS42NjZWMS4zMzN6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" class="Mj62aK"></img>
                                    </Link>
                                </Box>
                                <Box className="">
                                    <Typography variant="span" className="px-2 py-1 border-rounded text-white text-bold" style={{ backgroundColor: "#008c00", fontSize: "12px", borderRadius: "3px" }}>4.4 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                                    <Typography variant="span" className="text-muted mx-2 text-bold" style={{ fontSize: "15px" }}>(277)</Typography>
                                    <Link><img height="21" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" /></Link>
                                </Box>
                                <PriceComponent className="my-1 mt-4" style={{ fontSize: "14px" }}>
                                    <Typography className="text-bold" style={{ fontSize: "22px" }}>₹13,990</Typography>
                                    <Typography variant="span" className="text-muted text-bold"><del>₹17,650</del></Typography>
                                    <Typography variant="span" style={{ color: "#388e3c", fontWeight: "bold" }}>20 % off</Typography>
                                </PriceComponent>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </>

    )

}