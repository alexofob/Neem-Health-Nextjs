import { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdLocalPharmacy from 'react-icons/lib/md/local-pharmacy';
import MdDashboard from 'react-icons/lib/md/dashboard';
import MdSearch from 'react-icons/lib/md/search';
import MdPerson from 'react-icons/lib/md/person';
import Link from 'next/prefetch';
import Divider from 'material-ui/Divider';

import { getBaseUrl } from '../../utils/auth';

const MobileAuthNav = props => (
  <div>
    <MenuItem primaryText="My Dashboard" leftIcon={<MdDashboard />} />
    <MenuItem primaryText="Edit Profile" leftIcon={<MdPerson />} />
    <MenuItem
      primaryText="Search for your Drug"
      leftIcon={<MdSearch />}
      onTouchTap={props.closeDrawer}
    />
    <Link href="/pharmacy">
      <a>
        <MenuItem
          primaryText="For Pharmacies"
          leftIcon={<MdLocalPharmacy />}
          onTouchTap={props.closeDrawer}
        />
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

MobileAuthNav.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  logoutTo: PropTypes.func.isRequired,
};

export default MobileAuthNav;
