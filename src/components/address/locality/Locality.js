import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const Locality = function({ currentCountry, value, validationState, ...props }) {
  let locality = currentCountry ? currentCountry.locality() : {}
  if (locality.name === undefined) {
    return <div />
  }
  return (
    <FormGroup
      controlId="formBasicText"
      validationState={validationState}
    >
      <ControlLabel>{locality.label || 'City'}</ControlLabel>
      <FormControl
        type="text"
        value={value}
        placeholder={locality.placeholder }
        onChange={props.onChange}
      />
      <FormControl.Feedback />
    </FormGroup>
  )
}

export default Locality
