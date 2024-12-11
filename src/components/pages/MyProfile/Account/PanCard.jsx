import { Box, TextField, Typography, Button, Link, Checkbox } from "@mui/material"
import { Link as routerLink } from "react-router-dom"
import FormControlLabel from '@mui/material/FormControlLabel';

export default function PanCard() {
    return (<Box className="p-4">

        <Box className=" ">
            <Typography className="text-bold" style={{ fontSize: "19px" }} >PAN Card Information</Typography>
            <Box className="mt-3" >
                <Box>
                    <TextField style={{ width: "300px", color: "#878787" }} id="outlined-basic" label="PAN Card Number" variant="outlined" />
                </Box>
                <Box className="my-3">
                    <TextField style={{ width: "300px", color: "#878787" }} id="outlined-basic" label="Full Name" variant="outlined" />
                </Box>
                <Box style={{ border: "solid 1px #e0e0e0", backgroundColor: "white", width: "300px" }} className="p-3">
                    <input type="file" style={{ width: "300px", }} lable="Upload PAN Card (Only JPEG file is allowed)" />

                </Box>

            </Box>
            <Box className="mt-3 d-flex  " style={{ alignItems: "flex-start" }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="" />
                <Typography variant="span" className="mt-2" style={{ fontSize: "14px" }}>I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.flipkart.com. I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration.</Typography>
            </Box>
            <Box className="mt-5">
                <Button variant="contained" className="text-bold" style={{ backgroundColor: "#2874f0" }}>UPLOAD</Button>
            </Box>
            <Link className="text-bold d-block mt-5" to="/account/terms" component={routerLink}>
                Read Terms & Conditions of PAN Card Information
            </Link>
        </Box>
    </Box>


    )

}