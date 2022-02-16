import React from "react";
import { Typography,Card } from "@mui/material";
import icon_per_75 from "../assests/icon_per_75.png";
import location_icon from "../assests/location_icon.png";
function BigRegistry(props) {
    return (
        <>
            <Card sx={{
                bgcolor: "#4F2270",
                height: "200px",
                width: "75px"
            }}>
                <Typography>
                    <image src={icon_per_75} />
                </Typography>
                <Typography>
                    <image src={location_icon} style={{height: '20px', width: '20px'}}/>
                    {props.props.location}
                </Typography>                
            </Card>
        </>
    )
}

export default BigRegistry;