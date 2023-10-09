import React from "react";
import "../styles/BotonClear.css";

const BotonClear = (props, manejarClear) => {
  return (
    <div className="boton-clear" onClick={props.manejarClear}>
      {props.children}
    </div>
  );
};

export default BotonClear;
