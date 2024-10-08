import { Box, Stack, Typography, styled, Button, typographyClasses, Divider } from "@mui/material";
import Countdown from "react-countdown"
const Deals=styled(Typography)`
    line-height:40px;
    font-size:1.3rem;
    word-spacing: 0;
  `

  const Timer = styled(Box)`
  display:flex;
 
  align-items:center;
  gap:2px;
  margin-left:20px;
  justify-content:center;
  

`
const renderer = ({ hours, minutes, seconds }) => {
    return (<Box variant="span" >{hours} : {minutes} : {seconds} Left</Box>)
}

const ProductTitle = ({data}) => {
    const {time,title}=data;
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return(
        <>
        <Box className=" d-flex bg-white  py-3 px-3 align-items-center justify-content-space-between w-100">
            <Deals className="text-bold" >{title}</Deals>
            {
                (time) ? <Timer>
                    <img src={timerURL} style={{ width: "25px" }} />
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                </Timer> : ""
            }
            <Box className="bg-primary _3n8fnay4 _3n8fnapm _3n8fnah3 _3n8fna1 _3n8fna8k _1i2djtb9 _1i2djt0 _9nihix85" theme="[object Object]" style={{ display: "flex", flexBasis: "auto", flexDirection: "column", flexShrink: 0, alignItems: "stretch", borderWidth: " 0px", minHeight: "0px", minWidth: "0px", position: "relative", zIndex: 0, boxSizing: "border-box", borderRadius: "42px" }}><svg width="16" height="16" fill="none" viewBox="0 0 17 17" style={{ margin: "4px" }}><path d="m6.627 3.749 5 5-5 5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></Box>
            {/* <Button variant="contained" className="bg-primary px-3 " style={{ paddingBlock:"10px",marginLeft: "auto" }}> VIEW ALL</Button> */}
        </Box>
    </>
)
}

export default ProductTitle;