import React, { Component } from 'react';
import styled from 'styled-components'
import MultiToggle from 'react-multi-toggle';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import { onUpdateSettings } from '../../store/actions/settings';

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

const CentralWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding-bottom: 50px;
  position: relative;
  margin-top: 10px;
`;

const MoreButton = styled.a`
  padding: 8px;
  border: 1px solid #eeeeee;
  margin: auto;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: absolute;
  cursor: pointer;
  background-color: #e8e8e8;
  text-align: center;
`;

const StyledMultiToggle = styled(MultiToggle)`
  border-right: 0px;
  border-left: 0px;  
`;

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMoreToggled: false,
      refresh: false,
    };
    this.onGroupSizeSelect = this.onGroupSizeSelect.bind(this);
  }

  onGroupSizeSelect = value => {
    this.setState({ refresh: !this.state.refresh });
    this.props.onUpdateSettings(this.props.option, value);
  }

  viewMorePressed = () => {
    this.setState({ showMoreToggled: !this.state.showMoreToggled });
  }

  render() {
    const { showMoreToggled } = this.state;
    const { LabelText, Name, ViewMoreContent, settings, option } = this.props;
    let editedOptions = [
      {
        displayName: 'Allow',
        value: 1,
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
    if (!settings[option].selected) {
      editedOptions[settings[option].value-1].optionClass = 'myClass';
    }
    return (
      <Container>
        <CentralWrapper className="card card-3">
          <StyledMultiToggle
            options={editedOptions}
            selectedOption={settings[option].value}
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
        { ViewMoreContent ? 
          <div>
            { showMoreToggled ?
              <div>
                <h4>{Name} subsettings:</h4>
                {ViewMoreContent}
              </div>
              : null
            }
            <MoreButton onClick={() => this.viewMorePressed()}>{showMoreToggled ? "Show less" : "Show more"}</MoreButton>
          </div>
          : null
        }
        </CentralWrapper>
      </Container>
    );
  }
}

Setting.propTypes = {
  LabelText: PropTypes.string,
  Name: PropTypes.string,
  ViewMoreContent: PropTypes.object,
  onSetTpye: PropTypes.func,
  option: PropTypes.string,
};

const mapDispatch = dispatch => ({
  onUpdateSettings: (option, value) => dispatch(onUpdateSettings(option, value)),
});

const mapState = (state) => ({
  settings: state.settings.settings,
});

export default connect(mapState, mapDispatch)(Setting);
  