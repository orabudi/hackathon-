import React from "react";
import { useState } from "react";
import { Card, Typography } from "@mui/material";
import icon_per_75 from "../assests/icon_per_75.png";
function SmallRegistry(props) {
    const [isBigCardShown, setIsBigCardShown] = useState(false)
    console.log(props)
    return (
        <>
            <Card sx={{
                bgcolor: '#F2F2F2',
                marginLeft: '5px',
                marginRight: '5px',
                marginTop: '5px',
                marginBottom: '5px',
                minHeight: '100px',
                minWidth: '100px',
                
            }}>
                <Typography>
                    <img src={icon_per_75} style={{maxHeight:'50px', maxWidth:'50px'}} />
                </Typography>
                <Typography>
                    {props.props.location}
                </Typography>
                <Typography>
                    {props.props.status}
                </Typography>
            </Card>
        </>
    )
}
export default SmallRegistry;