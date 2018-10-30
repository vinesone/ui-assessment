import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input.jsx';

storiesOf('⚛ Atoms/Input', module).add('default', () => (<Input  value={'email'}/>));
