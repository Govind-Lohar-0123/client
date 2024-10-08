import { Box, styled, Grid, Typography, Link, List, ListItem, Checkbox, FormControlLabel } from "@mui/material";

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
const Wrapper = styled(Box)(({ theme }) => ({

}))
const PriceComponent = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItem: "center",
    flexDirection: "column"
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
        paddingBlock: "1px !important",
    }
}))
const Heart = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "0px",
    right: "-8px"

}))
const ListStyleCircle = styled(Typography)(({ theme }) => ({
    "&::before": {
        content: '""',
        height: "6px",
        width: "6px",
        position: "absolute",
        top: "6px",
        left: "-18px",
        borderRadius: "50%",
        background: "#c2c2c2",

    },
    position: "relative",

}))

export default function Card1({ prod }) {

    return <>

        <Wrapper className="my-2">

            <Component container >
                <LeftComponent item lg={8.}>
                    <Grid container >
                        <Grid item lg={3.5}>
                            <Box className="p-2 px-4" width="180px" height="200px" style={{ position: "relative" }}>
                                <Link><Image src={prod.url} alt="" /></Link>
                                <Heart style={{ fill: "#c2c2c2" }} className="+7E521 bg-muted"><svg xmlns="http://www.w3.org/2000/svg" className="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0"  stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></Heart>

                            </Box>
                        </Grid>
                        <Grid item lg={8.5} style={{ marginLeft: "auto" }}>
                            <Box>
                                <Typography className="text-bold" style={{ fontSize: "17px" }} >{prod.content.title}</Typography>
                                <Box className="">
                                    <Typography variant="span" className="px-2 py-1 border-rounded text-white text-bold" style={{ backgroundColor: "#008c00", fontSize: "12px", borderRadius: "3px" }}>{prod.content.rating.star} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY my-auto" style={{ width: "12px" }} /></Typography>
                                    <Typography variant="span" className="text-muted mx-2 text-bold" style={{ fontSize: "15px" }}>{prod.content.rating.rating} & {prod.content.rating.reviews}</Typography>
                                </Box>
                                <ProductDetail className="mt-1">
                                    <List style={{ listStyleType: "circle" }}>
                                        {
                                            prod.content.config.map((item, idx) => {
                                                return (<ListItem key={idx}>
                                                    <ListStyleCircle>{item}</ListStyleCircle>
                                                </ListItem>)
                                            })

                                        }
                                    </List>
                                </ProductDetail>
                            </Box>
                        </Grid>
                    </Grid>

                </LeftComponent>
                <RightComponent item lg={3} style={{ marginInline: "auto" }}>
                    <PriceComponent className="gap-1">
                        <Box className="d-flex align-item-center gap-4">
                            <Typography variant="span" className="text-bold" style={{ fontSize: "25px" }}>{prod.content.price[0]}</Typography>
                            <Link className="p-2"><Image height="15" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" className="d-block w-50 h-50" /></Link>
                        </Box>
                        <Box className="d-flex gap-2 align-item-center" >
                            <del style={{ fontSize: "13px" }} className="text-muted d-inline-block">{prod.content.price[1]}</del>
                            <Typography style={{ color: "green", fontSize: "13px" }} className="text-bold">{prod.content.price[2]}</Typography>
                        </Box>
                        <Typography style={{ fontSize: "11px" }}>{prod.content.price[3]}</Typography>
                        <Typography style={{ color: "green", fontSize: "14px" }} className="text-bold">{prod.content.price[4]}</Typography>
                    </PriceComponent>
                </RightComponent>
            </Component>
            <AddToCompare className="h-25">
                <FormControlLabel control={<Checkbox size="small" />} label="Add to Compare" style={{ fontSize: "13px" }} />
            </AddToCompare>
        </Wrapper>
    </>
}