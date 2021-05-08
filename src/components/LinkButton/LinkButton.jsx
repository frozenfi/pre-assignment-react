import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './LinkButton.module.scss';

const LinkButton = ({ to, children }) => {
  return (
    <button className={classes.linkButton}>
      <Link to={to}>{children}</Link>
    </button>
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkButton;
