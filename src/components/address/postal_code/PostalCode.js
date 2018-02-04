import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const PostalCode = function({ currentCountry, value, validationState, ...props }) {
  let postalCode = currentCountry ? currentCountry.postalCode() : {}
  if (postalCode === undefined) {
    return <div />
  }

  return (
    <FormGroup
      controlId="formBasicText"
      validationState={validationState}
    >
      <ControlLabel>{postalCode.label || 'Zip Code'}</ControlLabel>
      <FormControl
        type="text"
        value={value}
        placeholder={postalCode.placeholder}
        onChange={props.onChange}
      />
      <FormControl.Feedback />
    </FormGroup>
  )
}

export default PostalCode
