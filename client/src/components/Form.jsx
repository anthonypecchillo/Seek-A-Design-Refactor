import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  /* grid-area: contact-form; */
  grid-column: 2/3;
  grid-row: 2/4;

  display: grid;
  grid-template-columns: 6.5fr 1fr;
  grid-template-rows: .75fr .75fr .75fr 4fr 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 14px;

  justify-items: center;
  height: 100%;
  width: 90%;
`;

const FormField = styled.div`
  grid-column: 1/3;
  width: 100%;
`;

const FormLabelHidden = styled.label`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const FormInput = styled.input`
  background-color: #4D766E;
  border: none;
  border-radius: 25px;
  color: white;
  font-family: 'AlexandriaFLF';
  font-size: 15px;
  height: 100%;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 4px;
  width: 100%;
  ${({ active }) => active && `
    background-color: white;
    border: 1px solid #06837A;
    color: #4D766E;
  `}

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: white;
    opacity: 1;
  }
`;

const DisclaimerText = styled.span`
  font-family: 'AlexandriaFLF';
  font-size: 14px;
  color: rgb(88, 87, 87);
  text-align: left;
  /* padding-right: 5px; */
  padding-left: 18px;
`;

const FormTextArea = styled.textarea`
  background-color: #4D766E;
  border-radius: 25px;
  color: white;
  font-family: 'AlexandriaFLF';
  font-size: 15px;
  height: 100%;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 16px;
  resize: none;
  width: 100%;
  ${({ active }) => active && `
    background-color: white;
    color: #06837A;
  `}

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: white;
    opacity: 1;
  }
`;

const FormButton = styled.button`
  background-color: #4D766E;
  border: none;
  border-radius: 25px;
  color: white;
  font-family: 'AlexandriaFLF';
  font-size: 15px;
  height: 75%;
  padding-top: 4px;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: #562554;
    color: white;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject:  '',
      message: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      guests: this.state.guests
    }

    this.props.handleSubmitButtonClick(formData);
    event.preventDefault();
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FormField id="name" autoFocus>
          <FormLabelHidden htmlFor="name">First Name:</FormLabelHidden>
          <FormInput
            active={this.state.name}
            id="name"
            name="name"
            placeholder="NAME"
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            required
          />
        </FormField>

        <FormField id="email">
          <FormLabelHidden htmlFor="email">Email:</FormLabelHidden>
          <FormInput
            active={this.state.email}
            id="email"
            name="email"
            placeholder="EMAIL"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
        </FormField>

        <FormField id="subject">
          <FormLabelHidden htmlFor="subject">Subject:</FormLabelHidden>
          <FormInput
            active={this.state.subject}
            id="subject"
            name="subject"
            placeholder="SUBJECT"
            type="text"
            value={this.state.subject}
            onChange={this.handleInputChange}
          />
        </FormField>

        <FormField id="message">
          <FormLabelHidden htmlFor="message">Message:</FormLabelHidden>
          <FormTextArea
            active={this.state.message}
            id="message"
            name="message"
            placeholder="MESSAGE"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </FormField>

        <DisclaimerText>
          * All e-mails will be answered in a timely manner. Please include all details when looking for pricing (quality, size, SEND colors, etc.) Marketing e-mails will not be sent to this address.
        </DisclaimerText>

        <FormButton type="submit" onClick={this.handleSubmit}>SEND</FormButton>
      </StyledForm>
    );
  }
}

export default Form;
