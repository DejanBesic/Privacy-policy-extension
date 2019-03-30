import React, { Component } from 'react';
import styled from 'styled-components'
import MultiToggle from 'react-multi-toggle';
import PropTypes from 'prop-types';
import './styles.css';

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
  width: 33%;
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


class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupSize: 2
    };
  }

  onGroupSizeSelect = value => this.setState({ groupSize: value });

  viewMorePressed = () => {
    
  }

  render() {
    const { groupSize } = this.state;
    const { LabelText, Name } = this.props;
    return (
      <Container>
        <CentralWrapper className="card card-3">
          <StyledMultiToggle
            options={groupOptions}
            selectedOption={groupSize}
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
        <MoreButton onClick={() => this.viewMorePressed()}>View More</MoreButton>
        </CentralWrapper>
      </Container>
    );
  }
}

Setting.propTypes = {
  LabelText: PropTypes.string,
  Name: PropTypes.string,
};

  
export default Setting;
  