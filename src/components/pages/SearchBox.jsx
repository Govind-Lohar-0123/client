import React, { useState } from 'react'
import { Box, InputBase, ListItem, styled } from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const StyledInputBase = styled(InputBase)`
   
    font-size:14px;
    width:90%;
    font-weight:bold,;
   background-color:transparent;
    
`
const SearchContainer = styled(Box)`
    box-shadow:0 0 3px rgba(0, 0, 0, .2);
    background-color:white;
    width:100%
    
`
const ListWrapper = styled(Box)(({ theme }) => ({
    position: "absolute",
    backgroundColor: "white",
    color: "black",
    width: "100%",
    top: "40px",
}))

export default function SearchBox() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const prod_data = useSelector((state) => state.getProd);
    // useEffect(()=>{
    //     dispatch(getProducts());
    // },[dispatch])


    const searchHandle = (e) => {
        setSearch(e.target.value);

        // dispatch(searchAction(e.target.value));
    }



    return (
        <>

            <SearchContainer className="" style={{ paddingLeft: "1rem", paddingBlock: "3px" }}>
                {/* <Box>
                    <button style={{border:"none"}} className="_2iLD__ border-none" type="submit" aria-label="Search for Products, Brands and More" title="Search for Products, Brands and More"><svg width="24" height="24" className="border-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                    <StyledInputBase value={search} className=" text-dark px-2" placeholder='Search for Product , brands and more' onChange={searchHandle} />
                </Box> */}
                <Box>

                    <StyledInputBase value={search} className="border-none text-dark px-2 text-bold" placeholder='Search for Product , brands and more' onChange={searchHandle} />
                    <button style={{ border: "none" }} className="_2iLD__ border-none" type="submit" aria-label="Search for Products, Brands and More" title="Search for Products, Brands and More"><svg width="24" height="24" className="border-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                </Box>

                <ListWrapper >
                    {
                        (search && prod_data) && (prod_data.prod.filter(prod => prod.title.longTitle.toLowerCase().includes(search.toLowerCase())).map(prod => {

                            return (<ListItem>
                                <Link to={"/detail-view/" + prod._id} onClick={() => setSearch("")}>{prod.title.longTitle}</Link>
                            </ListItem>)
                        })
                        )
                    }

                </ListWrapper>

            </SearchContainer>


        </>
    )
}
