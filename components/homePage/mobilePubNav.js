import { inject, observer } from 'mobx-react';
import MenuItem from 'material-ui/MenuItem';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdPerson from 'react-icons/lib/md/person';
import MdLocalPharmacy from 'react-icons/lib/md/local-pharmacy';
import MdSearch from 'react-icons/lib/md/search';
import Link from 'next/prefetch';

import { ViewStore } from '../../store/viewStore';


type Props = {
  store: ViewStore,
}

const MobilePubNav = inject('store')(observer(({ store }: Props) => (
  <div>

    <MenuItem
      primaryText="Log in"
      leftIcon={<MdArrowForward />}
      onTouchTap={store.closeDrawer}
    />
    <MenuItem
      primaryText="Sign Up"
      leftIcon={<MdPerson />}
      onTouchTap={store.closeDrawer}
    />
    <MenuItem
      primaryText="Search for your Drug"
      leftIcon={<MdSearch />}
      onTouchTap={store.closeDrawer}
    />
    <Link href="/pharmacy"><a>
      <MenuItem
        primaryText="For Pharmacies"
        leftIcon={<MdLocalPharmacy />}
        onTouchTap={store.closeDrawer}
      />
    </a></Link>
  </div>
)));


export default MobilePubNav;
