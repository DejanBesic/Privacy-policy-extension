import React, { Component } from 'react';
import styled from 'styled-components'
import MultiToggle from 'react-multi-toggle';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import { onUpdateSubSettings } from '../../store/actions/settings';

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
  border: 1px solid #eeeeee;
  padding-top: 5px;
  padding-bottom: 5px;
  border-left: 0px;
  border-right: 0px;
`;

const Label = styled.label`
  font-size: 16px;
  padding-top: 20px;
`;

const StyledMultiToggle = styled(MultiToggle)`
  border-right: 0px;
  border-left: 0px;
`;

const groupOptions = [
  {
    displayName: 'Allow',
    value: 1
  },
  {
    displayName: 'Block',
    value: 2
  },
  {
    displayName: 'Ask',
    value: 3
  },
];

class SubSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
    };
  }

  onGroupSizeSelect = value => {
    this.props.onUpdateSubSettings(this.props.parent, this.props.option, value);
    this.setState({ refresh: !this.state.refresh });
  }

  render() {
  //   const { groupSize, viewMoreToggled } = this.state;
    const { LabelText, Name, settings, parent, option } = this.props;

    return (
      <Container>
          <StyledMultiToggle
            options={groupOptions}
            selectedOption={settings[parent].subSettings[option]}
            onSelectOption={this.onGroupSizeSelect}
            label={Name}
          />
          { LabelText ? 
            <div>
              <Label>{LabelText}</Label>
              <Input />
            </div>
            : null
          }
    </Container>
    );
  }
}
  
SubSetting.propTypes = {
  parent: PropTypes.string,
  option: PropTypes.string,
  Name: PropTypes.string,
  LabelText: PropTypes.string,
};
  
    
const mapDispatch = dispatch => ({
  onUpdateSubSettings: (parent, option, value) => dispatch(onUpdateSubSettings(parent, option, value)),
});

const mapState = (state) => ({
  settings: state.settings.settings,
});

export default connect(mapState, mapDispatch)(SubSetting);
