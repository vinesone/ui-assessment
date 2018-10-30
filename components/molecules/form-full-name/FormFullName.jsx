import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../atoms/button/Button.jsx';
import Input from '../../atoms/input/Input.jsx';

import Validation from '../../scaffold/validation/Validation.js';


/**
 * FormFullName
 *
 * @param {Object} props - React props
 * @param {Function} [props.onValidSubmit] - Optional function to call when form passes all validation
 * @param {Boolean} [props.isVisible] - Optional property to set visible class name
 * */
class FormFullName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
      firstName: '',
      firstNameValid: false,
      lastName: '',
      lastNameValid: false
    }
  }

  /**
   * Handles validating first name of form
   * sets internal state on form input
   *
   * @param {Object} event - Synthetic event from input change
   * @param {Function} validation - Function to call for validation
   * @returns {undefined} undefined
   *
   */
  handleFirstNameUpdate = (event, validation) => {
    const { value: inputValue } = event.target;
    const result = validation(inputValue);
    const { formResult } = result;
    const { message, isValid, value } = formResult;

    this.setState({
      errorMsg: message,
      firstName: value,
      firstNameValid: isValid
    });
  }

  /**
   * Handles validating last name of form
   * sets internal state on form input
   *
   * @param {Object} event - Synthetic event from input change
   * @param {Function} validation - Function to call for validation
   * @returns {undefined} undefined
   *
   */
  handleLastNameUpdate = (event, validation) => {
    const { value: inputValue } = event.target;
    const result = validation(inputValue);
    const { formResult } = result;
    const { message, isValid, value } = formResult;

    this.setState({
      errorMsg: message,
      lastName: value,
      lastNameValid: isValid
    });
  }

  /**
   * Handles calling final submit on form
   * once the form is in a valid state
   * it passes a user object with
   * { firstName: *. lastName: * }
   * from user input
   *
   * @param {Object} event - Synthetic event from input change
   * @returns {Object} User object
   *
   */
  handleSubmit = (event) => {
    const { onValidSubmit } = this.props;

    event.preventDefault();

    if (onValidSubmit) {
      onValidSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName
      });
    }
  }

  render() {
    const { className, isVisible } = this.props;
    const { firstNameValid, lastNameValid } = this.state;
    const hasError = !(firstNameValid && lastNameValid);

    return (
      <form className={classnames(
        "form-full-name",
        className,
        {
          'utils-hidden': !isVisible
        }
      )}>
        <Input
          className="form-full-name__input"
          value={"First Name"}
          onChange={this.handleFirstNameUpdate}
          validation={Validation.isName}
          isValid={firstNameValid}
          hasError={hasError}
        />
        <Input
          className="form-full-name__input"
          value={"Last Name"}
          onChange={this.handleLastNameUpdate}
          isValid={lastNameValid}
          hasError={hasError}
          validation={Validation.isName}
        />
        <Button isEnabled={!hasError} onClick={this.handleSubmit}>SIGN UP</Button>
      </form>
    );
  }
}

FormFullName.propTypes = {
  onValidSubmit: PropTypes.func,
  isVisible: PropTypes.bool
}

export default FormFullName;
