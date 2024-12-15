import { Box, Typography, Grid, styled, Table, TextField, Toolbar, Button, TableRow, TableCell, List, ListItem, Link, Radio, FormControlLabel, Checkbox, TableHead } from "@mui/material";
import { LocalOffer as Badge, BorderBottom, CheckBox } from "@mui/icons-material";
import Reply from '@mui/icons-material/Reply';
import { useState } from "react";
const RightComponent = styled(Box)(({ theme }) => ({
    position: "relative",
    "p": {
        fontSize: "14px",
        fontFamily: " Inter, -apple-system, Helvetica, Arial, sans-serif",
    },

}))
const ListStyleCircle = styled(Typography)(({ theme }) => ({
    "&::before": {
        content: '""',
        height: "6px",
        width: "6px",
        position: "absolute",
        top: "6px",
        left: "-20px",
        borderRadius: "50%",
        background: "#c2c2c2",

    },
    position: "relative",

}))
const ColumnText = styled(TableRow)(({ theme }) => ({
    verticalAlign: "baseline",

}))
const RatingComponent = styled(Box)(({ theme }) => ({

    display: "flex",
    gap: "15px",
    alignItems: "center",

    ">div": {
        width: "55px",
        textAlign: "center",

        backgroundColor: "rgb(47, 209, 47)",
        fontWeight: "bold",
        borderRadius: "20px"


    }
}))
const PriceComponent = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "15px",
    alignItems: "center",

}))
const SmallNav = styled(Box)(({ theme }) => ({
    "a": {
        fontSize: "11px",
        fontWeight: "bold",
        verticalAlign: "super",
        color: " #878787 !important",
    },
    [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start"
    }
}))

const StyledBadge = styled(Badge)(({ theme }) => ({
    color: "rgb(47, 209, 47)",
    marginRight: "10px"

}))
const ToolbarComponent = styled(Box)(({ theme }) => ({
    display: "flex",

    justifyContent: "space-between",
    paddingRight: "10px",
    ">div": {
        display: 'flex',

        justifyContent: "space-between",
        alignItems: "flex-start",
    },

}))
const StyledChecked = styled(FormControlLabel)(({ theme }) => ({
    "span": {
        paddingBlock: "0px!important",
    }
}))
const StyledTextField = styled(TextField)(({ theme }) => ({
    "label": {
        fontSize: "14px",
        fontWeight: "bold",
    },
    "*": { border: "none!important" }
}))
const BuyChange = styled(Box)(({ theme }) => ({
    width: "90%",
    "*": {
        fontSize: "14px",
    },
    ">div": {
        justifyContent: "space-between",
        alignItems: "center",
    },
    [theme.breakpoints.down("md")]: {
        overflowX: "scroll",
        whiteSpace: "nowrap"
    }

}))

const RatingStyled = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {

    },
    "ul:first-child > li ,ul:last-child > li": {
        paddingBlock: "3px!important",
        fontWeight: "bold",
    },

    "ul:last-child > li": { color: "#bcbdbc" },
    "ul:nth-child(2) > li": {
        paddingInline: "0px!important",
        paddingBlock: "10px"
    }
}))

const CircleStyle = styled(Box)(({ theme }) => ({
    "p": {
        fontSize: "18px", fontWeight: "bold",
    },
    border: "solid 5px green",
    borderRadius: "100%",
    marginBottom: "5px",
    padding: "15px",
    width: "70px",
    height: "68px",
}))

const SpecifiTable = styled(Table)(({ theme }) => ({
    padding: "10px",
    "th": {
        fontSize: "13px",
    },
    "td": { borderBottom: "none", }
}))
const TableStyle = styled(Table)(({ theme }) => ({
    whiteSpace: "nowrap",
    overflowX: "scroll"
}))

