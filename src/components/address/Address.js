import React, { Component } from 'react';

import AddressFieldData from '../address_field_data/AddressFieldData'

import Country from './country/Country'
import Thoroughfare from './thoroughfare/Thoroughfare'
import Premise from './premise/Premise'
import Locality from './locality/Locality'
import AdministrativeArea from './administrative_area/AdministrativeArea'
import PostalCode from './postal_code/PostalCode'

export default class Address extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentCountry: undefined,
      countryCode : '',
      postalCode: ''
    }
  }

  postalCodeValidationState = () => {
    let postalCode = this.state.currentCountry.postalCode()
    console.log('postalCodeValidation', postalCode)
    if (postalCode && postalCode.format && this.state.postalCode != '' ) {
      let expression = new RegExp(postalCode.format, 'i')
      let result = expression.test(this.state.postalCode)
      return result ? 'success' : 'error'
    } else {
      return null
    }
  }

  handlePostalCodeChange = (event) => {
    console.log("postalCode", event.target.value)
    this.setState({
      postalCode: event.target.value
    })
  }

  handleCountryChange = (event) => {
    let countryCode = event.target.value

    let currentCountry = new AddressFieldData(countryCode)
    this.setState({
      countryCode: countryCode,
      currentCountry: currentCountry
    })
  }

  render() {
    let { currentCountry } = this.state
    return (
      <div>
        <Country
          onChange={this.handleCountryChange}
        />
        <Thoroughfare
          currentCountry={currentCountry}
          onChange={this.handleThoroughfareChange}
        />
        <Premise
          currentCountry={currentCountry}
          onChange={this.handlePremiseChange}
        />

        <Locality
          currentCountry={currentCountry}
          onChange={this.handleLocalityChange}
        />

        <AdministrativeArea
          currentCountry={currentCountry}
          onChange={this.handleAdministrativeAreaChange}
        />

        {this.state.currentCountry &&
          <PostalCode
            value={this.state.postalCode}
            currentCountry={currentCountry}
            onChange={this.handlePostalCodeChange}
            validationState={this.postalCodeValidationState()}
          />
        }
      </div>
    );
  }
}
