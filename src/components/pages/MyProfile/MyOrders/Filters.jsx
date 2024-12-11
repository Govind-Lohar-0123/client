import { Box, styled, Link, List, ListItem, Typography, FormControl, Grid, Slider, FormGroup, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useEffect, useState } from "react";
import OrdersFeatureList from "./OrderFeatureList";
import { Link as routerLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter } from "../../../react_redux/redux/actions/FilterActions";
import { order_feature } from "../../partials/data";






const FilterComponent = styled(Box)(({ theme }) => ({
    // fontSize: "12px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)",
    "li": {
        borderBottom: "solid 1px #fcf8f8",
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

const Component=styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]:{
        whiteSpace:"nowrap",
        overflowX:"scroll",
        display:"flex"
    }
}))

export default function Filters() {
    const disptach = useDispatch();
    const [change, setChange] = useState(false);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const filters = useSelector((state) => state.filterReducer);
    
    



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

            <FilterComponent className="  bg-white filter-component">
                <List>
                    <ListItem className="p-2 px-3">
                        <Box >
                            <Box className="d-flex justify-content-space-between">
                                <Typography variant="span" className="text-bold text-dark" style={{ letterSpacing: "1.2px" }}>Filters</Typography>
                                <Typography variant="span" className=" text-primary text-small text-bold " style={{ fontSize: "14px" }}>Clear all</Typography>
                            </Box>
                            <FilteredItems className="d-flex gap-2 mt-2 filter-items" style={{ flexWrap: "wrap", fontSize: "12px" }}>
                                {
                                    filters.map((filter, idx) => {
                                            
                                        return (
                                            <>
                                                <StyledFilterBox  onClick={() => {
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


                    <Component>{
                        order_feature.map((val, idx) => {
                            return (
                                <>
                                    <ListItem style={{ paddingBlock: "10px" }}>
                                        <OrdersFeatureList items={{ featureTitle: val.featureTitle, featureList: val.featureList }} />
                                    </ListItem>
                                </>

                            )
                        })
                    }
                    </Component>



                </List>

            </FilterComponent>


        </>
    )
}

