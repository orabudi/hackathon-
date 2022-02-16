import React from "react";
import { useState, useEffect } from "react";
import { Typography,Card, Modal,Box } from "@mui/material";
import icon_per_75 from "../assests/icon_per_75.png";
import location_icon from "../assests/location_icon.png";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
function BigRegistry(props) {
    console.log("propssssss", props.props);
    const [isOpen, setIsOpen] = useState(props.props)
    const handleClose = () => {
        setIsOpen(-1);
    }
    useEffect(() => {
        // if (props.props.Id) {
            setIsOpen(props.props)
        // }
    }, [props.props])
    return (
        <>
        {/* { props.props !== -1 ?  */}
         <Modal
            open={props.props !== -1}
            // onClose={setIsOpen(-1)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        
    {/* <div>hello</div> */}
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
        test
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      בדיקה
    </Typography>
  </Box>
</Modal>
//  : <div></div> 
{/* } */}
    
        </>
    )
}

export default BigRegistry;