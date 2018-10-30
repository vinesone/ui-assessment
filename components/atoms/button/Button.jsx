import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Button
 *
 * @param {Object} props - React props
 * @param {Children} [props.children] - Optional string for label
 * @param {String} [props.className] - Optional string to apply className
 * @param {Function} [props.onClick] - Optional function to fire on button click
 * @param {Boolean} [props.isEnabled] - Optional boolean indicating if button should be enabled
 * */
const Button = ({
  children,
  className,
  onClick,
  isEnabled
}) => {
  return (
    <button
      disabled={!isEnabled}
      onClick={onClick}
      className={classnames(
        'button',
        className,
        {
          'button--deactivated': !isEnabled
        })
    }>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isEnabled: PropTypes.bool
}

Button.defaultProps = {
  children: 'Submit',
  isEnabled: true
}

export default Button;
