import { Toolbar, Typography, Box, styled, Drawer, Link, IconButton, List, ListItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
import { useState } from "react";
import Menu from '@mui/icons-material/Menu';
const DrawerList = styled(Box)(({ theme }) => ({
    "a": {
        color: "black",
        marginLeft:"20px",
        color:"white !important"
    },
    "li":{textAlign:"center",
        backgroundColor:"blue",
        marginBlock:"5px",
        borderRadius:"3%",
        width:"80%",
        cursor:"pointer",
        marginInline:"auto",

    }

}))
const MenuIcon = styled(IconButton)(({ theme }) => ({
    color: "dark",
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block"
    }
}))
const DrawerComponent = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Box >
            <Box >
                <MenuIcon onClick={handleOpen}>
                    <Menu />
                </MenuIcon>

            </Box>


            <Drawer open={open} onClose={handleClose}>


                <DrawerList style={{ width: "300px" }} className="mt-3 text-center">
                    <List className="">

                        <ListItem ><Link component={RouterLink} to='/login'>Login & Signup</Link></ListItem>

                        <hr />

                        <ListItem ><Link component={RouterLink} to='/account'>My Account</Link></ListItem>


                        <ListItem ><Link component={RouterLink} to='/account/orders'>My Orders</Link></ListItem>


                        <ListItem > <Link component={RouterLink} to='/account/rewards'>My Coupons  </Link></ListItem>


                        <ListItem ><Link component={RouterLink} to='/account/view-carts'>My Cart</Link></ListItem>


                        <ListItem ><Link component={RouterLink} to='/account/wishlist'>My Wishlist</Link></ListItem>


                        <ListItem > <Link component={RouterLink} to='/account/notification'>My Notification</Link></ListItem>


                        <hr />

                        <ListItem > <Link component={RouterLink} to='/supercoins'>SuperCoin Zone </Link></ListItem>



                        <ListItem > <Link component={RouterLink} to='/plus'>Flipkar Plus Zone   </Link></ListItem>

                        <hr />








                    </List>
                </DrawerList>
            </Drawer>
        </Box>
    )
}

export default DrawerComponent;