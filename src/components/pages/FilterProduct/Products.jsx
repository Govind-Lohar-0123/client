import { Box, Tpography, Link, styled, List, Typography, Grid, ListItem, Pagination, Button } from "@mui/material"
import Card2 from "./Cards/Card2"
import { Link as routerLink, useParams } from "react-router-dom"
import { getProductsByLimit } from "../../react_redux/redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
const ListStyle = styled(List)(({ theme }) => ({
    "li": {
        width: "auto", fontSize: "14px", cursor: "pointer",
        marginBottom:"15px"

    },
    [theme.breakpoints.down("md")]: {
        overflowX: "scroll",
        whiteSpace:"nowrap"
    }
}))

const active = {
    color: "#2874f0",
    cursor: "default",
    borderBottom: "2px solid #2874f0",
    fontWeight: "bold",

    transition: "all 1s easy",
}

export default function Product() {
    let { prod_title } = useParams();
    const [sortBy, setSortBy] = useState("Popularity");
    const [page, setPage] = useState(1);
    let size = 4;

    const handleChange = (e) => {

        setPage(e.target.value);
    }

    const disptach = useDispatch();
    const prods = useSelector((state) => state.getProd).prod;
    useEffect(() => {
        disptach(getProductsByLimit(page, 40));
    }, [])


    useEffect(() => {
        document.querySelectorAll(".paginate button").forEach((e, idx) => {

            if (e.value == page) e.classList.add("active");
            else e.classList.remove("active");
        })
    }, [])

    return (<>

        <Box className="p-2 px-4  w-100 " style={{ backgroundColor: "#FFFFFF" }}>
            <Box>
                <Box className=" text-muted mt-1" style={{ fontSize: "12px" }} >
                    <List className="d-flex align-item-center gap-3 p-0 m-0" style={{ justifyContent: "flex-start" }}>
                        <ListItem className="px-0 py-0 w-auto"><Link to="/" component={routerLink} style={{ color: "#878787" }}>Home </Link></ListItem>
                        <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)", }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="wMLTcO"></path></svg></Link></ListItem>
                        <ListItem className="px-0  py-0 w-auto"><Link to="/account" component={routerLink} style={{ color: "#878787" }}>Mobiles & A...</Link></ListItem>
                        <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)" }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="wMLTcO"></path></svg></Link></ListItem>

                        <ListItem className="px-0  py-0 w-auto"><Link to="/account/orders" component={routerLink} style={{ color: "#878787" }}>Mobiles</Link></ListItem>
                        <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)" }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="wMLTcO"></path></svg></Link></ListItem>

                        {/* <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787" }}> Search Results</Link></ListItem> */}
                    </List>
                </Box>
                <Box className="my-2 d-flex align-item-center">
                    <Typography variant="span " className="text-bold" style={{ fontSize: "1rem", letterSpacing: "1px" }}>Vivo T2x 5G</Typography>
                    <Typography variant="span" className="mx-3 text-bold " style={{ fontSize: "12px", color: "#878787" }} >(Showing 1 – 14 products of 14 products)</Typography>
                </Box>
            
                    <ListStyle className="d-flex  align-item-center mt-2">


                        <ListItem className="text-bold">Sort By</ListItem>


                        <ListItem onClick={(e) => setSortBy(e.target.textContent)} style={(sortBy == "Popularity") ? active : {}}>Popularity</ListItem>


                        <ListItem onClick={(e) => setSortBy(e.target.textContent)} style={(sortBy == "Price--Low to High") ? active : {}}>Price--Low to High</ListItem>


                        <ListItem onClick={(e) => setSortBy(e.target.textContent)} style={(sortBy == "Price--High to Low") ? active : {}}>Price--High to Low</ListItem>


                        <ListItem onClick={(e) => setSortBy(e.target.textContent)} style={(sortBy == "Newest First") ? active : {}}>Newest First</ListItem>


                    </ListStyle>
        
            </Box>
            <hr className="w-100 mt-0 p-0 mb-5" />
            <Box className="mt-5">
                <Grid container lg={12} className="mx-auto">
                    {

                        prods.filter((prod) => (prod.content.title.toLowerCase().includes("")))
                            .map((prod, idx) => {




                                return <>
                                    <Grid item lg={3} md={4} sm={6} xs={10} className="mx-auto" key={idx}>
                                        <Link className="text-dark w-100 d-block" to={`/detail-view/${prod._id}`} component={routerLink}>
                                            <Card2 prod={prod} />
                                        </Link>
                                    </Grid>

                                </>

                            })
                    }
                </Grid>
                <hr />
                <nav className="w-25 mx-auto paginate">
                    <List className="d-flex align-item-center " style={{ justifyContent: "center" }}>
                        <ListItem>
                            <Button variant='contained' value="Prev" className={` ${((page == 1) ? "d-none" : "")}`} onClick={() => setPage(page - 1)}>Prev</Button>
                        </ListItem>
                        {
                            Array.from(new Array(size), (val, idx) => (
                                <ListItem>
                                    <Button variant='contained' onClick={handleChange} value={idx + 1}>{idx + 1}</Button>
                                </ListItem>
                            ))
                        }



                        <ListItem>
                            <Button variant='contained' onClick={() => setPage(page + 1)} className={(page == size) ? "d-none" : ""} value="Next">Next</Button>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </Box>

    </>)
}