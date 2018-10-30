import React from 'react';
import classnames from 'classnames';

  /**
   * Since the design called for custom line breaks beyond
   * the natural document flow: This helper creates visual duples
   *
   *
   * @param {String} className - CSS class name
   * @param {Boolean} isVisible - True if visible css class name should be applied
   * @returns {React.node} React node span
   *
   */
const getMessageGroup = (className, isVisible, line1, line2) => (
  <span className={classnames('newsletter__message-group', className, { 'utils-hidden': !isVisible })}>
    <span className="newsletter__message" dangerouslySetInnerHTML={{ __html: line1 }}/>
    <span className="newsletter__message" dangerouslySetInnerHTML={{ __html: line2 }}/>
  </span>
);

export const EmailMessageGroup = ({ isVisible }) => (
  getMessageGroup('newsletter-email_message-group email-exception--tablet-p',
                   isVisible,
                   'SIGN UP FOR',
                    'THE TLC NEWSLETTER<span class="utils-hidden--mobile">.</span>'));

export const NameMessageGroup = ({ isVisible }) => (
  getMessageGroup('newsletter-name__message-group name-exception--tablet-p',
                   isVisible,
                   'ALMOST DONE! PLEASE ENTER',
                    'YOUR FIRST AND LAST NAME.'));

export const CongratsMessageGroup = ({ isVisible }) => (
  getMessageGroup('newsletter-congrats__message-group',
                   isVisible,
                   'Thank You For',
                    'Signing Up!<div class="newsletter__message__action">Look out for the latest news on your favorite shows.</div>'));
