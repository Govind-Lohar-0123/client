import { Box, Grid, Link, Typography, List, ListItem, styled, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import { Link as routerLink } from "react-router-dom";



const LeftComponent = styled(List)(({ theme }) => ({
    "p": {
        fontSize: "14px",
        textAlign: "center",
        width: "100%"
    },
    [theme.breakpoints.down("md")]:{
        width:"100%"
    },
    width: "80%",
    marginInline: "auto",
    li: {
        padding: "15px"
    }
}))
const RightComponent = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateRows: "auto auto auto",
    gridTemplateColumns: "auto auto auto",
    justifyContent: "center",
    alignItems: "center"
}))


export default function Notifi_Preffrence() {

    const arr = [
        { title: "My Orders", text: "Latest updates on your orders" },
        { title: "Reminders", text: "Price Drops, Back-in-stock Products, etc." },
        { title: "Recommendations by Flipkart", text: "Products, offers and curated content based on your interest" },
        { title: "New Offers", text: "Top Deals and more" },
        { title: "My Flipkart Community", text: "Profile updates, Newsletters, etc." },
        { title: "Feedback and Review", text: "Rating and Reviews for your purchase" }

    ]
    return (
        <>


            <Box style={{ width: "90%" }} className="mx-auto mt-5" >


                <Grid container  className="gap-2 mt-2">
                    <Grid item lg={3.5} md={3.5} sm={6}className="bg-white" style={{
                        borderRadius: "2px", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)",
                        marginInline:"auto"
                    }}>
                        <Box className="px-4 py-3">
                            <Box className="d-flex align-item-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><g fill="none" fill-rule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F1" d="M6.17 13.61c-1.183 0-1.922-.723-1.922-1.88H8.09c0 1.157-.74 1.88-1.92 1.88zm4.222-5.028l1.465 1.104v1.07H0v-1.07l1.464-1.104v-2.31h.004c.035-2.54 1.33-4.248 3.447-4.652V.992C4.915.446 5.37 0 5.928 0c.558 0 1.014.446 1.014.992v.628c2.118.404 3.412 2.112 3.446 4.65h.004v2.312z"></path></g></svg>
                                <Typography className="text-bold " style={{ color: " #878787", fontSize: "14px", textTransform: "uppercase" }}>Notification Preferences</Typography>
                            </Box>
                            <LeftComponent className="text-white text-center">

                                <ListItem>
                                    <Link component={routerLink} to="/communication-preferences">
                                        <Typography className=" text-dark" >Desktop Notifications</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/communication-preferences">
                                        <Typography className="text-dark">In-App Notifications</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/communication-preferences">
                                        <Typography className=" text-dark">SMS</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/communication-preferences">
                                        <Typography className=" text-dark">Email</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/communication-preferences">
                                        <Typography className=" text-dark">WhatsApp</Typography>
                                    </Link>
                                </ListItem>


                            </LeftComponent>
                        </Box>
                    </Grid>
                    <Grid item lg={8.2} md={8} sm={10} className="bg-white" style={{
                        marginInline: "auto",
                        borderRadius: "2px", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)"
                    }}>
                        <Box className="p-4">

                            <Box className="d-flex gap-4 align-item-center mb-4">
                                <Typography className="text-bold" style={{ fontSize: "18px" }} >Desktop Notifications</Typography>

                            </Box>
                            <Grid container >
                                <Grid item lg={6} style={{ opacity: "0.6" }}>
                                    {
                                        Array.from(arr, (item, idx) => {
                                            return (
                                                <>
                                                    <Box className="my-3" key={idx}>
                                                        <FormGroup >

                                                            <Box className="d-flex align-item-center " >
                                                                <FormControlLabel className="mx-0" control={<Checkbox defaultChecked size="small" />} label="" />
                                                                <Box className="w-100 d-flex py-2" style={{ borderBottom: " 1px solid #e0e0e0" }}>
                                                                    <Box>
                                                                        <Typography style={{ fontSize: "14px" }}>{item.title}</Typography>
                                                                        <Typography style={{ fontSize: "12px", color: " #878787" }}>{item.text}</Typography>
                                                                    </Box>
                                                                    <svg width="9" height="11" viewBox="0 0 16 27" style={{ marginLeft: "auto", transform: "rotate(271deg)" }} xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"></path></svg>
                                                                </Box>
                                                            </Box>



                                                        </FormGroup>
                                                    </Box>
                                                </>
                                            )
                                        })
                                    }

                                </Grid>
                                <Grid item lg={6}>
                                    <Box className="mx-auto text-center mt-5" style={{ width: "264px", }}>
                                        <RightComponent className="mx-auto">
                                            <div><img src="https://rukminim2.flixcart.com/www/110/110/promos/15/02/2019/b2716b3f-3f6b-458f-ba09-3705401d2c18.png?q=100" style={{ width: "88px", height: "88px" }} /></div>
                                            <div><img src="https://rukminim2.flixcart.com/www/110/110/promos/15/02/2019/b2716b3f-3f6b-458f-ba09-3705401d2c18.png?q=100" style={{ width: "88px", height: "88px" }} /></div>
                                            <div style={{ placeSelf: "end" }}><img src="https://rukminim2.flixcart.com/www/110/110/promos/15/02/2019/b2716b3f-3f6b-458f-ba09-3705401d2c18.png?q=100" style={{ width: "88px", height: "88px" }} /></div>
                                            <div></div>
                                            <div><img src="https://rukminim2.flixcart.com/www/110/110/promos/14/02/2019/611123aa-1534-4c7d-8537-85ad9f9e8f0b.png?q=100" style={{ width: "88px", height: "88px" }} /></div>
                                            <div></div>
                                            <div><img src="https://rukminim2.flixcart.com/www/110/110/promos/15/02/2019/b2716b3f-3f6b-458f-ba09-3705401d2c18.png?q=100" style={{ width: "88px", height: "88px" }} /></div>
                                            <div><img src="https://rukminim2.flixcart.com/www/110/110/promos/15/02/2019/b2716b3f-3f6b-458f-ba09-3705401d2c18.png?q=100" style={{ width: "88px", height: "88px" }} /></div>
                                            <div><img src="https://rukminim2.flixcart.com/www/110/110/promos/15/02/2019/b2716b3f-3f6b-458f-ba09-3705401d2c18.png?q=100" style={{ width: "88px", height: "88px" }} /></div>

                                        </RightComponent>
                                        <Typography style={{ fontSize: "12px", color: "#ff6161" }} className=" text-bold w-100">Oops! You are missing out on a lot of important notifications. Please switch it on from Browser Settings.</Typography>
                                        <Typography className="text-bold text-muted text-center mt-1" style={{ fontSize: "12px" }}>How to Unblock</Typography>
                                        <Box ><img width="17px"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAsdJREFUaAXtWE1rE1EUvfeNbdqFbhSTVsUPxGXQjRuRNBGxpjRQhLqq+Ce6ENfiwv9gRVcWRKk2UcTUIK7VjQsRrahtIrppF9W2M8/7AqVvJp2ZN7mNEX0DIe/jnnPuuXdmEh6AvWwFWBVAFloDD9bOn3A9uABSnpUIB1DibonyB0r4DIhPHQH3FnKVVxpkW4ZsA/teFI+tr3k3JEApLiMSm9nRIya/ni6/i4s13WcZSNdGStL17gDIXaaCALiEjpho5GZnzDHhkW0byNSGi56LlIR0WugR60T8nbqyh26pTMs+oCsEjNaHKpXWvWQrbRlI10YPS2/9DSW30yeHcKsXeq99yc+831jfP1c6ugqrV0HC5Y215jfisoBUtp5/MO9bTzhpz0B1+C5Vd3xTC5ccEOOLhdknm2v+0UB15JwL3rR+u5H4dKPw+KI/MtkssYFm9d21D7qMI8SlxaEyPQvR18Dz4oTrebf1KHR6jjRyDz/qa0nGIkmwipWuO6ZjEPGRSfIKo+JUvI4P8ul7JuPEBhDlSZ1YCDGlz+PGwfggXxw+uJ/YgAQ5qJOgJ97q87hxMD7IF4cP7ic2QG8T3ztfpORykDRq3hIf4IvCbrWX3MBWLF1cswa6WPymdOTvQPrl2F749fM6RZ6hh+1gp5NFwE+k8QxSfVcap+5/M9ELNXBorphZkfI1JZ42IdrOGDLS6Ec8Pp8v1+N4Q5+BFQD6i/znk1cJK12lH5e82g81IKVXMCHoVIypfqgBSsz3g9WpRCN4jfSjDERw/z1b1kC3e2E7YDvArIC9hZgFZMNtB9glZBLYDjALyIbbDrBLyCSwHWAWkA23HWCXkEnwT3dggVkcLtxIP7QDiKLKzYCDN9UPNdAPMKkOmDhJtIttHmyRvgk+1EDzVCzVlyWyKfqoI7+OX0qHPjfpaDFrcirX8YSswP9Qgd/E17fzhd11OgAAAABJRU5ErkJggg==" />
                                        <span style={{fontSize:"12px"}} className="text-bold">&gt; Notifications &gt; Allow</span></Box>
                                    </Box>

                                </Grid>
                            </Grid>

                        </Box>
                    </Grid >
                </Grid >




            </Box >

        </>)
}