import React, { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Typography, List, ListItem, Link } from '@mui/material';

import Badge from '@mui/material/Badge';
import { Link as routerLink } from "react-router-dom"
import { getCookie } from '../auth/cookieAction';
import { useSelector, useDispatch } from 'react-redux';
import UserIcon from '@mui/icons-material/AccountCircleOutlined';
import { getAllCarts } from '../../react_redux/redux/actions/cartAction';
import More from '@mui/icons-material/MoreVert';
import logOut from './logout';




const StyledBadge = styled(Badge)(({ theme }) => ({
    position: "absolute",
    top: -9,
    padding: '0 6px',
    borderRadius: "100%",
    right: -3,
    height: "22px",
    background: "red",
    color: "white",
    fontWeight: "bold",





}));

const StyledStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",

    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",


    [theme.breakpoints.down("lg")]: {

        gap: "5px",
    }


}))


const UserList = styled(Box)(({ them }) => ({
    position: "absolute",
    borderRadius: "8px",
    top: 45,
    width: "220px",
    boxShadow: "0px 0px 60px #e4e7e4",
    zIndex: 10,
    "svg": {
        marginRight: "10px"
    },
    "li": { fontSize: "13px" },
    "a": { color: "black" }

}))
const MoreList = styled(Box)(({ them }) => ({
    position: "absolute",
    borderRadius: "8px",
    top: 50,
    right: 60,
    width: "250px",
    zIndex: 10,
    "a": { color: "black" },
    "svg": {
        marginRight: "10px"
    },

}))

const Seller = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
        display: "none"
    },
    [theme.breakpoints.down("md")]: {
        display: "inline"
    },
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },

}))
const Cart = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
        display: "none"
    },
    [theme.breakpoints.down("md")]: {
        display: "inline"
    },
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },

}))
const LinkStyle = styled(Link)(({ theme }) => ({


    [theme.breakpoints.down("sm")]: {
        display: "none"
    },

}))
const LoginStyle = styled(Box)(({ theme }) => ({
    width: "100px"
}))

let user =JSON.parse(getCookie("user"));


export default function CustomeButton1() {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCarts());
    }, [])


    const cartSize = useSelector(state => state.cart).prods;


    const logoutHandle = () => {
        logOut();
    }
    return (
        <>

            <StyledStack className="text-dark" >
                {(user != "" && user != null && user != undefined) ?
                    <Box className="username py-2" style={{ cursor: "pointer" }}>
                        <Box className="">
                            <LinkStyle component={routerLink} to="">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Govind " width="24" height="24" />
                            </LinkStyle>
                            <Typography variant="contained" className="mx-2" style={{ fontSize: "1rem" }} >{user.firstname}</Typography>
                            <LinkStyle><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="Chevron" width="12" height="12" />
                            </LinkStyle>
                        </Box>
                        <UserList className="bg-white text-dark user-dropdown-list d-none" >
                            <List className="gap-2">
                                <ListItem>
                                    <Link component={routerLink} to="/account">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="My Profile" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">My Profile</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/supercoins">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/supercoin-ce8408.svg" alt="SuperCoin Zone" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Super Coins</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/plus">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="Flipkart Plus Zone" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Flipkart Plus Zone</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/account/orders">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="Orders" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Ordered</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/account/wishlist">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="Wishlist (2)" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Wishlist</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/account/rewards">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/coupons-083172.svg" alt="Coupons" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Coupons</Typography>

                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/the-gift-card-store">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" alt="Gift Cards" width="24" height="24" />

                                        <Typography variant="span" className="mx-2">Gift Cards </Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/communication-preferences">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" alt="Notifications" width="24" height="24" />

                                        <Typography variant="span" className="mx-2">Notification</Typography>

                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} onClick={logoutHandle}>
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logout-e63ddf.svg" alt="Logout" width="24" height="24" />

                                        <Typography variant="span" className="mx-2">Logout</Typography>

                                    </Link>
                                </ListItem>




                            </List>
                        </UserList>
                    </Box>
                    :
                    <Box className="username py-2" style={{ cursor: "pointer" }}>
                        <LoginStyle>
                            <Link component={routerLink} to="">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Govind " width="24" height="24" />
                            </Link>
                            <Typography variant="contained" className="mx-2" style={{ fontSize: "1rem" }} >Login</Typography>
                            <Link><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="Chevron" width="12" height="12" />
                            </Link>
                        </LoginStyle>



                        <UserList className="bg-white text-dark user-dropdown-list d-none" style={{ width: "270px" }}>
                            <Box className="py-2 d-flex align-item-center justify-content-space-between">
                                <ListItem className=" d-flex align-item-center " style={{ justifyContent: "space-between", fontSize: "15px" }}>
                                    <Link to="/login" component={routerLink} style={{ cursor: "pointer" }}><Typography className="text-muted text-bold" variant="span">New Customer ?</Typography></Link>
                                    <Link to="/login" component={routerLink} style={{ cursor: "pointer" }}><Typography variant="span" className="text-primary text-bold">Sign Up</Typography></Link>
                                </ListItem>
                            </Box>
                            <hr className="p-0 m-0" />

                            <List className="gap-1">
                                <ListItem>
                                    <Link component={routerLink} to="/account">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="My Profile" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">My Profile</Typography>
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link component={routerLink} to="/plus">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="Flipkart Plus Zone" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Flipkart Plus Zone</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/account/orders">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="Orders" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Ordered</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/account/wishlist">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="Wishlist (2)" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Wishlist</Typography>
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link component={routerLink} to="/rewards">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg" alt="Rewards" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Rewards</Typography>

                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/the-gift-card-store">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" alt="Gift Cards" width="24" height="24" />

                                        <Typography variant="span" className="mx-2">Gift Cards </Typography>
                                    </Link>
                                </ListItem>





                            </List>
                        </UserList>

                    </Box>

                }
                <Link className="text-dark " to="/account/view-carts" component={routerLink} >
                    <Link className="_3CowY2" style={{ cursor: "pointer", position: "relative" }} >
                        <StyledBadge variant="span" className="_2U7eDE">{(cartSize != undefined) ? cartSize.length : 0}</StyledBadge><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" width="24" height="24" />
                    </Link>
                    <Cart variant="span" style={{ fontSize: "1rem" }} className="mx-1"> Cart</Cart>
                </Link>
                <Box>
                    <Link to="" href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&amp;utm_medium=websitedirect" title="Become a Seller" className="_3RX0a- _3jeYYh"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" className="_1XmrCc" /></Link>
                    <Seller variant="span" style={{ fontSize: "1rem" }} className="mx-1 "> Become a Seller</Seller>
                </Box>
                <Box>
                    <Box className="more-icon p-2"><More /> </Box>

                    <MoreList className="bg-white text-dark more-dropdown-list d-none" style={{ right: "35px" }}>
                        <List className="gap-2">
                            <ListItem> <Link component={routerLink} to="/communication-preferences"><UserIcon />Notification Preffrence</Link></ListItem>
                            <ListItem> <Link component={routerLink} to="/helpcentre"><UserIcon />24 x 7 Customer Care</Link></ListItem>
                            <ListItem><Link component={routerLink} to="#"><UserIcon />Advertise</Link></ListItem>
                            <ListItem><Link component={routerLink} to="/download-app"><UserIcon />Download App</Link></ListItem>

                        </List>
                    </MoreList>
                </Box>

                {/* <Typography variant="contained" className='' ><i className="fa-1x  fa-solid fa-cart-shopping" style={{ fontSize: "1.5rem" }}></i>Card</Link></Typography> */}
            </StyledStack >

        </>
    )
}