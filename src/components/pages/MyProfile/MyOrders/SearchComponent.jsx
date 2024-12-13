

import { Box, styled, } from "@mui/material";
const InputStyled=styled("input")(({theme})=>({
    padding:"10px",
    
    border:"1px solid #dbdbdb"
    
}))
const ButtonStyled=styled("button")(({theme})=>({
    background:" #2874f0",
    color: "#fff",
    borderRadius:" 0 4px 4px 0",
    width:"180px",
    fontSize:"13px",
    fontWeight:"bold",letterSpacing:"1px",
    boxShadow:" 0 2px 4px 0 rgba(0, 0, 0, .2)",
    border: "none"
    
}))
const SearchBoxStyled=styled(Box)(({theme})=>({
    "&:hover":{
        boxShadow:"2px 5px 10px 2px #dbdbdb !important",
    },
    transition: "box-shadow .1s linear"
}))

export default function SearchComponent(){


    return(

        <>
            <SearchBoxStyled >
                <Box  className="d-flex ">
                    <InputStyled type="text" style={{fontSize:"14px",letterSpacing:"0.8px"}}className="w-100 "  placeholder="Search your orders here" />
                    <ButtonStyled className="QqFHMw jSsVO- M5XAsp " fdprocessedid="5zmi6"><div ><svg width="16" height="16" viewBox="0 0 17 18"  xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path  d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path  d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg><span>Search Orders</span></div></ButtonStyled>
                </Box>
               
            </SearchBoxStyled>
        
        </>
    )
}