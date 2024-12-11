import { Box, styled, TextField, Grid, Typography, Button, List, Link, Table, TableBody, TableCell, TableContainer, Paper, TableRow, ListItem } from "@mui/material"


export default function SuperCoins() {



    const Wrapper = styled(Box)(({ theme }) => ({
        backgroundColor: "#f5f7fa !important",
        width: "800px",
        overflowX:"scroll",
        whiteSpace:"nowrap",
        height: "100%",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
        backgroundColor: "rgb(255, 255, 255)",
        padding: " 0px 24px",
        marginInline: "auto"

    }))
    return (
        <>

            <Wrapper className="mt-2">

                <Box className="mt-4" >

                    <Box className="p-2 py-3 ">

                        <Box className="d-flex align-item-center gap-2" >
                            <Typography style={{ fontSize: "20px" }}> SuperCoin Balance</Typography>
                            <img src="https://rukminim2.flixcart.com/lockin/32/32/images/super_coin_icon_22X22.png?q=90" height="16px" width="16px" />
                            <Typography className="text-bold" style={{ fontSize: "21px" }}> 0</Typography>
                        </Box>
                        <Box className="mt-3">
                            <img width="100%" height="50%" alt="" src="https://rukminim2.flixcart.com/lockin/2000/2000/images/coin-act-dt.png?q=50" data-tkid="lo_sb:5a194829-4daa-b213-9c22-15079865790f.ct:STATIC_BANNER;bn:coin-act-dt;" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/lockin/2000/2000/images/01AvailExtra.jpg?q=50" data-tkid="lo_sb:5b6f059b-48e4-eb35-5e6f-ac4bd5b7972d.ct:STATIC_BANNER;bn:ED-banner DT;" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/lockin/2000/2000/images/rewards-dt1.png?q=50" data-tkid="lo_sb:8ae446ab-ebe2-b57b-02b4-122ded3d4e64.ct:STATIC_BANNER;bn:rewards-dt1;" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/fk-p-www/2000/2000/promos/13/04/2024/de984190-13d3-4134-99aa-441af4a91110.jpg?q=50" data-tkid="lo_sb:15c1c97e-a3b9-b82d-04f4-1bfdddc4a22b.ct:STATIC_BANNER;bn:FAQ 1;" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/fk-p-www/2000/2000/promos/13/04/2024/32e8aff6-e41c-4087-b0dd-d82f841e0ecc.jpg?q=50" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/fk-p-www/2000/2000/promos/13/04/2024/c6fe9fb9-a12c-4fbf-9431-c9a564092ea3.jpg?q=50" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/fk-p-www/2000/2000/promos/13/04/2024/25ac69a1-2b14-4559-869b-e03f7034daf0.jpg?q=50" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/fk-p-www/2000/2000/promos/13/04/2024/37a84b6e-50b3-4c20-83c6-ab42408e6645.jpg?q=50" data-tkid="lo_sb:6856111a-3140-793b-dda2-ffe3b0079d67.ct:STATIC_BANNER;bn:FAQ5;" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/fk-p-www/2000/2000/promos/13/04/2024/5bcbac34-8121-4ab2-8f6f-f18e89a95dc8.jpg?q=50" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/fk-p-www/2000/2000/promos/13/04/2024/0090d3a7-5b27-4f76-abd5-e3160b835c6a.jpg?q=50" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/fk-p-www/2000/2000/promos/13/04/2024/5707607c-ad43-4fc4-babc-6f7bcb67814d.jpg?q=50" />
                        </Box>
                        <Box>
                            <img width="100%" alt="" src="https://rukminim2.flixcart.com/lockin/2000/2000/images/faq-dt-super-sl9.jpg?q=50" />
                        </Box>

                    </Box>


                </Box >
            </Wrapper >
        </>

    )

}