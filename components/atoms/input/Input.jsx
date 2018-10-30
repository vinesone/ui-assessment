import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Input
 *
 * @param {Object} props - React props
 * @param {String} [props.className] - Optional string to apply className
 * @param {Boolean} [props.hasError] - Optional boolean is true: if form is in an error state
 * @param {Boolean} [props.id] - Optional string for input id
 * @param {Boolean} [props.isValid] - Optional boolean is true: if all validations are met
 * @param {Boolean} [props.name] - Optional string to name of input
 * @param {Boolean} [props.type] - Optional string change type of input field (default: text)
 * @param {Boolean} [props.validation] - Optional function to validate input content
 * @param {Boolean} [props.value] - Optional string that sets placeholder text
 * */
export default class Input extends React.Component {

  static defaultProps = { type: 'text' }

  constructor(props) {
    super(props);
    const { value } = props;
    // Placeholder value set
    this.state = {
      value: value,
      hasInput: false
    };
  }

  /**
   * Handles focus - mostly there to clear default value
   *
   * @returns {undefined} undefined
   *
   */
  handleFocus = () => {
    if (!this.state.hasInput) {
      this.setState({ value: '' });
    }
  }

  /**
   * Handles input changes
   * Runs validation
   * Sets state with input value
   *
   * @param {Object} event - Synthetic event from input change
   * @returns {undefined} undefined
   *
   */
  handleChange = (event) => {
    const { onChange, validation } = this.props;

    this.setState({
      value: event.target.value,
      hasInput: true
    });

    if (onChange, validation) {
      onChange(event, validation);
    }
  }

  /**
   * Handles input blur - mostly for restoring
   * default value
   *
   * @param {Object} event - Synthetic event from input change
   * @returns {undefined} undefined
   *
   */
  handleBlur = (event) => {
    if (event.target.value === '') {
      this.setState({
        value: this.props.value,
        hasInput: false
      });
    }
  }

  render() {
    const { hasInput } = this.state;
    const { className, hasError, isValid, name, type } = this.props;

    return (<input
              type={type}
              name={name}
              value={this.state.value}
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              className={
                classnames(
                  'input',
                  { 'input--hasError': hasError && hasInput,
                    'input--isValid': isValid && hasInput },
                  className)}
              />);
  }
}

Input.propTypes = {
  className: PropTypes.string,
  hasError: PropTypes.bool,
  id: PropTypes.string,
  isValid: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  validation: PropTypes.func,
  value: PropTypes.string
}
