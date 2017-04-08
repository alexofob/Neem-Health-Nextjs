import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MdPerson from 'react-icons/lib/md/person';
import MdDashboard from 'react-icons/lib/md/dashboard';
import MdArrowBack from 'react-icons/lib/md/arrow-back';

import { getBaseUrl } from '../../utils/auth';

const AuthMenu = ({ logoutTo }) => (
  <Menu>
    <MenuItem primaryText="My Dashboard" leftIcon={<MdDashboard />} />
    <MenuItem primaryText="Edit Profile" leftIcon={<MdPerson />} />
    <Divider />
    <MenuItem
      primaryText="Log Out"
      leftIcon={<MdArrowBack />}
      href={
        `https://neemhealth.eu.auth0.com/v2/logout?&returnTo=${getBaseUrl()}/auth/sign-off?redirectUrl=${logoutTo}`
      }
    />
  </Menu>
);

AuthMenu.propTypes = {
  logoutTo: PropTypes.func.isRequired,
};

export default AuthMenu;
