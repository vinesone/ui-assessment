import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'rc-checkbox';

/**
 * Disclaimer
 *
 * @param {Object} props - React props
 * @param {Boolean} [props.onOptIn] - Optional callback function when use opts into disclaimer
 * */
class Disclaimer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  /**
   * Calls opt in method if one is passed as prop
   *
   * @returns {undefined} undefined
   *
   */
  dispatchOptInUpdate = () => {
    const { onOptInUpdate } = this.props;

    if (onOptInUpdate) {
      onOptInUpdate(this.state.checked);
    }
  }

   /**
   * Handles update of state on
   * checkbox update
   *
   * @param {Object} event - Synthetic event from input change
   * @returns {undefined} undefined
   *
   */
  handleCheckUpdate = (event) =>  {
    const { checked } = event.target;

    this.setState({
      checked: checked
    }, this.dispatchOptInUpdate );
  }

  /**
   * Handles toggling checkbox's state from
   * clicking on disclaimer text
   *
   * @param {Object} event - Synthetic event from input change
   * @returns {undefined} undefined
   *
   */
  handleToggleCheck = (event) => {
    event.preventDefault();

    this.setState({
      checked: !this.state.checked
    }, this.dispatchOptInUpdate )
  }

  render() {
    return (
      <div className="disclaimer">
        <span className="disclaimer__checkbox-column">
          <Checkbox checked={this.state.checked}
                    className="disclaimer__checkbox"
          onChange={this.handleCheckUpdate}/>
        </span>
        <div className="disclaimer__label" onClick={this.handleToggleCheck}>
          I agree to receive information from Discovery
          Communications in accordance with the following&nbsp;
          <a className="disclaimer__link" href="#">Privacy Policy</a>
        </div>
      </div>
    );
  }
}

Disclaimer.proTypes = {
  onOptIn: PropTypes.func
}

export default Disclaimer;
