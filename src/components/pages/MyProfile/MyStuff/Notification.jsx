
import { Box, Typography } from "@mui/material";

export default function Notification() {


    return (
        <Box className="mt-3 bg-white d-flex flex-direction-column justify-content-center align-item-center" style={{ width: "100%", height: "80vh" }}>
            <Box className="text-center" style={{ fontSize: "14px" }}>
                <Box>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/emptyNotifications_4472f7.png" />
                </Box>
                <Typography className="text-bold my-2 mt-4 " style={{ fontSize: "18px" }}>All caught up!</Typography>
                <Typography className="text-muted" style={{ fontSize: "14px" }}>There are no new notifications for you.</Typography>

            </Box>
        </Box>
    )
}