import React from "react";
import { useState } from "react";
import SmallRegistry from "./smallResgitry";
import { Typography, Card, Modal, Box, TextField, Button } from "@mui/material";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";
import logo from "../assests/main_logo.png";
import time_icon from "../assests/time_icon.png";
import cash_icon from "../assests/cash_icon.png";
import city_icon from "../assests/city_icon.png";
import graph1 from "../assests/graph1.png";
import graph2 from "../assests/graph2.png";

import registry, { historyRegistry } from "../data";
import BigRegistry from "./bigRegistry";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 450,
  bgcolor: "background.paper",
  borderRadius: "30px",
  boxShadow: 24,
  p: 4,
};

function RegistryCatalog() {
  const [currentDisplayRegistry, setCurrentDisplayRegistry] = useState(-1);
  const [currentMonthInput, setCurrentMonthInput] = useState(0);
  const [moneyAvreage, setMoneyAvreage] = useState(300);
  const [history, setHistroy] = useState(historyRegistry);
  const [statsMode, setStatsMode] = useState(false);
  const handleMouseOver = () => {
    console.log("hlellop");
  };
  const handleClick = (id) => {
    console.log("id", id);
    setCurrentDisplayRegistry(id);
    console.log("currentDisplayRegistry", currentDisplayRegistry);
  };
  const handleInputBtn = () => {
    setHistroy([
      ...history,
      {
        חודש: "פבר",
        סכום: currentMonthInput,
      },
    ]);
    setCurrentMonthInput(0);
    setMoneyAvreage(375);
  };

  return (
    <>
      {!statsMode ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "85%",
            justifyContent: "center",
            maxHeight: "85vh",
          }}
        >
          {registry.map((currRegistry, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    handleClick(currRegistry.Id);
                  }}
                >
                  <SmallRegistry props={currRegistry} key={index} />
                </div>
                {/* /> */}
              </>
            );
          })}
          <Modal
            open={currentDisplayRegistry !== -1}
            onClose={() => {
              setCurrentDisplayRegistry(-1);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                style={{ fontFamily: "Assistant", fontWeight: "bold" }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
                textAlign={"center"}
              >
                קופה מספר 2
              </Typography>
              <Typography id="modal-modal-description" wisx={{ mt: 2 }}>
                <Chart data={history} height={300} color={"red"}>
                  <ArgumentAxis />
                  <ValueAxis />

                  <LineSeries
                    valueField="סכום"
                    argumentField="חודש"
                    color="#7131A1"
                  />
                </Chart>
              </Typography>
              <br />
              <Typography
                id="modal-modal-description"
                style={{ direction: "rtl", fontFamily: "Assistant" }}
                wisx={{ mt: 2 }}
              >
                ממוצע הסכום שנאסף: {moneyAvreage} &#x20aa;
              </Typography>
              <br />
              <Typography
                id="modal-modal-description"
                style={{ direction: "rtl", fontFamily: "Assistant" }}
                wisx={{ mt: 2 }}
              >
                עדכן חודש נוכחי:
                <TextField
                  id="filled-basic"
                  value={currentMonthInput}
                  variant="standard"
                  onChange={(evt) => setCurrentMonthInput(evt.target.value)}
                  type={"number"}
                  style={{
                    maxHeight: "10px",
                    fontSize: "10px",
                    fontFamily: "Assistant",
                  }}
                />
                <Button
                  variant="filled"
                  onClick={handleInputBtn}
                  style={{
                    backgroundColor: "#7131A1",
                    fontSize: "15px",
                    fontFamily: "Assistant",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    color: "white",
                  }}
                >
                  עדכן
                </Button>
              </Typography>
            </Box>
          </Modal>
        </div>
      ) : (
        <></>
      )}
      {statsMode ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            width: "85vw",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
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
              <img
                src={cash_icon}
                style={{ height: "60px", width: "60px", padding: "12px" }}
              />
              <Typography
                style={{
                  fontSize: "30px",
                  fontFamily: "Assistant",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#4F2270",
                }}
              >
                23,901
              </Typography>
              <Typography
                style={{
                  fontSize: "20px",
                  fontFamily: "Assistant",
                  textAlign: "center",
                  color: "gray",
                }}
              >
                סכום שנאסף
              </Typography>
            </Card>

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
              <img
                src={graph2}
                style={{
                  height: "85%",
                  width: "95%",
                  //padding: "12px",
                  marginTop: "10px",
                  justifyContent: "center",
                  //marginRight: "10px",
                }}
              />
            </Card>
          </div>

          <div>
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
              <img
                src={time_icon}
                style={{ height: "60px", width: "60px", padding: "12px" }}
              />
              <Typography
                style={{
                  fontSize: "30px",
                  fontFamily: "Assistant",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#4F2270",
                  direction: "rtl",
                }}
              >
                3 ימים ושעתיים
              </Typography>
              <Typography
                style={{
                  fontSize: "20px",
                  fontFamily: "Assistant",
                  textAlign: "center",
                  color: "gray",
                }}
              >
                זמן ממוצע למילוי קופה
              </Typography>
            </Card>

            <Card
              sx={{
                bgcolor: "#F2F2F2",
                marginLeft: "5px",
                marginRight: "5px",
                marginTop: "10px",
                marginBottom: "5px",
                height: "35vh",
                width: "20vw",
                borderRadius: "25px",
                boxShadow: "1px 2px 4px 1px #CECECE",
              }}
            >
              <img
                src={graph1}
                style={{
                  height: "85%",
                  width: "95%",
                  //padding: "12px",
                  marginTop: "10px",
                  justifyContent: "center",
                  //marginRight: "10px",
                }}
              />
            </Card>
          </div>

          <Card
            sx={{
              bgcolor: "#7030A0",
              marginLeft: "5px",
              marginRight: "5px",
              marginTop: "5px",
              marginBottom: "5px",
              color: "white",
              height: "70vh",
              width: "20vw",
              borderRadius: "25px",
              boxShadow: "1px 2px 4px 1px #CECECE",
            }}
          >
            <Typography
              style={{
                fontSize: "20px",
                fontFamily: "Assistant",
                textAlign: "center",
                fontWeight: "bold",
                color: "'white'",
                paddingTop: "10px",
              }}
            >
              התורמות ביותר
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
                fontFamily: "Assistant",
                color: "white",
                backgroundColor: "#4F2270",
                width: "80%",
                //textAlign: "center",
                borderRadius: "15px",
                marginTop: "5%",
                marginLeft: "10%",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              תל אביב
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
                fontFamily: "Assistant",
                color: "white",
                backgroundColor: "#4F2270",
                width: "80%",
                //textAlign: "center",
                borderRadius: "15px",
                marginTop: "5%",
                marginLeft: "10%",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              ראשון לציון
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
                fontFamily: "Assistant",
                color: "'white'",
                backgroundColor: "#4F2270",
                width: "80%",
                //textAlign: "center",
                borderRadius: "15px",
                marginTop: "5%",
                marginLeft: "10%",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              נתניה
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
                fontFamily: "Assistant",
                color: "'white'",
                backgroundColor: "#4F2270",
                width: "80%",
                //textAlign: "center",
                borderRadius: "15px",
                marginTop: "5%",
                marginLeft: "10%",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              הוד השרון
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
                fontFamily: "Assistant",
                color: "'white'",
                backgroundColor: "#4F2270",
                width: "80%",
                //textAlign: "center",
                borderRadius: "15px",
                marginTop: "5%",
                marginLeft: "10%",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              אילת
            </Typography>

            <img
              src={city_icon}
              style={{
                height: "60px",
                width: "60px",
                padding: "12px",
                marginTop: "5px",
              }}
            />
          </Card>
        </div>
      ) : (
        <div></div>
      )}
      {/* <div id="statsMode" display={statsMode ? 'inline' : 'none'}>
          hello
      </div> */}
      <img
        src={logo}
        onClick={() => setStatsMode(!statsMode)}
        style={{
          position: "fixed",
          bottom: "0px",
          left: "0px",
          width: "100px",
          height: "100px",
        }}
      />
    </>
  );
}

export default RegistryCatalog;
