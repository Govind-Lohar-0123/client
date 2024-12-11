import { Box, List, ListItem, styled, Grid,Link, Typography } from "@mui/material"
import { Link as routerLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';

const Component = styled(Box)(({ theme }) => ({
    position: "absolute",
   width:"100%",
   top:37,
   left:1,
   [theme.breakpoints.down("md")]:{
    display:"none important",
    
   }
,
    zIndex: 100,
    justifyContent: "space-between",
    display: "flex",
    ">div":{width:"100%"},
    
    "& ul": {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },

    "a": {
        color: "black !important",
    },
    "li:hover": {
        fontWeight: "bold",
        backgoundColor: "red !important",
    },
   
      
    

}))




export default function Dropdown({list}) {
    return (
        <>
            <Component className="bg-white d-none filter-dropdown" >

            {
               list.map((arr,idx)=>{

            
                return <Box  className="p-3"style={{backgroundColor:(idx%2==1)?"#F7F8FA" :"white"}}>
                    <List className="" >
                        {
                            arr.map((item, idx) => {
                                return (
                                <ListItem>
                                    <Link component={routerLink} className="w-100  d-flex"  >
                                        <Typography variant="span" className="text-muted" style={{fontSize:"13px"}}>{item}</Typography>
                                    </Link>
                                </ListItem>);
                            })
                        }

                    </List>
                </Box>
                

                
            })
        }   
            </Component >
        </>
    )
}