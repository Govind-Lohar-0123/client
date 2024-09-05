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
    display:"none important"
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
    }

}))




export default function Dropdown({list}) {
    return (
        <>
            <Component className="bg-white d-none filter-dropdown" >

            {
               list.map((arr,idx)=>{

            
                return <Box  className="p-3"style={{backgroundColor:(idx%2==1)?"#F7F8FA" :"white"}}>
                    <List className="">
                        {
                            arr.map((item, idx) => {
                                return (
                                <ListItem>
                                    <Link component={routerLink} className="w-100  d-flex"  >
                                        <Typography variant="span" className="text-muted" style={{fontSize:"13px"}}>{item}</Typography>
                                        {/* <Typography variant="span" style={{marginLeft:"auto"}}><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="Chevron" className="-dOa_b XdYXbi" width="12" height="12" /></Typography> */}
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