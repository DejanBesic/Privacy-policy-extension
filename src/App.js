import React, { Component } from 'react';
import './App.css';
import Setting from './components/Setting';
import { policies } from './XML/policies-string';


var XMLParser = require('react-xml-parser');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xml: null
    };
  }
  componentDidMount() {
    const xml = new XMLParser().parseFromString(policies);
    this.setState({ xml: xml });
  }
  render() {
    console.log(this.state.xml);
    return (
      <div>
        <Setting
          LabelText={"Expiration"}
          Name={"Cookies"}
        />
        <Setting
          Name={"Personal data"}
        />
        <Setting
          Name={"Location"}
        />
        <Setting 
          Name={"Camera"}
        />
        <Setting 
          Name={"Microphone"}
        />
        <Setting 
          Name={"Tracking activity"}
        />
        <Setting 
          Name={"Downloads"}
        />
        <Setting 
          Name={"SSL"}
        />
        <Setting 
          Name={"Javascript"}
        />
        <Setting 
          Name={"Plug-ins"}
        />
      </div>
    );
  }
}

export default App;
