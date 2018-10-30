import React from 'react'

  /**
   * withValidations - SIMPLE POC - HOC that wraps a form
   * and runs validations on the elements of that
   * form. Currently runs on a single element -
   * and could be expanded to handle every
   * element of a form. #TODO: ^
   *
   * @param {ReactElement} Component - React form to wrap with validation
   *
   * @returns {ReactElement} Component wrapped with validation
   *
   */
const withValidations = (Component) => {
  class FormValidation extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        formResult: {
          message: '',
          isValid: false,
          value: null
        }
      }
    }

    onInputChange = (event, validator) => {
      const { value } = event.target;
      const validationResult = validator(value);
      this.setState({...validationResult});
    }

    render () {
      return (
        <Component
          onChange={this.onInputChange}
          {...this.props}
          {...this.state}
        />
      )
    }
  }

  return FormValidation;
}

export default withValidations;
