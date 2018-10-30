import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Row component (scaffold)
 * Used by storybook to wrap and center elements
 *
 * @param {Object} props - React props
 * @param {Children} [props.children] - Optional string for label
 * @param {String} [props.className] - Optional string to apply className
 * */
const Row = ({
  children,
  className,
}) => ( <div className={classnames('row', className)}>{children}</div>);

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Row;
