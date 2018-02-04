import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const AdministrativeArea = function({ currentCountry, value, validationState, ...props }) {
  if (currentCountry === undefined) {
    return <div />
  }
  let administrativeArea = currentCountry ? currentCountry.administrativeArea() : {}
  if (administrativeArea === undefined) {
    return <div />
  }
  let administrativeAreaOptions = administrativeArea.options
  if (administrativeAreaOptions) {
    return (
      <FormGroup
        controlId="formBasicText"
        validationState={validationState}
      >
        <ControlLabel>{administrativeArea.label || 'State'}</ControlLabel>
        <FormControl componentClass="select"
          onChange={props.onChange}
        >
          <option value="" key=''>Select {administrativeArea.label}</option>
          {administrativeAreaOptions.map(administrativeAreaOption => (
            <option key={Object.keys(administrativeAreaOption)[0]}>{administrativeAreaOption[Object.keys(administrativeAreaOption)[0]]}</option>
          ))}
        </FormControl>
        <FormControl.Feedback />
      </FormGroup>
    )
  }
  return (
    <FormGroup
      controlId="formBasicText"
      validationState={validationState}
    >
      <ControlLabel>{administrativeArea.label || 'State'}</ControlLabel>
      <FormControl
        type="text"
        value={value}
        placeholder={administrativeArea.placeholder }
        onChange={props.onChange}
      />
      <FormControl.Feedback />
    </FormGroup>
  )
}

export default AdministrativeArea
