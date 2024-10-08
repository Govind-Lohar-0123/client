import React, { useState } from 'react'
import { Box, InputBase, ListItem, styled, List, Typography ,Button} from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const StyledInputBase = styled(InputBase)`
   
    font-size:14px;
    width:90%;
    font-weight:bold,;
   background-color:transparent;
    
`
const SearchContainer = styled(Box)`
    // box-shadow:0 0 3px rgba(0, 0, 0, .2);
    background-color:white;
    width:80%;
    height:35px
    
`
const ListWrapper = styled(Box)(({ theme }) => ({
    position: "absolute",
    backgroundColor: "white",
    color: "black",
    width: "100%",
    zIndex: "11",
    top: "35px",
    left: 0
}))

export default function SearchBox() {
    const [search, setSearch] = useState("");

    const prod_data = useSelector((state) => state.getProd);



    const searchHandle = (e) => {
        setSearch(e.target.value);
    }



    return (
        <>

            <SearchContainer className="border " style={{  borderRadius: "20px" }} >

                <Box className="d-flex justify-content-space-between " >

                    <StyledInputBase value={search} style={{fontSize:"17px",marginLeft:"14px"}} className="text-bold" placeholder='Search' onChange={searchHandle} />
                    <Button  style={{height:"33px",backgroundColor: "#f5f6f4 ", borderEndEndRadius: "20px",borderStartEndRadius: "20px" }}>
                        <img alt="" width="37" src="https://rukminim2.flixcart.com/www/100/100/promos/20/07/2022/ea2077a7-575d-4fb9-a4dd-6df16e53c5d8.png?q=90" />
                    </Button>
                </Box>
                <ListWrapper sx={{ maxHeight: "400px", overflowY: "scroll" }}>

                    {search ? <hr className='p-0 m-0' /> : ""}
                    <List className="py-0">
                        {
                            (search && prod_data) &&
                            (prod_data.prod.filter((prod) => (prod.content.title.toLowerCase().includes(search.toLowerCase()))).
                                map(prod => {

                                    return (<ListItem className="py-2">

                                        <Link className="text-dark" style={{ fontSize: "14px" }} to={"/filter-product/" + prod._id} onClick={() => setSearch("")}>
                                            <img alt="" width="30" src="https://rukminim2.flixcart.com/www/100/100/promos/20/07/2022/ea2077a7-575d-4fb9-a4dd-6df16e53c5d8.png?q=90" />
                                            <Typography variant="span" className='mx-3'>{prod.content.title}</Typography>
                                        </Link>
                                    </ListItem>)
                                })
                            )
                        }

                    </List>
                </ListWrapper>

            </SearchContainer>


        </>
    )
}
