
import { styled,Box ,Grid} from "@mui/material"
import { imageURL } from "../partials/data"
const GridWrapper = styled(Grid)`
    margin-block:10px;
    
`


const Image = styled("img")(({theme})=>({
    width:"100%",
    display:"d-block",
    [theme.breakpoints.down("md")]:{
       height:"140px",
       ObjectFit:"cover"
    }
}))
const GridItem=styled(Grid)`
    width:100%;
   margin-bottom:10px;
`


const MidSection = ({limit}) => {
    const {start,end}=limit;
    const urll = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <GridWrapper container lg={12} sm={12} md={12} xl={12} spacing={1}>
                {
                    imageURL.slice(start,end+1).map((url,i) => {
                        return <GridItem key={i} item lg={4} sm={12} md={4} xl={4} style={{height:"214px"}} ><img src={url} className="w-100 h-100"></img></GridItem>
                    })
                }
            </GridWrapper>
            {/* <Image src={urll} className=""></Image> */}
        </>
    )
}
export default MidSection;