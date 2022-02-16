import React from "react";
import SmallRegistry from "./smallResgitry";
import registry from "../data";
import BigRegistry from "./bigRegistry";
function RegistryCatalog() {
    const handleMouseOver = () => {
        console.log("hlellop");
    }
  return (
    <>
      <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '1500px',
            
      }}
        >
        {registry.map((currRegistry, index) => {
            return (
                <>
                    <div onMouseOver={handleMouseOver}>
                        <SmallRegistry props={currRegistry} key={index + 1}/>
                    </div>
                     {/* /> */}             
                </>
            );
        })}
      </div>
    </>
  );
}

export default RegistryCatalog;
