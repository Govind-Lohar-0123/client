import { Box, Tpography, Link, styled, List, Typography, Grid, ListItem } from "@mui/material"
import Card1 from "./Cards/Card1"
import Card2 from "./Cards/Card2"
import { Link as routerLink, useParams } from "react-router-dom"
import { useEffect } from "react";
import { getProducts } from "../../react_redux/redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";


const ListStyle = styled(List)(({ theme }) => ({
    "li": {
        width: "auto", fontSize: "14px", cursor: "pointer",

    },
    // "li:": {
    //     borderBottom: "2px solid #2874f0",

    // }
}))

export default function Product({ prods }) {

    const { cat_id } = useParams();

    return (<>

        <Box className="p-2 px-4  w-100 h-100" style={{ backgroundColor: "#FFFFFF" }}>
            <Box>
                <Box className=" text-muted mt-1" style={{ fontSize: "12px" }} >
                    <List className="d-flex align-item-center gap-3 p-0 m-0" style={{ justifyContent: "flex-start" }}>
                        <ListItem className="px-0 py-0 w-auto"><Link to="/" component={routerLink} style={{ color: "#878787" }}>Home </Link></ListItem>
                        <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)", }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="wMLTcO"></path></svg></Link></ListItem>
                        <ListItem className="px-0  py-0 w-auto"><Link to="/account" component={routerLink} style={{ color: "#878787" }}>Mobiles & A...</Link></ListItem>
                        <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)" }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="wMLTcO"></path></svg></Link></ListItem>

                        <ListItem className="px-0  py-0 w-auto"><Link to="/account/orders" component={routerLink} style={{ color: "#878787" }}>Mobiles</Link></ListItem>
                        <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)" }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="wMLTcO"></path></svg></Link></ListItem>

                        {/* <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787" }}> Search Results</Link></ListItem> */}
                    </List>
                </Box>
                <Box className="my-2 d-flex align-item-center">
                    <Typography variant="span " className="text-bold" style={{ fontSize: "1rem", letterSpacing: "1px" }}>Vivo T2x 5G</Typography>
                    <Typography variant="span" className="mx-3 text-bold " style={{ fontSize: "12px", color: "#878787" }} >(Showing 1 – 14 products of 14 products)</Typography>
                </Box>
                <ListStyle className="d-flex  align-item-center mt-2">


                    <ListItem>Sort By</ListItem>


                    <ListItem>Popularity</ListItem>


                    <ListItem>Price--Low to High</ListItem>


                    <ListItem>Price--High to Low</ListItem>


                    <ListItem>Newest First</ListItem>


                </ListStyle>
            </Box>
            <hr className="w-100 my-1" />
            <Box className="mt-2">
                <Grid container lg={12}>
                    {
                        prods.prods.map((prod, idx) => {
                            // if(idx==0)return <Grid item lg={3} ><Card2/></Grid>
                            // else return  (<Grid item lg={3}><Card2/></Grid>);

                            return <>
                                <Grid item lg={12} key={idx}>  <Link className="text-dark w-100" to={`/detail-view/${cat_id}/${idx}`} component={routerLink}><Card1 prod={prod} /></Link></Grid>
                                <hr className="w-100" /></>
                        })
                    }
                </Grid>
            </Box>
        </Box>

    </>)
}