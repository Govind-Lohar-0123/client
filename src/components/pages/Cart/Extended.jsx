
import { Box, Grid, styled, Typography, Button,Link } from "@mui/material";


const Wrapper = styled(Box)(({ theme }) => ({
    
    padding: "20px",
    backgroundColor: "#f4f8ff",
    border:"solid 2px black",
    marginBlock:"1rem",
    
    "*":{
        fontFamily: "Inter, -apple-system, Helvetica, Arial, sans-serif !important",
    },
    border: "1px solid #e0e0e0",
    "p":{
        fontSize:"14px"
    }
}))

const ButtonStyle = styled(Button)(({ theme }) => ({
   
   textTransform:"capitalize",width:"35%",height:"55px", backgroundColor: "#ff9f00" ,
     
}))


export default function ExtendedCart({ prod }) {



    return (
        <>
            <Wrapper className="mt-4">
                <Typography style={{fontSize:"1.2rem",fontWeight:"550"}}  >Extended Warranty</Typography>
                <Grid container  className="mt-3">
                    <Grid item lg={2} md={3} sm={4}  >
                        <Box className=" w-75 text-center h-50 mt-2 " style={{ height: "80%" }}>
                        <img loading="lazy"  className="d-block h-100 w-100" alt="" src="https://rukminim2.flixcart.com/image/144/144/kex5ci80/digital-combo/a/h/z/1-online-transaction-frauds-on-all-bank-accounts-credit-debit-original-imafvg2rkfrqhpzr.jpeg?q=90"/>
                        </Box>
                    </Grid>
                    <Grid item lg={9.8} md={9} sm={8} style={{marginLeft:"auto"}}>
                        <Box className="d-flex">
                            <Box>
                                <Typography >Extended Warranty 1 Year</Typography>
                                <Typography className="text-muted my-1">1 Year</Typography>
                                <Typography  className="text-bold" style={{fontSize:"1.2rem" ,marginBlock:"1rem"}}>₹399</Typography>
                                <Typography>Get brand authorised repairs with free pickup and drop. Absolutely no hidden charges <Link>!Know More</Link></Typography>
                            </Box>
                            <ButtonStyle variant="contained"  size="large" > Add Item</ButtonStyle>
                        </Box>
                    </Grid>

                </Grid>

            </Wrapper>
        </>
    )
}