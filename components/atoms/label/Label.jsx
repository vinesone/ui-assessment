import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Label component (Atom)
 *s
 * @param {Object} props - React props
 * @param {Children} [props.children] - Optional string for label
 * @param {String} [props.className] - Optional string to apply className
 * @param {String} [props.dangerousText] - Optional string dangerously set text
 * */
const Label = ({
  children,
  className,
  dangerousText
}) => {
  return dangerousText ? <span className={classnames('label', className)} dangerouslySetInnerHTML={{ __html: dangerousText }}/> :
                         <span className={classnames('label', className)}>{children}</span>;
}

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dangerousText: PropTypes.string
}

export default Label;
