import MenuItem from 'material-ui/MenuItem';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdSearch from 'react-icons/lib/md/search';
import Link from 'next/prefetch';
import { PropTypes } from 'react';

const PharmMobilePubNav = props => (
  <div>
    <MenuItem
      primaryText="Log in"
      leftIcon={<MdArrowForward />}
      onTouchTap={props.openLoginDialog('pharmacy')}
    />
    <MenuItem
      primaryText="Get Started"
      leftIcon={<MdAddCircle />}
      onTouchTap={props.openLoginDialog('getStarted')}
    />
    <MenuItem
      primaryText="Search for your Drug"
      leftIcon={<MdSearch />}
      onTouchTap={props.closeDrawer}
    />
    <Link href="/">
      <a>
        <MenuItem
          primaryText="App Home"
          leftIcon={<MdArrowBack />}
          onTouchTap={props.closeDrawer}
        />
      </a>
    </Link>
  </div>
);

PharmMobilePubNav.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default PharmMobilePubNav;
