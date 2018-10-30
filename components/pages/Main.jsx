import React from 'react';

import '~/components/_index.scss'; // Root styles

import Footer from '~/components/organisms/footer/Footer.jsx';
import NewsletterSignUp from '~/components/organisms/newsletter-sign-up/NewsletterSignUp.jsx';

/**
 * Main - Top level of site
 *
 * No props passed to this component
 * */
const Main = () => {
  return (
    <div className="main-page">
      <Footer>
        <NewsletterSignUp />
      </Footer>
    </div>
  );
}

export default Main;
