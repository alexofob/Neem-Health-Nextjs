import { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdPerson from 'react-icons/lib/md/person';
import MdLocalPharmacy from 'react-icons/lib/md/local-pharmacy';
import MdSearch from 'react-icons/lib/md/search';
import Link from 'next/prefetch';


const MobilePubNav = props => (
  <div>

    <MenuItem
      primaryText="Log in"
      leftIcon={<MdArrowForward />}
      onTouchTap={props.closeDrawer}
    />
    <MenuItem
      primaryText="Sign Up"
      leftIcon={<MdPerson />}
      onTouchTap={props.closeDrawer}
    />
    <MenuItem
      primaryText="Search for your Drug"
      leftIcon={<MdSearch />}
      onTouchTap={props.closeDrawer}
    />
    <Link href="/pharmacy"><a>
      <MenuItem
        primaryText="For Pharmacies"
        leftIcon={<MdLocalPharmacy />}
        onTouchTap={props.closeDrawer}
      />
    </a></Link>
  </div>
);

MobilePubNav.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};

export default MobilePubNav;
