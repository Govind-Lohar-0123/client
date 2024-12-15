import { Box, styled, Grid } from "@mui/material";
import React from "react";

const StyledFooter = styled("footer")(({ theme }) => ({
    color: "white",

    [theme.breakpoints.down("md")]: {


    }
}))
const GridStyle = styled(Grid)(({ theme }) => ({
    "li,p": {
        fontSize: "12px",
        color: "#878787"
    },
    ">div": {

    }
    ,

    "li": { fontWeight: "700px", color: "white", cursor: "pointer" },

}))

const BottomCompoent = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "div": {
        display: "flex",
        alignItems: "center",
        gap: "5px",
        "span": { color: "white !important" }
    },
    marginInline: "5px",
    [theme.breakpoints.down("lg")]: {
        flexWrap: "wrap",
        gap: "30px",


    }

}))




export default function Footer() {
    return (
        <>

            <StyledFooter className="pt-3 p-2 pb-4 mt-5 " style={{ backgroundColor: " #212121" }}>
                <Box >
                    <GridStyle container lg={10} md={10} sm={8}  xs={10} className="mx-auto mt-4">
                        <Grid item lg={1} md={3} sm={6} xs={5} className="mx-auto">


                            <p className="text-secondary">ABOUT</p>
                            <ul>
                                <li ><a href="/helpcentre" className="text-white">Contact Us</a></li>
                                <li ><a href="https://corporate.flipkart.net/corporate-home" className="text-white">About Us</a></li>
                                <li ><a href="https://www.flipkartcareers.com/?otracker=${otracker}_navlinks#!/" className="text-white">Careers</a></li>
                                <li ><a href="https://corporate.flipkart.net/corporate-home" className="text-white">Flipkart Stories</a></li>
                                <li ><a href="https://www.flipkartcareers.com/?otracker=${otracker}_navlinks" className="text-white">Press</a></li>
                                <li ><a href="http://stories.flipkart.com/" className="text-white">Corporate</a></li>
                                <li ><a href="http://stories.flipkart.com/" className="text-white"> Information</a></li>
                            </ul>


                        </Grid>
                        <Grid item lg={2} md={3} sm={6} xs={5} className="mx-auto">

                            <p className="text-secondary">GROUP COMPANIES</p>
                            <ul>
                                <li ><a href="https://www.myntra.com/" className="text-white">Myntra</a></li>
                                <li ><a href="https://www.cleartrip.com/" className="text-white">Flipkart Wholesale</a></li>
                                <li ><a href="https://www.shopsy.in" className="text-white">Cleartrip</a></li>
                                <li ><a href="https://www.shopsy.in" className="text-white">Shopsy</a></li>


                            </ul>


                        </Grid>
                        <Grid item lg={1} md={3} sm={6} xs={5} className="mx-auto">

                            <p className="text-secondary">HELP</p>
                            <ul>
                                <li ><a href="/pages/payments" className="text-white">Payment</a></li>
                                <li ><a href="/pages/shipping" className="text-white">Shipping</a></li>
                                <li ><a href="/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG" className="text-white">Cancellation & Returns</a></li>
                                <li ><a href="/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG" className="text-white">FAQ</a></li>
                                <li ><a href="https://seller.flipkart.com/fiv?otracker=${otracker}_navlinks" className="text-white">Report</a></li>
                                <li ><a href="/helpcentre" className="text-white">Infringement</a></li>



                            </ul>


                        </Grid>
                        <Grid item lg={2} md={3} sm={6} xs={5} className="mx-auto">

                            <p className="text-secondary">CONSUMER POLICY</p>
                            <ul>
                                <li ><a href="/pages/returnpolicy?otracker=${otracker}_navlinks" className="text-white">Cancellation & Returns</a></li>
                                <li ><a href="/pages/terms?otracker=${otracker}_navlinks" className="text-white">Term Of Use</a></li>
                                <li ><a href="/pages/paymentsecurity?otracker=${otracker}_navlinks" className="text-white">Security</a></li>
                                <li ><a href="/pages/privacypolicy?otracker=${otracker}_navlinks" className="text-white">Privacy</a></li>
                                <li ><a href="/sitemap?otracker=${otracker}_navlinks" className="text-white">Sitemap</a></li>
                                <li ><a href="/pages/grievance-redressal-mechanism?otracker=${otracker}_navlinks" className="text-white">Grievance Redressal</a></li>
                                <li ><a href="/pages/ewaste-compliance-tnc?otracker=${otracker}_navlinks" className="text-white">EPR Compliance</a></li>


                            </ul>


                        </Grid>




                        <Grid item lg={3} md={6} sm={10} style={{ borderLeft: "solid 2px rgb(124, 124, 124)", paddingLeft: "20px" }}>

                            <p className="text-secondary">Mail Us: </p>
                            <ul>
                                <li ><a href="/helpcentre" className="text-white">lipkart Internet Private Limited,</a></li>
                                <li ><a href="/helpcentre" className="text-white">Buildings Alyssa,Begonia &</a></li>
                                <li ><a href="/helpcentre" className="text-white">Clove Embassy Tech Village,</a></li>
                                <li ><a href="/helpcentre" className="text-white">Outer Ring Road , Devarabeesabahalli Village,</a></li>
                                <li ><a href="/helpcentre" className="text-white">Bengaluru ,560103</a></li>
                                <li ><a href="/helpcentre" className="text-white">Karnataka,India</a></li>
                                <li ><a href="/helpcentre" className="text-white">EPR Compliance</a></li>


                            </ul>
                            <div className="social">
                                <p className="text-secondary">Social : </p>
                                <ul className="d-flex gap-4  ">
                                    <li>
                                        <a href="#">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkzMzEgMjFDMTcuOTAzNyAyMSAyMS45MzMxIDE2Ljk3MDYgMjEuOTMzMSAxMkMyMS45MzMxIDcuMDI5NDQgMTcuOTAzNyAzIDEyLjkzMzEgM0M3Ljk2MjU0IDMgMy45MzMxMSA3LjAyOTQ0IDMuOTMzMTEgMTJDMy45MzMxMSAxNi45NzA2IDcuOTYyNTQgMjEgMTIuOTMzMSAyMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY4MzEgOC4yNUgxNS4xODMxQzE0LjU4NjQgOC4yNSAxNC4wMTQxIDguNDg3MDUgMTMuNTkyMSA4LjkwOTAxQzEzLjE3MDIgOS4zMzA5NyAxMi45MzMxIDkuOTAzMjYgMTIuOTMzMSAxMC41VjIxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkzMzExIDEzLjVIMTUuOTMzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" height="24" width="24" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4M18yMCkiPgo8cGF0aCBkPSJNMTMuNTQzNiAxMC42MTc5TDIwLjA5NzEgM0gxOC41NDQxTDEyLjg1MzcgOS42MTQ0OEw4LjMwODg3IDNIMy4wNjY4OUw5LjkzOTY0IDEzLjAwMjNMMy4wNjY4OSAyMC45OTA4SDQuNjE5OTRMMTAuNjI5MSAxNC4wMDU2TDE1LjQyODggMjAuOTkwOEgyMC42NzA4TDEzLjU0MzIgMTAuNjE3OUgxMy41NDM2Wk0xMS40MTY1IDEzLjA5MDRMMTAuNzIwMiAxMi4wOTQ0TDUuMTc5NTMgNC4xNjkxMUg3LjU2NDkxTDEyLjAzNjMgMTAuNTY1MUwxMi43MzI2IDExLjU2MTFMMTguNTQ0OCAxOS44NzQ4SDE2LjE1OTVMMTEuNDE2NSAxMy4wOTA4VjEzLjA5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4M18yMCI+CjxyZWN0IHg9IjMuMDY2ODkiIHk9IjMiIHdpZHRoPSIxNy42MDM5IiBoZWlnaHQ9IjE4IiByeD0iMC4yIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" height="24" width="24" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/YoutubeLogo_958b78.svg" height="24" width="24" />
                                        </a>
                                    </li>
                                   
                                </ul>
                            </div>


                        </Grid>

                        <Grid item lg={3} md={6} sm={10} xs={10} className="mx-auto">

                            <p className="text-secondary">Registered Office Address: </p>
                            <ul>
                                <li>Flipkart Internet Private Limited,</li>
                                <li>Buildings Alyssa,Begonia &</li>
                                <li>Clove Embassy Tech Village,</li>
                                <li>Outer Ring Road , Devarabeesabahalli Village,</li>
                                <li>Bengaluru ,560103</li>
                                <li>Karnataka,India</li>
                                <li>CIN : U51109KA2012PTC066107</li>
                                <li>Telephone : <a href="#" className="px-2">044-4545454</a>/  <a href="#">044-4545454</a></li>

                            </ul>


                        </Grid>

                    </GridStyle>
                </Box>
                <hr className="text-white" />
                <BottomCompoent className="" style={{ fontSize: "13px", marginInline: "5rem" }}>

                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K" />
                        <a href="#">
                            <span >Become a Seller</span>
                        </a>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
                        <a href="https://seller.flipkart.com/?utm_source=fkwebsite&amp;utm_medium=websitedirect">
                            <span >Advertise</span>
                        </a>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                        <a href="/the-gift-card-store/1">
                            <span >Gift Cards</span>
                        </a>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                        <a href="/helpcentre">
                            <span >Help Centre</span>
                        </a>
                    </div>
                    <div><span >© 2007-2024 Flipkart.com</span>

                    </div>




                </BottomCompoent>
                <div className="mx-auto my-2" >
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" />
                </div>
            </StyledFooter>

        </>
    )
}
