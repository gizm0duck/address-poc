'use strict'

const data = require('./AddressFieldData.json')

export default class AddressFieldData {

  constructor(countryCode) {
    this.countryCode = countryCode.toUpperCase()
  }

  fields = () => {
    return data[this.countryCode]['fields']
  }

  thoroughfare = () => {
    return this.fields().thoroughfare
  }

  premise = () => {
    return this.fields().premise
  }

  locality = () => {
    return this.fields().locality
  }

  postalCode = () => {
    return this.locality().postalCode
  }

  administrativeArea = () => {
    return this.locality().administrativeArea
  }

  postalCode = () => {
    return this.locality().postalCode
  }
}
