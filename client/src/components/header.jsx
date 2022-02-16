import React from "react";
import logo from "../assests/main_logo.png";

function Header() {
  return (
    <>
      <div
        style={{
          height: "50px",
          width: "100%",
          boxShadow: "1px 9px 15px 1px rgba(147,147,147,0.48)",
          flexDirection: "row-reverse",
          justifyContent: "flex-end",
          display: "flex",
        }}
      >
        <div style={{ width: "15%" }}>
          <img style={{ height: "55px" }} src={logo} />
        </div>

        <div
          style={{
            padding: "20px",
            color: "#4F2270",
            textAlign: "right",
            width: "10%",
          }}
        >
          שלום אור עבודי
        </div>
        <div style={{ width: "75%" }}></div>
      </div>
    </>
  );
}
export default Header;
