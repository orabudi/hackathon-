import React, { useEffect } from "react";
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
  100: icon_per_100,
};
function MouseEnter(event) {
  event.target.style.background = "#7131A1";
}
function MouseLeave(event) {
  event.target.style.background = "";
}
function SmallRegistry(props) {
    const [dataState, setDataState] = useState(props.props);
    useEffect(() => {
        setDataState(props.props)
    }, [props.props])
    function handleCollected() {
        props.handleCloseModal();
        // setDataState({...dataState, Updatedate: "17.02.2022", Percentage: 0})
    }
  return (
    <>
      <Card
        sx={{
          bgcolor: "#F2F2F2",
          marginLeft: "5px",
          marginRight: "5px",
          marginTop: "5px",
          marginBottom: "5px",
          height: "35vh",
          width: "20vw",
          borderRadius: "25px",
          boxShadow: "1px 2px 4px 1px #CECECE",
        }}
      >
        <Typography>
          <img
            src={imgDict[dataState.Percentage]}
            style={{ maxHeight: "70px", maxWidth: "70px" }}
          />
        </Typography>
        <Typography
          style={{
            fontSize: "20px",
            fontFamily: "Assistant",
            fontWeight: "bold",
            color: "#4F2270",
          }}
        >
          {dataState.Percentage}%
        </Typography>
        <Typography
          style={{
            fontSize: "12px",
            fontFamily: "Assistant",
            flexDirection: "row",
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          {dataState.city}, {dataState.Address}
          <img
            src={location}
            style={{
              height: "25px",
              width: "25px",
              paddingRight: "10px",
              paddingBottom: "5px",
            }}
          />
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            fontFamily: "Assistant",
            flexDirection: "row",
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          {dataState.Updatedate}
          עודכן ב
          <img
            src={updated_icom}
            style={{ height: "20px", width: "20px", paddingRight: "12px" }}
          />
        </Typography>
        <Typography>
          <Button
            style={{
              backgroundColor: "#7131A1",
              fontSize: "15px",
              fontFamily: "Assistant",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
            variant="contained"
          >
            התראה
          </Button>
          <Button
            onClick={
              
              () => {
                  // props.handleCloseModal()
                setDataState({...dataState, Updatedate: "17.02.2022", Percentage: 0});
            }
                // props.handleCloseModal();
                }
            
            style={{       
              backgroundColor: "#7131A1",
              fontSize: "15px",
              fontFamily: "Assistant",
              fontWeight: "bold",
              borderRadius: "20px",
              marginLeft: '5px'
            }}
            variant="contained"
          >
            אספתי
          </Button>
        </Typography>
      </Card>
    </>
  );
}
export default SmallRegistry;
