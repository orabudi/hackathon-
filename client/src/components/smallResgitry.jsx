import React from "react";
import { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import icon_per_75 from "../assests/icon_per_75.png";
import icon_per_50 from "../assests/icon_per_50.png";
import icon_per_100 from "../assests/icon_per_100.png";
import icon_per_0 from "../assests/icon_per_0.png";
import icon_per_25 from "../assests/icon_per_25.png";

import location from "../assests/location_icon.png";
import updated_icom from "../assests/updated_icon.png";
const imgDict = {
    0: icon_per_0,
    25: icon_per_25,
    50: icon_per_50,
    75: icon_per_75,
    100: icon_per_100
}
function SmallRegistry(props) {
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
            }} >
                <Typography>    
                    <img src={imgDict[props.props.Percentage]} style={{maxHeight:'50px', maxWidth:'50px'}} />
                </Typography>
                <Typography>
                    {props.props.Percentage}%
                </Typography>
                <Typography style={{fontSize: '12px'}}>
                    {props.props.city}, {props.props.Address}
                    <img src={location} style={{height: '12px', width: '12px'}} />
                </Typography>
                <Typography>
                    {props.props.Updatedate}
                    עודכן ב
                    
                    <img src={updated_icom} style={{height:'12px', width:'12px'}}/>
                </Typography>
                <Typography>
                    מזהה קופה:
                    {props.props.Id}
                </Typography>
                <Typography>
                <Button variant="contained">התראה</Button>
                </Typography>
            </Card>
        </>
    )
}
export default SmallRegistry;