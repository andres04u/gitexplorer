import React from 'react';
import PropTypes from 'prop-types';
import github from 'assets/images/github.svg';
import githubGreen from 'assets/images/github-green.svg';

const Footer = props => (
  <footer className="footer">
    <div className="logo">
      <a href="https://github.com/andres04u/gitexplorer" rel="noopener noreferrer" target="_blank">
        {props.dark ? (
          <img src={githubGreen} alt="Github Logo" className="logo--github" />
        ) : (
          <img src={github} alt="Github Logo" className="logo--github" />
        )}
      </a>
    </div>
    <p className="footer__copyright dark-white">
      Hecho con <span>❤</span> por{' '}
      <a href="https://www.cachecuantico.com" target="_blank" rel="noopener noreferrer">
        Caché Cuántico
      </a>
    </p>
  </footer>
);

Footer.propTypes = {
  dark: PropTypes.bool
};

export { Footer };
