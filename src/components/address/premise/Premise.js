import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const Premise = function({ currentCountry, value, validationState, ...props }) {
  let premise = currentCountry ? currentCountry.premise() : {}
  return (
    <FormGroup
      controlId="formBasicText"
      validationState={validationState}
    >
      <ControlLabel>{premise.label || 'Address 2'}</ControlLabel>
      <FormControl
        type="text"
        value={value}
        placeholder={premise.placeholder }
        onChange={props.onChange}
      />
      <FormControl.Feedback />
    </FormGroup>
  )
}

export default Premise
