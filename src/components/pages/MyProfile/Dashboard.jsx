import { styled, Box, ListItem, List, Link, Typography } from "@mui/material";
import { Link as routerLink } from "react-router-dom"
import { removeToken } from "../auth/cookieAction";
import { removeUser } from "../auth/cookieAction";
import { useNavigate } from 'react-router-dom';
const BottomComponent = styled(Box)(({ theme }) => ({
    ">ul>li>div": {
        width: "100%"
    },
    ">ul>li": {
        borderBottom: "solid 1px #f7f3f3",
        paddingBlock: "14px !important",


    },
    ">ul>li ul li": { marginLeft: "35px", fontSize: "13.5px", },
    ">ul>li ul": { marginTop: "10px" },
    "ul>li": {
        paddingBlock: "10px",
    },
    "p,span,li": {
        fontSize: "15px",
        letterSpacing: "0.8px",
    }

}))
const Component = styled(Box)(({ theme }) => ({

}))



export default function Dashboard() {
    const navigate = useNavigate();
    const logoutHandle = () => {
        removeToken();
        removeUser();
        navigate("/");
    }
    return (
        <>

            <Component className="">
                <Box className="d-flex gap-3 bg-white px-3 py-2" style={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)" }}>
                    <Link>
                        <img height="50px" width="50px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" />
                    </Link>
                    <Box>
                        <Typography variant="small" style={{ fontSize: "12px" }}>Hello,</Typography>
                        <Typography className="text-bold">Govind Lohar</Typography>
                    </Box>
                </Box>


                <BottomComponent className="bg-white mt-3 px-2" style={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)" }}>

                    <List className="">
                        <ListItem >
                            <Box className="d-flex align-items-center gap-4" style={{

                            }}>

                                <Link><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg==" /></Link>

                                <Link to="/account/orders" className="d-block w-100" component={routerLink}>
                                    <Box className="d-flex align-item-center w-100" style={{ justifyContent: "space-between" }}>
                                        <Typography className=" text-bold" style={{ color: "#878787" }}>MY ORDERS</Typography>
                                        <span style={{ transform: "rotate(180deg)" }}><svg width="15" height="16" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"  ></path></svg></span>
                                    </Box>
                                </Link>


                            </Box>
                        </ListItem>
                        <ListItem>
                            <Box>
                                <Box className="d-flex gap-4">
                                    <Link><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4=" /></Link>
                                    <Typography className="text-bold" style={{ color: "#878787" }}>ACCOUNT SETTING</Typography>
                                </Box>
                                <List className="mx-auto">
                                    <ListItem><Link to="/account" component={routerLink} className="text-dark">Profile Information</Link></ListItem>
                                    <ListItem><Link to="/account/addresses" component={routerLink} className="text-dark">Manage Addressess</Link></ListItem>
                                    <ListItem><Link to="/account/pancard" component={routerLink} className="text-dark">PAN Card Information</Link></ListItem>
                                </List>
                            </Box>
                        </ListItem>


                        <ListItem>
                            <Box>
                                <Box className="d-flex gap-4">
                                    <Link><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+" /></Link>
                                    <Typography className=" text-bold" style={{ color: "#878787" }}>PAYMENTS</Typography>
                                </Box>
                                <List>
                                    <ListItem>
                                        <Link to="/account/giftcard" component={routerLink} className="text-dark w-100">
                                            <Box className="d-flex align-items-center w-100" style={{ justifyContent: "space-between" }}>

                                                <Typography style={{ fontSize: "12px" }}>Gift Cards</Typography>
                                                <Typography className="mx-3">₹50</Typography>
                                            </Box>
                                        </Link>
                                    </ListItem>
                                    <ListItem> <Link to="/account/vpadetails" component={routerLink} className="text-dark w-100">Saved UPI</Link> </ListItem>
                                    <ListItem> <Link to="/account/cardsdetails" component={routerLink} className="text-dark w-100">Saved Cards</Link></ListItem>
                                </List>
                            </Box>
                        </ListItem>


                        <ListItem>
                            <Box>
                                <Box className="d-flex gap-4">
                                    <Link>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIzIDE5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjUgMi43NWgtOUw5LjI1LjVIMi41QTIuMjQ3IDIuMjQ3IDAgMCAwIC4yNiAyLjc1bC0uMDEgMTMuNUEyLjI1NyAyLjI1NyAwIDAgMCAyLjUgMTguNWgxOGEyLjI1NyAyLjI1NyAwIDAgMCAyLjI1LTIuMjVWNWEyLjI1NyAyLjI1NyAwIDAgMC0yLjI1LTIuMjV6bS01LjYyNSAzLjM3NWEyLjI1NyAyLjI1NyAwIDAgMSAyLjI1IDIuMjUgMi4yNTcgMi4yNTcgMCAwIDEtMi4yNSAyLjI1IDIuMjU3IDIuMjU3IDAgMCAxLTIuMjUtMi4yNSAyLjI1NyAyLjI1NyAwIDAgMSAyLjI1LTIuMjV6bTQuNSA5aC05VjE0YzAtMS40OTYgMy4wMDQtMi4yNSA0LjUtMi4yNXM0LjUuNzU0IDQuNSAyLjI1djEuMTI1eiIvPjxwYXRoIGQ9Ik0tMi00aDI3djI3SC0yeiIvPjwvZz48L3N2Zz4="></img>
                                    </Link>

                                    <Typography className=" text-bold" style={{ color: "#878787" }}>MY STUFF</Typography>
                                </Box>
                                <List>
                                    <ListItem> <Link to="/account/rewards" component={routerLink} className="text-dark w-100">My Coupons</Link> </ListItem>
                                    <ListItem> <Link to="/account/reviews" component={routerLink} className="text-dark w-100">My Reviews & Ratings</Link> </ListItem>
                                    <ListItem> <Link to="/account/notification" component={routerLink} className="text-dark w-100">All Notifications</Link> </ListItem>
                                    <ListItem> <Link to="/account/wishlist" component={routerLink} className="text-dark w-100">My Whishlist</Link> </ListItem>

                                </List>
                            </Box>

                        </ListItem>

                        <ListItem >
                            <Box className="d-flex align-items-center " style={{
                                justifyContent: "space-between"
                            }}>
                                <Box className="d-flex gap-4 align-items-center">
                                    <Link>
                                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#2874F0" stroke-width="0.3" stroke="#2874F0" d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></svg>
                                    </Link>
                                    <Typography className=" text-bold" style={{ color: "#878787", cursor: "pointer", }} onClick={logoutHandle}>Logout</Typography>

                                </Box>


                            </Box>
                        </ListItem>

                    </List>
                </BottomComponent>
                <Box className=" bg-white px-3 py-2 mt-3" style={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)" }}>

                    <Box>
                        <Typography className="text-bold" style={{ fontSize: "12px" }}>Frequently Visited:</Typography>
                        <Link to="/account/orders" className="text-dark text-muted" component={routerLink} fontSize="12px">Track Order</Link>
                        <Link to="/helpcentre" className="text-dark mx-3 text-muted" component={routerLink} fontSize="12px" >Help Center</Link>
                    </Box>
                </Box>

            </Component >

        </>
    )
}