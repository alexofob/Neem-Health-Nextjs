import { inject, observer } from 'mobx-react';
import MenuItem from 'material-ui/MenuItem';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdSearch from 'react-icons/lib/md/search';

import { ViewStore } from '../../store/viewStore';


type Props = {
  store: ViewStore,
}

const PharmMobilePubNav = inject('store')(observer(({ store }: Props) => (
  <div>
    <MenuItem
      primaryText="Log in"
      leftIcon={<MdArrowForward />}
      onTouchTap={store.closeDrawer}
    />
    <MenuItem
      primaryText="Get Started"
      leftIcon={<MdAddCircle />}
      onTouchTap={store.closeDrawer}
    />
    <MenuItem
      primaryText="Search for your Drug"
      leftIcon={<MdSearch />}
      onTouchTap={store.closeDrawer}
    />
  </div>
)));


export default PharmMobilePubNav;
