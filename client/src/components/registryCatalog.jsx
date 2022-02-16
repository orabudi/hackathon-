import React from "react";
import SmallRegistry from "./smallResgitry";
import registry from "../data";
function RegistryCatalog() {
  return (
    <>
      <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '1500px',
            
      }}
        >
        {registry.map((currRegistry) => {
            return <SmallRegistry props={currRegistry} />;
        })}
      </div>
    </>
  );
}

export default RegistryCatalog;
