import React from 'react';
import classnames from 'classnames';

import Label from '~/components/atoms/label/Label.jsx';
import FormEmail from '~/components/molecules/form-email/FormEmail.jsx';
import FormFullName from '~/components/molecules/form-full-name/FormFullName.jsx';

import { EmailMessageGroup, NameMessageGroup,  CongratsMessageGroup } from './MessagingGroups.js';
import { STATES } from './states.js';


/**
 * NewsletterSignUp
 *
 * No props passed to this component
 * */
class NewsletterSignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentState: STATES.EMAIL_COLLECTION,
      userData: {}
    };
  }

  /**
   * Handles valid email form submissions
   * Moves ui to next state
   *
   * @param {String} value - Email input value
   * @param {Boolean} hasOptedIn - true if user opted in disclaimer
   * @returns {undefined} undefined
   *
   */
  handleEmailSubmit = (value, hasOptedIn) => {
    this.setState({
      currentState: STATES.NAME_COLLECTION,
      userData: {
        email: value,
        hasOptedIn: hasOptedIn
      }
     });
  }

  /**
   * Handles valid full name form submissions
   * Logs user data object from form input
   *
   * @param {Object} value - User object - with firstName, and lastName
   * @returns {undefined} undefined
   *
   */
  handleNameSubmit = (value) => {
    this.setState({
      currentState: STATES.CONGRATS,
      userData: Object.assign(this.state.userData, value)
    }, () => {
      console.log('User Submitted: ', this.state.userData);
    });
  }

  /**
   * Blank function that will be used to set Email
   * form error state.
   *
   * @returns {undefined} undefined
   *
   */
  handleEmailError = () => {
    // Set Global Error State for email
  }

   /**
   * Blank function that will be used to set FullName
   * form error state.
   *
   * @returns {undefined} undefined
   *
   */
  handleNameError = () => {
    // Set Global Error State form full name
  }

  render() {
    const { currentState } = this.state;
    const {
      step,
      ctaText,
      emailMessageGroupVisible,
      nameMessageGroupVisible,
      congratsMessageGroupVisible,
      formEmailVisible,
      formFullNameVisible
    } = currentState;

    return (
      <div className={classnames("newsletter-sign-up",
                      `newsletter-sign-up--step-${step}`)}>
        <div className="newsletter-sign-up__email-capture">
          <Label className="newsletter-sign-up__cta">{ctaText}</Label>
          <div className="newsletter-sign-up__capture">
            <EmailMessageGroup isVisible={emailMessageGroupVisible}/>
            <NameMessageGroup isVisible={nameMessageGroupVisible}/>
            <CongratsMessageGroup isVisible={congratsMessageGroupVisible}/>
            <FormEmail isVisible={formEmailVisible} onValidSubmit={this.handleEmailSubmit}/>
            <FormFullName isVisible={formFullNameVisible} onValidSubmit={this.handleNameSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsletterSignUp;