export default function ProductDetails({ content }) {
    const [readMore, setReadMore] = useState(false);

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (

        <>
            <RightComponent>
                <ToolbarComponent className="">
                    <SmallNav className="d-flex gap-1 flex-wrap">
                        <Box className="r2CdBx">
                            <Link href="/" className=" R0cyWM">Home</Link>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" ></path></svg>
                        </Box>
                        <Box className="r2CdBx">
                            <Link href="/" className=" R0cyWM">Mobile & A ...</Link>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="wMLTcO"></path></svg>
                        </Box>
                        <Box className="r2CdBx">
                            <Link href="/" className="R0cyWM">Mobiles</Link>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="wMLTcO"></path></svg>
                        </Box>
                        <Box className="r2CdBx">
                            <Link href="/" className="R0cyWM">MOTOROLA...</Link>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="wMLTcO"></path></svg>
                        </Box>
                        <Box className="r2CdBx">
                            <Link href="/" className="R0cyWM">MOTOROLA ED...</Link>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="wMLTcO"></path></svg>
                        </Box>

                    </SmallNav>
                    <Box className="d-flex flex-wrap" style={{ marginLeft: "auto" }} >
                        <StyledChecked control={<Checkbox size="small" />} fontSize="13px" label="Compare" size="small" />

                        <Box className="text-muted" >
                            <span style={{ transform: "rotate(160deg)" }}><Reply /></span>
                            <span>Share</span></Box>

                    </Box>
                </ToolbarComponent>

                <Typography className="" style={{ fontSize: "18px" }}>{content.title} (8 GB RAM) #JustHere</Typography>
                <Box className="my-2">
                    <Typography variant="span" className="px-2 py-1 border-rounded text-white text-bold" style={{ backgroundColor: "#008c00", fontSize: "12px", borderRadius: "3px" }}>{4.4} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                    <Typography variant="span" className="text-muted mx-2 text-bold" style={{ fontSize: "15px" }}>{22} & {22}</Typography>
                </Box>


                <Typography style={{ color: "#388e3c", fontWeight: "bold" }}>Extra 40% Off</Typography>
                <PriceComponent className="my-1">
                    <Typography className="text-bold" style={{ fontSize: "25px" }}>{content.price.sell_price}</Typography>
                    <Typography variant="span" className="text-muted">{content.price.org_price}</Typography>
                    <Typography variant="span" style={{ color: "#388e3c", fontWeight: "bold" }}> {content.price.discount}</Typography>
                </PriceComponent>
                <Typography className="">+ ₹59 Secured Packaging Fee</Typography>

                <Box className="my-2">
                    <Typography style={{ fontWeight: "550" }}>Available offers</Typography>

                    <Box className="my-2">
                        <Typography><StyledBadge /> <Typography variant="span" className="text-dark text-bold mx-1">Bank Offer </Typography> 5% Cashback on Flipkart Axis Bank CardT&C <Typography variant="span">T&C</Typography></Typography>
                        <Typography className="my-2"><StyledBadge /><Typography variant="span" className="text-dark text-bold mx-1">Special Price </Typography> Get extra ₹3000 off (price inclusive of cashback/coupon)<Typography variant="span">T&C</Typography></Typography>
                        <Typography><StyledBadge /><Typography variant="span" className="text-dark text-bold mx-1">Freebie</Typography>Flat ₹1000 off on Cleartrip hotels booking along with 300 supercoins on booking<Typography variant="span">T&C</Typography></Typography>
                        <Typography className="my-2"><StyledBadge /><Typography variant="span" className="text-dark text-bold mx-1">Freebie </Typography> Spotify Premium - 12M at ₹699T&C<Typography variant="span">T&C</Typography></Typography>
                    </Box>
                </Box>
                <Typography varaint="a" className="text-primary text-bold">View 4 more offers</Typography>
                <BuyChange className="my-3  text-center border border-muted">
                    <Box style={{ backgroundColor: " #f5faff" }} className="border border-muted d-flex p-2 px-3 ">
                        <FormControlLabel value="female" control={<Radio size="small" defaultChecked />} label="Buy without Exchange" />
                        <Typography>₹22,999</Typography>
                    </Box>
                    <Box className="p-2 px-3">
                        <Box className="d-flex  justify-content-space-between align-item-center">
                            <FormControlLabel value="male" className="text-muted" control={<Radio size="small" />} label="Buy without Exchange" />
                            <Typography className="text-muted">up to ₹18,550 off</Typography>
                        </Box>
                        <Typography variant="small" style={{ fontSize: "13.5px" }} className="text-muted ">Get extra ₹2,000 off on exchange of select models</Typography>
                        <Typography className="text-danger my-2 text-bold">Enter pincode to check if exchange is available</Typography>
                    </Box>

                </BuyChange>

                <TableStyle>
                    <ColumnText>
                        <TableCell className="text-muted"><Box className="SLT5t4"><img className="border " src="https://rukminim2.flixcart.com/image/60/100/prod-fk-cms-brand-images/dcb0a7e61ba5a05860ceee7e6948e00470cfbdff88a18c522461201f523a9006.jpg?q=90" /></Box></TableCell>
                        <TableCell className="text-dark" style={{ fontWeight: "bold" }}>1 Year on Handset and 6 Months on Accessories <Link to=""> Know More</Link></TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell className="text-muted text-bold">Delivery</TableCell>
                        <TableCell className="text-dark" style={{ fontWeight: "bold" }}>
                            <Box className="" style={{ width: "40%" }}>
                                <Box style={{ borderBottom: "solid 2px red" }} className="d-flex align-item-center pb-1">

                                    <StyledTextField id="standard-basic" style={{ fontSize: "12px" }} className="w-100 text-bold" label="Enter Delivery Pincode" variant="standard" />
                                    <Typography className="text-primary border-none mt-1 text-bold">Check</Typography>
                                </Box>
                                <Typography className="text-danger mt-2 tet-bold">Currently out of stock in this area.</Typography>
                            </Box>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell className="text-muted text-bold">Highlights</TableCell>
                        <TableCell className="text-dark" style={{ fontWeight: "bold" }}>
                            <Box className="mt-5 d-flex justify-content-space-between">

                                <List style={{ listStyleType: "circle" }} className="gap-1">

                                </List>

                                <Box className="d-flex  gap-4 " style={{ marginRight: "" }} >
                                    <Typography clasName="text-muted text-bold">Easy Payment Options</Typography>
                                    <Box>

                                        <ListStyleCircle>No cost EMI starting from ₹3,834/month</ListStyleCircle>
                                        <ListStyleCircle>Net banking & Credit/ Debit/ ATM card</ListStyleCircle>

                                    </Box>
                                </Box>

                            </Box>

                        </TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell className="text-muted text-bold">Seller</TableCell>
                        <TableCell >
                            <Box>
                                <Link className="text-bold">Truenet Commerce</Link>
                                <Typography variant="span" className="px-2 py-1 border-rounded text-white text-bold mx-2" style={{ backgroundColor: "blue", width: "30px", fontSize: "12px", borderRadius: "3px" }}>4 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                            </Box>
                            <ListStyleCircle className="my-2 text-bold">7 Days Service Center Replacement/Repair</ListStyleCircle>
                            <Link className="text-bold">See others sellers</Link>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 399 }} />
                        </TableCell>

                    </ColumnText>
                    <ColumnText>
                        <TableCell className="text-muted text-bold">Description</TableCell>
                        <TableCell >NA</TableCell>
                    </ColumnText>
                </TableStyle>
                <Box className="border border-muted mt-4">
                    <Typography variant="h5" className="p-3 border border-muted">Product Description</Typography>
                    <Box >
                        <Box className="px-3 py-2">
                            <Box style={{ float: "left" }} className="px-3">
                                <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/48c8228f2fd348d59d33df53c7355808_18f7be83116_Camera.jpg.jpeg?q=90" style={{ maxWidth: "100%", verticalAlign: "middle" }} />
                            </Box>
                            <Box >
                                <Typography variant="h6">50 MP Ultra Pixel OIS Camera with Sony - LYTIA 700C Senor</Typography>
                                <Typography>Motorola edge 50 fusion is designed to capture its best shots at night with advanced features. The 50 MP main camera uses a powerful Sony LYTIA LYT-700C sensor to capture moments ultrafast with low noise even in dark environments. Who thought Night photography could get faster, accurate and focused. An advanced all-pixel focus technology on the Motorola Edge 50 Fusion elevates night photography by making it 32x more focused. While the Ultra Pixel sensor captures more light with larger 2.0µm pixels, the OIS automatically smoothens involuntary hand motion to give you a shake free video experience</Typography>
                            </Box>
                        </Box>
                        <hr className="bg-muted" />
                        <Box className=" px-3 py-2">
                            <Box style={{ float: "right" }} className="px-3">
                                <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/a3adbb5b89e74726a23d546603341b1f_18f7be85caf_Capturemagicalmoments.jpg.jpeg?q=90" style={{ maxWidth: "100%", verticalAlign: "middle" }} />
                            </Box>
                            <Box >
                                <Typography variant="h6">4K Video Recording in 13MP Ultrawide+Macro Cam and 32 MP Front Cam</Typography>
                                <Typography>Its advanced sensor gives two amazing perspectives. The 120 degree ultra-wide-angle lens captures what your eyes see, fitting more of the scene in your frame than a standard lens. So go ultra-wide or zoom in. The Macro Vision lens brings you 4x closer to your subject, so you see the tiniest of details. The new Quad Pixel technology combines every four pixels into one for 4x better low-light sensitivity giving you brilliant results. Moreover, you can also capture videos in 4K resolution from all cameras front and back and never miss a detail.</Typography>
                            </Box>
                        </Box>
                        <Box className="p-3  border border-muted">
                            <Link className="mx-2">View all features</Link>
                        </Box>
                    </Box>
                </Box>
                <Box className="mt-5 border border-muted">
                    <Box className="d-flex justify-content-space-between align-item-center px-3">
                        <Typography variant="h5" className="p-3  text-bold">Ratings & Reviews</Typography>

                        <Button variant="contained" style={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .26)", fontSize: "12px" }} className="bg-white text-bold text-dark py-3 " >Rate Product</Button>
                    </Box>
                    <Box className="mt-3 px-4">
                        <Grid container className="align-item-center justify-content-space-between py-3">
                            <Grid item lg={2} md={10} sm={10}className="my-auto">
                                <Box className="text-center ">
                                    <Typography variant="h4">4.5★</Typography>
                                    <Typography className="text-muted">29,656 Ratings & 1,890 Reviews</Typography>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={10} sm={12} >
                                <RatingStyled className="d-flex gap-1 align-item-center w-100" >
                                    <List style={{ fontSize: "12px" }} className="w-100">
                                        <ListItem>
                                            <Typography variant="span">5</Typography>
                                            <Typography variant="span">★</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="span">4</Typography>
                                            <Typography variant="span">★</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="span">3</Typography>
                                            <Typography variant="span">★</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="span">2</Typography>
                                            <Typography variant="span">★</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="span">1</Typography>
                                            <Typography variant="span"> ★</Typography>
                                        </ListItem>
                                    </List>
                                    <List className="w-100" >
                                        <ListItem>
                                            <Box className="w-100 bg-muted" ><Box className="w-50 " style={{ height: "5px", backgroundColor: "green", borderRadius: "10%" }}></Box></Box>
                                        </ListItem>
                                        <ListItem>
                                            <Box className="w-100 bg-muted"><Box className="w-100 " style={{ height: "5px", backgroundColor: "green", borderRadius: "10%" }}></Box></Box>
                                        </ListItem>
                                        <ListItem>
                                            <Box className="w-100 bg-muted"><Box className="w-100 " style={{ height: "5px", backgroundColor: "green", borderRadius: "10%" }}></Box></Box>
                                        </ListItem>
                                        <ListItem>
                                            <Box className="w-100 bg-muted"><Box className="w-100 " style={{ height: "5px", backgroundColor: "green", borderRadius: "10%" }}></Box></Box>
                                        </ListItem>
                                        <ListItem>
                                            <Box className="w-100 bg-muted"><Box className="w-100 " style={{ height: "5px", backgroundColor: "green", borderRadius: "10%" }}></Box></Box>
                                        </ListItem>



                                    </List>
                                    <List style={{ fontSize: "12px" }}>
                                        <ListItem><Typography variant="span">20,942</Typography></ListItem>
                                        <ListItem><Typography variant="span">5,511</Typography></ListItem>
                                        <ListItem><Typography variant="span">1,088</Typography></ListItem>
                                        <ListItem><Typography variant="span">534</Typography></ListItem>
                                        <ListItem><Typography variant="span">20,942</Typography></ListItem>

                                    </List>
                                </RatingStyled>
                            </Grid>
                            <Grid item lg={6} md={10} sm={10} xs={12}>
                                <Box className="d-flex align-item-center justify-content-space-between text-center w-100">
                                    <Box>
                                        <CircleStyle><Typography >4.5</Typography></CircleStyle>
                                        <Typography className="text-bold text-dark" style={{ fontSize: "14px" }}>Camera</Typography>
                                    </Box>
                                    <Box>
                                        <CircleStyle><Typography >4.5</Typography></CircleStyle>
                                        <Typography className="text-bold text-dark" style={{ fontSize: "14px" }}>Camera</Typography>
                                    </Box>
                                    <Box>
                                        <CircleStyle><Typography >4.5</Typography></CircleStyle>
                                        <Typography className="text-bold text-dark" style={{ fontSize: "14px" }}>Camera</Typography>
                                    </Box>
                                    <Box>
                                        <CircleStyle><Typography >4.5</Typography></CircleStyle>
                                        <Typography className="text-bold text-dark" style={{ fontSize: "14px" }}>Camera</Typography>
                                    </Box>


                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
                <Box className="border border-muted mt-4">
                    <Typography variant="h5" className="p-3 border border-muted">Specifications</Typography>
                    <Box style={{ fontSize: "12px", padding: "25px" }} >
                        <SpecifiTable>
                            <Typography className="text-bold " variant="h6">General</Typography>
                            <ColumnText>
                                <TableHead className="text-muted"> In The Box</TableHead>
                                <TableCell >Handset, 68W Charger, USB Cable, Sim Tool, Protective Cover, Guides</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableHead className="text-muted"> Model Number</TableHead>
                                <TableCell >PB300002IN</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableHead className="text-muted"> Model Name</TableHead>
                                <TableCell >Edge 50 Fusion</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableHead className="text-muted">Color</TableHead>
                                <TableCell >
                                    Marshmallow Blue</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableHead className="text-muted">Browse Type</TableHead>
                                <TableCell >
                                    Smartphones</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableHead className="text-muted">SIM Type</TableHead>
                                <TableCell >Dual Sim
                                </TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableHead className="text-muted">SIM Type</TableHead>
                                <TableCell >Dual Sim
                                </TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableHead className="text-muted">Hybrid Sim Slot</TableHead>
                                <TableCell >No</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableHead className="text-muted">Touchscreen</TableHead>
                                <TableCell >Yes</TableCell>
                            </ColumnText>
                        </SpecifiTable>
                        <Box className={(readMore == false) ? "d-none" : "d-block"}>
                            <SpecifiTable>
                                <ColumnText>
                                    <TableHead className="text-muted">OTG Compatible</TableHead>
                                    <TableCell >Yes</TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableHead className="text-muted">Quick Charging</TableHead>
                                    <TableCell >Yes</TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableHead className="text-muted">Sound Enhancements</TableHead>
                                    <TableCell >Stereo Speakers</TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableHead className="text-muted">SAR Value</TableHead>
                                    <TableCell >
                                        Head: 1.04 W/Kg (at 1 g), Body: 1.05 W/Kg (at 1 g)</TableCell>
                                </ColumnText>
                            </SpecifiTable>
                        </Box>

                    </Box>

                    <Box className="p-3  border border-muted">
                        <Link className="mx-2" onClick={() => setReadMore(true)} style={{ cursor: "pointer" }}>Read More</Link>
                    </Box>

                </Box>




            </RightComponent>
        </>

    )
}