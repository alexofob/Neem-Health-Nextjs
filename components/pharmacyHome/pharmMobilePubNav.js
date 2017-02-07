import { inject, observer } from 'mobx-react';
import MenuItem from 'material-ui/MenuItem';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdSearch from 'react-icons/lib/md/search';
import Link from 'next/prefetch';

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
    <Link href="/"><a><MenuItem
      primaryText="App Home"
      leftIcon={<MdArrowBack />}
      onTouchTap={store.closeDrawer}
    />
    </a></Link>
  </div>
)));


export default PharmMobilePubNav;
