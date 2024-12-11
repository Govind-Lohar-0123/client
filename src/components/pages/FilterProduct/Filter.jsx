import { Box, styled, Link, List, ListItem, Typography, FormControl, Grid, Slider, FormGroup, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useEffect, useState } from "react";
import ProdFeatureSelect from "./ProdFeatureSelect";
import { Link as routerLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter } from "../../react_redux/redux/actions/FilterActions";
import { mobile_feature } from "../partials/data";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';





const FilterComponent = styled(Box)(({ theme }) => ({
    // fontSize: "12px",
    "li": {
        borderBottom: "solid 1px #e0e3e5",
        padding: "20px",
        width: "100%",
        ">div": {
            justifyContet: "space-between",
            width: "100%",
        }
    }
}))
const FilteredItems = styled(Box)(({ theme }) => ({
    ">div": {
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
        borderRadius: "5px",
        padding: "8px 8px",
        backgroundColor: "#ded9db",



    }
}))
const StyledFilterBox = styled(Box)(({ theme }) => ({
    // ':hover':{
    //     content:"",
    //     postion:"absolute",
    //     width:"5px",
    //     height:"10px",
    //     backgroundColor:"black",
    // }


}))

export default function Filter() {
    const disptach = useDispatch();
    const [change, setChange] = useState(false);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const filters = useSelector((state) => state.filterReducer);
    const arr = ["BRAND", "CUSTOMER RATINGS", "IDEAL FOR", "COMPATIBLE OS", "FEATURES", "STRAP MATERIAL", "USAGE", "OFFERS", "GST INVOICE AVAILABLE", "AVAILABILITY"];
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");



    // remaing work 
   
    useEffect(() => {
        document.querySelectorAll(".filter-component input").forEach((item, idx) => {
            item.addEventListener("change", (e) => {
                let text = item.parentElement.nextElementSibling.textContent;
                disptach(addFilter(text));
                setChange((change) ? false : true);

            })
        })


    })

    return (

        <>

            <FilterComponent className=" mx-2 bg-white filter-component">
                <ListItem className="p-2 px-3">
                    <Box >
                        <Box className="d-flex justify-content-space-between">
                            <Typography variant="span" className="text-bold text-dark" style={{ letterSpacing: "1.2px" }}>Filters</Typography>
                            <Typography variant="span" className=" text-primary text-small text-bold " style={{ fontSize: "12px" }}>CLEAR ALL</Typography>
                        </Box>
                        <FilteredItems className="d-flex gap-2 mt-2 filter-items" style={{ flexWrap: "wrap", fontSize: "12px" }}>
                            {
                                filters.map((filter, idx) => {

                                    return (
                                        <>
                                            <StyledFilterBox className="YcSYyC" onClick={() => {
                                                disptach(removeFilter(filter));
                                                setChange((change) ? false : true);
                                            }} style={{ cursor: "pointer" }}>
                                                <Box className="BFyQP7">✕</Box>
                                                <Box className="_6tw8ju ">{filter}</Box>
                                            </StyledFilterBox>
                                        </>
                                    )
                                })
                            }



                        </FilteredItems>
                    </Box>

                </ListItem>
                <ListItem >
                    <Box >
                        <Typography className="text-bold" style={{ fontSize: "12px" }} >CATEGORIES</Typography>
                        <Typography className=" my-2 text-muted" style={{ fontSize: "13px" }} > <ChevronLeftIcon /> Mobiles & Accessories..</Typography>
                        <Typography className="px-2 text-bold" style={{ fontSize: "13px" }}>Smart Watches</Typography>
                    </Box>

                </ListItem>
                <ListItem >
                    <Box>
                        <Box className="d-flex justify-content-space-between">
                            <Typography variant="span" className="text-bold text-dark" style={{ letterSpacing: "1px", fontSize: "12px" }}>PRICE</Typography>
                            <Typography variant="span" className=" text-primary text-small text-bold " style={{ fontSize: "12px" }}>CLEAR </Typography>
                        </Box>
                        <Box sx={{ width: "100%" }}>
                            <Slider defaultValue={100} className="text-primary" disabled aria-label="Default" valueLabelDisplay="auto" />
                        </Box>




                        <Box className="d-flex gap-2" style={{ alignItems: "center" }}>
                            <div ><select ><option value="Min" >Min</option><option value="10000" >₹10000</option><option value="15000" >₹15000</option><option value="20000" >₹20000</option><option value="30000" >₹30000</option></select></div><div >to</div><div ><select ><option value="10000" >₹10000</option><option value="15000" >₹15000</option><option value="20000" >₹20000</option><option value="30000" >₹30000</option><option value="Max" >₹30000+</option></select>
                            </div>
                        </Box>

                    </Box>

                </ListItem>
                <ListItem style={{ paddingBlock: "10px" }}>
                    <Box className="d-flex gap-2  align-item-center ">
                        <FormControlLabel control={<Checkbox />} />
                        <Box className="SwtzWS">
                            <img height="21" src={fassured} className="SwtzWS" />
                        </Box>
                        <Box style={{ marginLeft: "auto" }}>
                            <HelpOutlineIcon />
                        </Box>
                    </Box>
                </ListItem>
                <ListItem>

                </ListItem>
                {
                    mobile_feature.map((val, idx) => {
                        return (
                            <>
                                <ListItem style={{ paddingBlock: "10px" }}>
                                    <ProdFeatureSelect items={{ featureTitle: val.featureTitle, featureList: val.featureList }} />
                                </ListItem>
                            </>

                        )
                    })
                }




            </FilterComponent>


        </>
    )
}

