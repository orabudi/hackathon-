import React from "react";
import bank_icon from "../assests/white_money_box.png";
import dashboard_icon from "../assests/whitw_dashboard_icon.png";
import ".././App.css";

function changeBackground(e) {
  e.target.style.background = "#7030A0";
}

function MouseEnter(event) {
  event.target.style.background = "#7131A1";
}
function MouseLeave(event) {
  event.target.style.background = "";
}

function NavBar() {
  return (
    <>
      <div
        style={{
          width: "15%",
          height: "1000px",
          backgroundColor: "#4F2270",
          position: "absolute",
          right: "0px",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
          style={{
            padding: "20px",
            color: "white",
            textAlign: "right",
            flexDirection: "row-reverse",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <div>
            <img style={{ height: "35px" }} src={bank_icon} />
          </div>
          <div style={{ paddingRight: "15px" }}>קופות</div>
        </div>

        <div
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
          style={{
            padding: "20px",
            color: "white",
            textAlign: "right",
            flexDirection: "row-reverse",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <div>
            <img style={{ height: "35px" }} src={dashboard_icon} />
          </div>
          <div style={{ paddingRight: "15px" }}>תמונת מצב</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
