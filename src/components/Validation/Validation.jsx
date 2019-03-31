import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { policies } from '../../XML/policies-string';
import { onXmlLoad, onValidate } from '../../store/actions/xml';
import { onUpdateSettings } from '../../store/actions/settings';
import { onUpdateSubSettings } from '../../store/actions/settings';
import axios from 'axios';

const Container = styled.div``;

const Publisher = styled.div`
  
`;
const Policies = styled.div`
  padding-left: 23px;'
`;

const SettingLI = styled.li`
  color: ${props => props.selected === false ? '#807b77' : props.value === 1 ? '#18922c' : props.value === 2 ? 'red' : 'orange'}
  padding-top: 20px;
`;

const SettingLI2 = styled.li`
  color: ${props =>  props.value === 1 ? '#18922c' : props.value === 2 ? 'red' : 'orange'}
  padding-top: 20px;
`;

const StyledButton = styled.a`
  padding: 2px;
  background-color: ${props => props.value === 1 ? '#18922c' : 'red'}
  color: white;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
`;

const ButtonsWrapper = styled.span`
  float: right;
`;



var XMLParser = require('react-xml-parser');

class Validation extends Component {
  componentDidMount() {
    debugger
    axios.get('http://localhost:8081/dmschema/policies-example.xml')
    .then(response => console.log(response))
    .catch(error => console.log(error));
    const xml = new XMLParser().parseFromString(policies);
    this.props.onXmlLoad(xml);
    this.props.validatePolicies();
  }
   
  findKeys = (obj) => {
    var keyList = [];
    Object.keys(obj).forEach((key, index) => {
      keyList.push(key);
    })
    return keyList;
  }

  render() {
      const { xml } = this.props;
      const validated = xml.validated;
      console.log(validated);
      if (!Object.keys(validated).length) return null;
      const keyList = this.findKeys(validated.policies);
      return(
          <Container>
            <Publisher>
              <ul>
                <li>{validated.publisher.name ? `Publisher: ${validated.publisher.name}`: null } <br></br></li>
                <li>{validated.publisher.email ? `Email: ${validated.publisher.email}`: null }<br></br></li>
                <li>{validated.publisher.contact ? `Contact: ${validated.publisher.contact}`: null }<br></br></li>
                <li>{validated.publisher.creation_date ? `Creation date: ${validated.publisher.creation_date}`: null }<br></br></li>
             </ul>
            </Publisher>
            <Policies>
                { keyList.map((key) => {
                  return (<SettingLI key={key} value={validated.policies[key].value} selected={validated.policies[key].selected}>
                      Name: {validated.policies[key].name} <br></br>
                      <span style={{ paddingLeft: 23 }}>Description: {validated.policies[key].description}</span>
                        { validated.policies[key].value === 3 ?
                          <ButtonsWrapper>
                            <StyledButton value={1} onClick={() => { this.props.onUpdateSettings(key, 1); this.props.validatePolicies(); }}>Allow</StyledButton>
                            <StyledButton value={2} onClick={() => { this.props.onUpdateSettings(key, 2); this.props.validatePolicies(); }}>Block</StyledButton>
                          </ButtonsWrapper>
                          : null
                        }
                      <ul>
                        
                      {/* children */}
                      {  this.findKeys(validated.policies[key]).map((childKey) => {
                          if (!validated.policies[key][childKey].name) return null;
                           return (<SettingLI2 key={childKey} value={validated.policies[key][childKey].value} >
                                {validated.policies[key][childKey].name} <br></br>
                               <span style={{ paddingLeft: 23 }}>{validated.policies[key][childKey].description}</span>
                               { validated.policies[key][childKey].value === 3 ?
                                  <ButtonsWrapper>
                                    <StyledButton onClick={() => { this.props.onUpdateSubSettings(key, childKey, 1); this.props.validatePolicies(); }} value={1}>Allow</StyledButton>
                                    <StyledButton value={2} onClick={() => { this.props.onUpdateSubSettings(key, childKey, 2); this.props.validatePolicies(); }}>Block</StyledButton>
                                  </ButtonsWrapper>
                                  : null
                                }
                             </SettingLI2>
                           );
                         })
                      }</ul>
                    </SettingLI>);
                  })
                }
                  

            </Policies>
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
  onUpdateSubSettings: (parent, option, value) => dispatch(onUpdateSubSettings(parent, option, value)),
  onUpdateSettings: (option, value) => dispatch(onUpdateSettings(option, value)),
  validatePolicies: () => dispatch(onValidate()),
});

const mapState = (state) => ({
  settings: state.settings.settings,
  xml: state.xml,
});

export default connect(mapState, mapDispatch)(Validation);
    