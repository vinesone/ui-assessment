import { configure, addDecorator } from '@storybook/react';
import RowDecorator from '~/components/scaffold/row-decorator/RowDecorator';

// Adding row decorator to center content;
addDecorator(RowDecorator);

function loadStories() {
  // Pages
  require('~/components/pages/Main.stories.js');
  // Template Styles
  // Organism Styles
  require('~/components/organisms/newsletter-sign-up/NewsletterSignUp.stories.js');
  require('~/components/organisms/footer/Footer.stories.js');
  // Molecule Styles
  require('~/components/molecules/disclaimer/Disclaimer.stories.js');
  require('~/components/molecules/form-email/FormEmail.stories.js');
  require('~/components/molecules/form-full-name/FormFullName.stories.js');
  // Atoms
  require('~/components/atoms/button/Button.stories.js');
  require('~/components/atoms/input/Input.stories.js');
  require('~/components/atoms/label/Label.stories.js');
}

configure(loadStories, module);
