const REGEX_EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const REGEX_NOT_EMPTY = /^\s*\S.*$/;

  /**
   * Builds Result Object from validation
   * results.
   *
   * **This signature normally be
   * enforced with Typescript**
   *
   * @param {String} msg - Validation message
   * @param {Boolean} isValid - true if passed validation
   * @param {String} value - String of input value
   * @returns {Object} object of formResults
   *
   */
const getResult = (msg, isValid, value) => ({
  formResult: {
    message: msg,
    isValid: isValid,
    value: value
  }
});

  /**
   * Runs validation function
   *
   * @param {RegExp} regex - Regex to run against input value
   * @param {String} value - true if passed validation
   * @param {String} value - String of input value
   * @returns {Object} object of formResults
   *
   */
const runValidation =  (regex, value, msg) => {
  if (regex.test(value)) {
    return getResult('', true, value);
  }
  return getResult(msg, false, value);
}

export default class Validation {
  static isEmail = (value) => (runValidation(REGEX_EMAIL, value, 'Please enter valid email address'))
  static isName = (value) => (runValidation(REGEX_NOT_EMPTY, value, 'First and last name required'))
}

