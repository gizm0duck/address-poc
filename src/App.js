import React, { Component } from 'react';
import { Row, Col, Grid, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

import FieldGroup from './components/form/FieldGroup'
import Address from './components/address/Address'

import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
            <h2>Internalized Address Form PoC</h2>
            <form>
              <Address />

              <Button type="submit">Submit</Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
