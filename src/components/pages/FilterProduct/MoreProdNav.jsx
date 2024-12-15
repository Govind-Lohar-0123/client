import { Box, List, ListItem, styled, Typography, Link } from "@mui/material";
import { Link as routerLink } from "react-router-dom"
import Dropdown from "./Dropdown";
import { moreProd } from "../partials/data";


const StyleList = styled(List)(({ theme }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    color: "black",
    display: "flex",
    

    justifyContent: "space-between",
    alignItems: "center",
    "p": {
        fontWeight: "bold",
        fontSize: "80%",
    },
    [theme.breakpoints.down("lg")]: {
        overflowX: "scroll",
        whiteSpace: "nowrap",

    

        

    }


}))
const Wrapper=styled(Box)(({theme})=>({
    paddingInline:"20px",
    [theme.breakpoints.down("md")]:{
        marginBottom:"20px"
    }
}))


export default function MoreProdNav() {

    return (<>
        <Wrapper className=" bg-white  " style={{ boxShadow: "0 1px 1px #e0e3e5", position: "relative" }} >

            <StyleList>
                {
                    moreProd.map((item, idx) => {

                        return (
                            <Box className={(idx == 7 || idx == 8) ? "" : "filter-item-nav"}>
                                <ListItem key={idx} >
                                    <Link to="" component={routerLink} className="text-dark">
                                        <Box className="d-flex ">
                                            <Typography className="mx-1 text-bold">{item.title}</Typography>
                                            {(idx == 7 || idx == 8) ? "" :
                                                <Typography style={{ marginLeft: "auto" }}>
                                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="Chevron" className="-dOa_b XdYXbi" width="12" height="12" />
                                                </Typography>
                                            }
                                        </Box>
                                    </Link>
                                </ListItem>
                                {(idx == 7 || idx == 8) ? "" : <Dropdown list={item.list} />}
                            </Box>
                        )
                    })
                }
            </StyleList>

        </Wrapper>

    </>
    )
}