import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../atoms/button/Button.jsx';
import Input from '../../atoms/input/Input.jsx';
import Disclaimer from '../disclaimer/Disclaimer.jsx';

import Validation from '../../scaffold/validation/Validation.js';
import withValidation from '../../scaffold/with-validation/withValidation.js';


/**
 * FormEmail
 *
 * @param {Object} props - React props
 * @param {Object} [props.formResults] - Optional object sent from form validator
 * @param {Boolean} [props.formResults.isValid] - Optional boolean if form is valid from validator
 * @param {String} [props.formResults.message] - Optional string with custom error message from validation
 * @param {String} [props.formResults.value] - Optional string value as passed through the validator
 * @param {Function} [props.onChange] - Optional function to call when form elements are updating
 * @param {Function} [props.onValidSubmit] - Optional function to call when form passes all validation
 * @param {Boolean} [props.isVisible] - Optional property to set visible class name
 * */
class FormEmail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasOptedIn: false };
  }

  /**
   * Handles form submit when form is
   * in valid state.
   *
   * @param {Object} event - Synthetic event from input change
   * @returns {undefined} undefined
   *
   */
  handleSubmit = (event) => {
    const { hasOptedIn } = this.state;
    const { onValidSubmit, formResult } = this.props;
    const { value } = formResult;

    event.preventDefault();

    if (hasOptedIn && onValidSubmit) {
      onValidSubmit(value, hasOptedIn);
    }
  }

  /**
   * Handles updating state - when user
   * checks the agree button on the form
   * disclaimer
   *
   * @param {Boolean} optedIn - True if user agreed to disclaimer
   * @returns {undefined} undefined
   *
   */
  handleOptInUpdate = (optedIn) => {
    this.setState({
      hasOptedIn: optedIn
    });
  }

  render() {
    const { hasOptedIn } = this.state;
    const { formResult, onChange, isVisible } = this.props;
    const { isValid, message } = formResult;
    const hasError = (message !== '') && (!isValid);

    return (
      <form className={classnames("form-email", {
        'utils-hidden': !isVisible
        })}>
        <Input value={"enter email address"}
          onChange={onChange}
          isValid={isValid}
          hasError={hasError}
          validation={Validation.isEmail}/>
         <Button isEnabled={isValid && hasOptedIn} onClick={this.handleSubmit}>NEXT</Button>
         <Disclaimer onOptInUpdate={this.handleOptInUpdate}/>
      </form>
    );
  }
}

FormEmail.propTypes = {
  formResults: PropTypes.shape({
    message: PropTypes.string,
    isValid: PropTypes.bool,
    value: PropTypes.string
  }),
  onChange: PropTypes.func,
  onValidSubmit: PropTypes.func,
  isVisible: PropTypes.bool
}

export default withValidation(FormEmail);
