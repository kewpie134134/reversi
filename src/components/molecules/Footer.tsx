import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import constants from 'utils/constants';

const Footer = (): JSX.Element => (
  <footer>
    <Typography variant="body2" color="textSecondary" align="center">
      {constants.copyright}
      <Link color="inherit" href="/">
        {constants.title}
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  </footer>
);

export default Footer;
