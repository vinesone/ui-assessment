import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Footer component
 *
 * @param {Object} props - React props
 * @param {Children} [props.children] - Optional children to pass into the footer
 * @param {String} [props.className] - Optional string to apply className
 * */
const Footer = ({
  children,
  className,
}) => {
  return (
    <div
      className={classnames(
        'footer',
        className)
    }>
      {children}
    </div>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Footer;
