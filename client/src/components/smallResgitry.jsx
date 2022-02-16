import React from "react";
import { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import icon_per_75 from "../assests/icon_per_75.png";
import location from "../assests/location_icon.png";
import updated_icom from "../assests/updated_icon.png";
import BigRegistry from "./bigRegistry";
function SmallRegistry(props) {
    const [isBigCardShown, setIsBigCardShown] = useState(false)
    console.log(props)
    function changeBigRegistr() {
        console.log("hello");
    }
    return (
        <>  
            {/* <BigRegistry props = {props} style={{display: isBigCardShown ? 'inline' : 'block' }}/> */}
            {/* <Card onMouseEnter={setIsBigCardShown(true)} onmouseleave={setIsBigCardShown(false)} sx={{ */}
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
                    <img src={icon_per_75} style={{maxHeight:'50px', maxWidth:'50px'}} />
                </Typography>
                <Typography>
                    {/* {props.props.CurrenAmount / props.props.Capacity * 100} */}
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