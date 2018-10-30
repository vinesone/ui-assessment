import React from 'react';
import Row from '../row/Row.jsx';

/**
 * RowDecorator - Function component to be consumed by
 * root level of storybook application
 * */
const RowDecorator = (storyFn) => (<Row>{storyFn()}</Row>);

export default RowDecorator;
