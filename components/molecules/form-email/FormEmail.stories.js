import React from 'react';
import { storiesOf } from '@storybook/react';

import FormEmail from './FormEmail.jsx';

storiesOf('⚛ Molecules/FormEmail', module).add('default', () => (<div className="form-container"><FormEmail isVisible/></div>));
