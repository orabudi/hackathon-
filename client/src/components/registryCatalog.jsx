import React from "react";
import { useState } from "react";
import SmallRegistry from "./smallResgitry";
import { Typography, Card, Modal, Box } from "@mui/material";

import registry, { histroyRegistry } from "../data";
import BigRegistry from "./bigRegistry";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function RegistryCatalog() {
  const [currentDisplayRegistry, setCurrentDisplayRegistry] = useState(-1);
  const handleMouseOver = () => {
    console.log("hlellop");
  };
  const handleClick = (id) => {
    console.log("id", id);
    setCurrentDisplayRegistry(id);
    console.log("currentDisplayRegistry", currentDisplayRegistry);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1500px",
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
          onClose={() => { setCurrentDisplayRegistry(-1)}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              מזהה קופה: {}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              בדיקה
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default RegistryCatalog;


// u(id)