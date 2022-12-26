import React from "react";
import { Form, FormCheck, FormLabel } from "react-bootstrap";

const OpcionRol = (props) => {
  return (
    <div>
      <FormCheck>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value="false"
              name="option"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">{props.info}</label>
          </div>
      </FormCheck>
    </div>
  );
};

export default OpcionRol;
