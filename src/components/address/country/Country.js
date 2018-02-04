import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const Country = function({ countryCode, ...props }) {
  return (
    <FormGroup controlId="countryCode">
      <ControlLabel>Country</ControlLabel>
      <FormControl componentClass="select"
        onChange={props.onChange}
      >
        <option value="">Select a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="GB">United Kingdom</option>
        <option value="AE">United Arab Emirates</option>
        <option value="TL">Timor-Leste</option>
        <option value="VU">Vanuatu</option>
      </FormControl>
    </FormGroup>
  );
}

export default Country
