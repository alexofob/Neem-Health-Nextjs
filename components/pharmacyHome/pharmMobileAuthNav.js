import MenuItem from 'material-ui/MenuItem';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdSearch from 'react-icons/lib/md/search';
import MdPerson from 'react-icons/lib/md/person';
import MdDashboard from 'react-icons/lib/md/dashboard';
import MdHome from 'react-icons/lib/md/home';
import Divider from 'material-ui/Divider';
import Link from 'next/prefetch';
import { PropTypes } from 'react';
import Router from 'next/router';
import { getBaseUrl } from '../../utils/auth';

const PharmMobileAuthNav = props => (
  <div>
    <MenuItem primaryText="My Dashboard" leftIcon={<MdDashboard />} />
    <MenuItem primaryText="Edit Profile" leftIcon={<MdPerson />} />
    <MenuItem
      primaryText="Get Started"
      leftIcon={<MdAddCircle />}
      onTouchTap={() => Router.push('/getStarted')}
    />
    <MenuItem
      primaryText="Search for your Drug"
      leftIcon={<MdSearch />}
      onTouchTap={props.closeDrawer}
    />
    <Link href="/">
      <a>
        <MenuItem primaryText="App Home" leftIcon={<MdHome />} onTouchTap={props.closeDrawer} />
      </a>
    </Link>
    <Divider />
    <MenuItem
      primaryText="Log Out"
      leftIcon={<MdArrowBack />}
      href={
        `https://neemhealth.eu.auth0.com/v2/logout?&returnTo=${getBaseUrl()}/auth/sign-off?redirectUrl=${props.logoutTo}`
      }
    />

  </div>
);

PharmMobileAuthNav.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  logoutTo: PropTypes.string.isRequired,
};

export default PharmMobileAuthNav;
