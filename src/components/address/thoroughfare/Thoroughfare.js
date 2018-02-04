import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const Thoroughfare = function({ currentCountry, value, validationState, ...props }) {
  let thoroughfare = currentCountry ? currentCountry.thoroughfare() : {}
  return (
    <FormGroup
      controlId="formBasicText"
      validationState={validationState}
    >
      <ControlLabel>{thoroughfare.label || 'Address 1'}</ControlLabel>
      <FormControl
        type="text"
        value={value}
        placeholder={thoroughfare.placeholder }
        onChange={props.onChange}
      />
      <FormControl.Feedback />
    </FormGroup>
  )
}

export default Thoroughfare
