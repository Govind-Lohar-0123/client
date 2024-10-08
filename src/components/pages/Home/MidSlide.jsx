import { Box } from "@mui/material"
import Slide1 from "./Slides/Slide1";
import { styled, Grid } from "@mui/material";


const Component = styled(Box)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;


    
`

const Image = styled("img")({
    // padding:"4px"
})
const ImageBox = styled(Box)(({theme})=>({
    
   
    marginLeft:"10px",
  
    height:"100%",
  
    backgroundColor:"white",
    [theme.breakpoints.down("md")]:{
        display:"none"
    }
}))
const SlideBox=styled(Box)(({theme})=>({
   width:"83%",
   height:"100%",
   [theme.breakpoints.down("md")]:{
        width:"100%"
}
}))
    


    



const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';


const MidSlide = ({ prods, time,title}) => {
   
    return (

        <Component  >
            <SlideBox  className="  ">
                <Slide1 prods={prods}  time={time} title={title} />
            </SlideBox >
            <ImageBox   >
                <Image src={adURL} className="d-block w-100 h-100" />

            </ImageBox >

         </Component >
        )
}
export default MidSlide;