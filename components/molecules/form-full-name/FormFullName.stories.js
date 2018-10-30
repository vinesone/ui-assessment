import React from 'react';
import { storiesOf } from '@storybook/react';

import FormFullName from './FormFullName.jsx';

storiesOf('⚛ Molecules/FormFullName', module).add('default', () => (<div className="form-container"><FormFullName isVisible/></div>));
