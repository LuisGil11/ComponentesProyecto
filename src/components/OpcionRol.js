import React from "react";
import { Form, FormCheck, FormLabel } from "react-bootstrap";

const OpcionRol = (props) => {
  return (
    <div>
      <input className="form-check-input" type="checkbox" value={props.info} />
      <label className="form-check-label">{props.info}</label>
    </div>
  );
};

export default OpcionRol;
