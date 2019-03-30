import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { policies } from '../../XML/policies-string';
import { onXmlLoad, onValidate } from '../../store/actions/xml';

const Container = styled.div``;

var XMLParser = require('react-xml-parser');

class Validation extends Component {
  componentDidMount() {
    const xml = new XMLParser().parseFromString(policies);
    this.props.onXmlLoad(xml);
    this.props.validatePolicies();
  }

  render() {
      return(
          <Container>
         
          </Container>
      );
  }
}

Validation.propTypes = {
  onXmlLoad: PropTypes.func,
  validatePolicies: PropTypes.func,
};
  
const mapDispatch = dispatch => ({
  onXmlLoad: (payload) => dispatch(onXmlLoad(payload)),
  validatePolicies: () => dispatch(onValidate()),
});

const mapState = (state) => ({
  settings: state.settings.settings,
  xml: state.xml,
});

export default connect(mapState, mapDispatch)(Validation);
    