import { Box, styled, Grid, Typography, Link, List, ListItem, Checkbox, FormControlLabel, Radio } from "@mui/material";

const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "block",
}))
const LeftComponent = styled(Grid)(({ theme }) => ({

}))
const RightComponent = styled(Grid)(({ theme }) => ({

}))
const Component = styled(Grid)(({ theme }) => ({

}))
const MiddleComponent = styled(Grid)(({ theme }) => ({
    "span": {
        fontSize: "13px",
    }
}))
const PriceComponent = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",

    flexDirection: "column",
}))
const AddToCompare = styled(Grid)(({ theme }) => ({
    "span": {
        fontSize: "14px",
    }
}))
const ProductDetail = styled(Box)(({ theme }) => ({
    "p": {
        fontSize: "14px",
    },
    "li": {
        paddingBlock: "2px !important",
    }
}))


export default function ReviewCard({ prod }) {
    const { url, content } = prod;
    const{popular}=content;
    const { most_reviews:most,recent_reviews:recent} = popular;
    const { rating, price, config, title } = content;
    
   
    //    const {}=item.prods;

    return <>

        <Box >

            <Component container lg={12}>
                <LeftComponent item lg={5.4}>
                    <Grid container lg={12}>
                        <Grid item lg={3}>
                            <Box className="p-2 w-100">
                                <Link><Image src={url} alt="" /></Link>

                            </Box>
                        </Grid>
                        <Grid item lg={8} style={{ marginLeft: "auto" }}>
                            <Box>
                                <Typography className="text-bold" style={{  fontSize: "17px" }} >{title} </Typography>
                                <Box className="">
                                    <Typography variant="span" className="px-2 py-1 border-rounded text-white text-bold" style={{ backgroundColor: "#008c00", fontSize: "12px", borderRadius: "3px" }}>{rating.star} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                                    <Typography variant="span" className="text-muted mx-2 text-bold" style={{ fontSize: "15px" }}>{rating.rating} &{rating.reviews}</Typography>
                                </Box>
                                <ProductDetail className="mt-1">
                                    <List style={{ listStyleType: "circle" }}>
                                        {
                                            config.map((it, idx) => {
                                                return (<ListItem key={idx}>
                                                    <Typography>{it}</Typography>
                                                </ListItem>)
                                            })
                                        }



                                    </List>
                                </ProductDetail>
                            </Box>
                        </Grid>
                    </Grid>
                </LeftComponent>
                <MiddleComponent item lg={2.6  } className="mx-auto">
                    <Box>
                        <Typography style={{ fontSize: "13px" }} className="text-muted text-bold">Most Helfull Reviews</Typography>
                        <Box className="mt-1">
                            <Typography variant="span" className="px-2 py-1 border-rounded text-white text-bold" style={{ backgroundColor: "#008c00", fontSize: "12px", borderRadius: "3px" }}>{most.star}<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                            <Typography variant="span" className=" mx-2 text-bold" style={{ fontSize: "15px" }}>{most.status}</Typography>
                        </Box>
                        <Typography style={{ fontSize: "14px" }} className="my-2 ">{most.days}</Typography>

                        <Box className="d-flex gap-1 align-item-center"><p className="_2NsDsF AwS1CA m-0" style={{ fontSize: "13px" }}>{most.certified}</p><svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className="VjlQyz"><g><circle cx="6" cy="6" r="6" fill="#878787"></circle><path stroke="#FFF" stroke-width="1.5" d="M3 6l2 2 4-4" fill="#878787"></path></g></svg><p id="review-5aa457fd-3c5c-40a2-891c-0420d82154cc" className="MztJPv m-0"><span style={{ fontSize: "13px" }}>Certified Buyer</span></p><p className="_2NsDsF m-0" style={{ fontSize: "13px" }}>{most.date}</p></Box>
                    </Box>
                </MiddleComponent>
                <RightComponent item lg={2.6} style={{ marginInline: "auto" }}>
                    <Box>
                        <Typography style={{ fontSize: "13px" }} className="text-muted ">Recent Review</Typography>
                        <Box className="mt-1">
                            <Typography variant="span" className="px-2 py-1 border-rounded text-white text-bold" style={{ backgroundColor: "#008c00", fontSize: "12px", borderRadius: "3px" }}>{recent.star}<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                            <Typography variant="span" className=" mx-2 text-bold" style={{ fontSize: "15px" }}>{recent.status}</Typography>
                        </Box>
                        <Typography style={{ fontSize: "14px" }} className="my-2 ">{recent.issue}</Typography>
                        <Box className="d-flex gap-1 align-item-center"><p className="_2NsDsF AwS1CA m-0" style={{ fontSize: "13px" }}>{recent.certified}</p><svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className="VjlQyz"><g><circle cx="6" cy="6" r="6" fill="#878787"></circle><path stroke="#FFF" stroke-width="1.5" d="M3 6l2 2 4-4" fill="#878787"></path></g></svg><p id="review-5aa457fd-3c5c-40a2-891c-0420d82154cc" className="MztJPv m-0"><span style={{ fontSize: "13px" }}>Certified Buyer

                            {recent.date}</span></p></Box>
                    </Box>
                </RightComponent>
            </Component>
            <AddToCompare className="h-25">
                <FormControlLabel control={<Checkbox size="small" />} label="Add to Compare" style={{ fontSize: "13px" }} />
            </AddToCompare>
        </Box>

    </>
}