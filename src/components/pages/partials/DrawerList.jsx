import { Toolbar, Typography, Box, styled, Drawer, Link, IconButton, List, ListItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
import { useState } from "react";
import Menu from '@mui/icons-material/Menu';
const DrawerList = styled(Box)(({ theme }) => ({
    "a": {
        color: "black",
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
        <Box>
            <Box>
                <MenuIcon onClick={handleOpen}>
                    <Menu />
                </MenuIcon>
               
            </Box>
            

            <Drawer open={open} onClose={handleClose}>


                <DrawerList style={{ width: "300px" }} >
                    <List >
                        <Link component={RouterLink} to=''>
                            <ListItem >Login & Signup</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >SuperCoin Zone</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >Flipkar Plus Zone</ListItem>
                        </Link>
                        <hr />
                        <Link component={RouterLink} to=''>
                            <ListItem >All Categories</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >More on Flipkart</ListItem>
                        </Link>
                        <hr />
                        <Link component={RouterLink} to=''>
                            <ListItem >Choose Language</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >Offer Zone</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >Sell on Flipkart</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >My Orders</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >Coupons</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >My Cart</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >My Wishlist</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >My Account</ListItem>
                        </Link>
                        <Link component={RouterLink} to=''>
                            <ListItem >My Notification</ListItem>
                        </Link>



                    </List>
                </DrawerList>
            </Drawer>
        </Box>
    )
}

export default DrawerComponent;