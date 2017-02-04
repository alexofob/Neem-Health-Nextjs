
import MenuItem from 'material-ui/MenuItem';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdPerson from 'react-icons/lib/md/person';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdSearch from 'react-icons/lib/md/search';


const MobilePubNav = () => (
  <div>

    <MenuItem
      primaryText="Log in"
      leftIcon={<MdArrowForward />}
    />
    <MenuItem
      primaryText="Sign Up"
      leftIcon={<MdPerson />}
    />
    <MenuItem
      primaryText="Search for your Drug"
      leftIcon={<MdSearch />}
    />
    <MenuItem
      primaryText="Put Pharmacy Online"
      leftIcon={<MdAddCircle />}
    />
  </div>
);


export default MobilePubNav;
