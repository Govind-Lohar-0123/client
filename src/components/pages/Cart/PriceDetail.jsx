import { Box, styled, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarts, removeFromCart } from "../../react_redux/redux/actions/cartAction";
const PriceDetailComponent = styled(Box)(({ theme }) => ({
    minHeight: "47px",
    border: "solid 1px rgb(225, 220, 220)",
    boxShadow: " rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
    backgroundColor: "white",
    marginLeft: "20px",

}))
const MiddleBox = styled(Box)(({ theme }) => ({
    "> div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",


    },
    "p": {
        fontSize: "16px"
    }
}))
const TotalAmount = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "> p": {
        fontSize: "1.2rem",
        fontWeight: "bold",
    }
}))


export default function PriceDetail() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCarts());
    }, [])

    const data = useSelector((state) => state.cart)
    
    function getTotalPrice(){
        let sum=0;
        data.prods.forEach((item,idx)=>{
            let s=item.content.price.sell_price;
           s=s.replace("₹","");
           s=s.replace(",","");
            sum+=parseInt(s);
        })
        return sum;
    }
    
   

    return (
        <>
            <PriceDetailComponent>
                <Box className="px-4 pt-3">
                    <Typography style={{ fontSize: "17px" }} className=" text-bold text-muted">PRICE DETAILS</Typography>
                </Box>
                <hr className="w-100" />

                <MiddleBox className="py-2 px-4  ">
                    {/* <Box >
                        <Typography>Price ({(data.status)?data.prods.length : 0} item)</Typography>
                        <Typography >₹27,999</Typography>
                    </Box>
                    <Box className="my-3" >
                        <Typography >Discount</Typography>
                        <Typography style={{ color: "rgb(11, 163, 11)" }}> ₹4,000</Typography>
                    </Box> */}
                    <Box>
                        <Typography >Delivery Charges</Typography>
                        <Typography style={{ color: "rgb(11, 163, 11)" }}>Free</Typography>
                    </Box>

                </MiddleBox>
                <hr style={{ borderTop: "dotted 1px" }} className="mx-4" />
                <TotalAmount className=" px-4 ">
                    <Typography  >Total Amount</Typography>
                    <Typography >₹{getTotalPrice()}</Typography>

                </TotalAmount>          
                <hr style={{ borderTop: "dotted 1px" }} className="mx-4" />
   
                <Box className=" px-4 pb-3">
                    <Typography  className="text-bold"style={{ color: "rgb(11, 163, 11)" }}>You will save ₹4,000 on this order</Typography>
                </Box>

            </PriceDetailComponent>

        </>
    )
}
