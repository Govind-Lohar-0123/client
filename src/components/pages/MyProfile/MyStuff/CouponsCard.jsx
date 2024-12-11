import { Box, styled, Typography, Button, List, Link, Table,} from "@mui/material"
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,

    backgroundColor: "white",
    outline: "none",
    borderRadius: "5px",
    width: "420px",
    height: "350px",
    boxShadow: 24,
    p: 4,
};;
const CloseIconStyle = styled(Table)(({ theme }) => ({
    "svg": {
        // color:"white",
        color: "white",
        height: "40px"
        , width: "40px",
        fontWeight: "0"
    },
    position: 'absolute',
    top: -5,
    left: 420,
    cursor: "pointer"



}))
export default function CouponsCard({ title }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>


            <Box className="p-4 ">

                <Box className="d-flex gap-4 align-item-center mb-4">
                    <Typography className="text-bold" style={{ fontSize: "18px" }} >{title} Coupons</Typography>

                </Box>
                <Box style={{  position:"relative"}} >
                    {
                        Array.from(new Array(5), (item, idx) => {
                            return (
                                <>
                                    <Box style={{ padding: "24px 16px 24px 20px", border: " 1px solid #e0e0e0" }}>
                                        <Box className="d-flex flex-wrap align-item-center justify-content-space-between">
                                            <Typography className="text-bold" style={{ color: "#26a541", fontSize: "16px" }}>Extra ₹700 off on OPPO Enco Ai</Typography>
                                            <Typography style={{ color: " #878787", fontSize: "14px" }}>Valid till 31 Aug, 2024</Typography>
                                        </Box>
                                        <Box style={{ fontSize: "14px" }} className="mt-3 flex-wrap d-flex align-item-center justify-content-space-between">
                                            <Typography variant="span">Get extra ₹700 off on 1 item(s) (price inclusive of cashback/coupon)</Typography>
                                            <Typography onClick={handleOpen} fontSize="14px" className="text-bold" style={{ color: "#1976d2", cursor: "pointer" }}>View T&C</Typography>

                                        </Box>
                                    </Box>
                                </>
                            )
                        })
                    }
                    <Button onClick={handleOpen} className="p-3 text-center text-bold w-100" style={{ display: (open) ? "none" : "block", border: " 1px solid #e0e0e0" }}>VIEW MORE </Button>
                </Box >
                <Box className="mt-4" style={{ display: (open) ? "block" : "none" }} position="relative">
                    {
                        Array.from(new Array(5), (item, idx) => {
                            return (
                                <>
                                    <Box style={{ padding: "24px 16px 24px 20px", border: " 1px solid #e0e0e0" }} >
                                        <Box className="d-flex align-item-center justify-content-space-between">
                                            <Typography className="text-bold" style={{ color: "#26a541", fontSize: "16px" }}>Extra ₹700 off on OPPO Enco Ai</Typography>
                                            <Typography style={{ color: " #878787", fontSize: "14px" }}>Valid till 31 Aug, 2024</Typography>
                                        </Box>
                                        <Box style={{ fontSize: "14px" }} className="mt-3 d-flex align-item-center justify-content-space-between">
                                            <Typography variant="span">Get extra ₹700 off on 1 item(s) (price inclusive of cashback/coupon)</Typography>
                                            <Typography onClick={handleOpen} fontSize="14px" className="text-bold" style={{ color: "#1976d2", cursor: "pointer" }}>View T&C</Typography>

                                        </Box>
                                    </Box>
                                </>
                            )
                        })
                    }
                </Box>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    style={{right:0}}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open} style={{ position: "relative" }}>

                        {



                            <Box sx={style} >
                                <CloseIconStyle onClick={handleClose}><CloseIcon /></CloseIconStyle>
                                <Box className="px-2 py-2" style={{fontSize:"13px"}}>
                                    <ul  className="gap-3 d-flex flex-direction-column" style={{listStyle:"disc"}}>
                                        <li>This offer is valid until stocks last or till the offer ends.</li>
                                        <li>Final Price is inclusive of the offer.</li>
                                        <li>Offer is applicable on select products and brands.
                                            In the event the user returns any/all products in the order placed during the Offer Period, thereby not maintaining the minimum purchase value, as required to avail the Offer,
                                            he/she shall not be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer shall stand deducted from any refund(s) processed for the returned
                                            product(s).</li>
                                    </ul>

                                </Box>
                            </Box>


                        }
                    </Fade>
                </Modal>


            </Box>



        </>

    )

}