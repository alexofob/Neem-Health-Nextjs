import { inject, observer } from 'mobx-react';
import MenuItem from 'material-ui/MenuItem';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdSearch from 'react-icons/lib/md/search';
import Link from 'next/prefetch';

import { ViewStore } from '../../store/viewStore';


type Props = {
  viewStore: ViewStore,
}

const PharmMobilePubNav = inject('viewStore')(observer(({ viewStore }: Props) => (
  <div>
    <MenuItem
      primaryText="Log in"
      leftIcon={<MdArrowForward />}
      onTouchTap={viewStore.closeDrawer}
    />
    <MenuItem
      primaryText="Get Started"
      leftIcon={<MdAddCircle />}
      onTouchTap={viewStore.closeDrawer}
    />
    <MenuItem
      primaryText="Search for your Drug"
      leftIcon={<MdSearch />}
      onTouchTap={viewStore.closeDrawer}
    />
    <Link href="/"><a><MenuItem
      primaryText="App Home"
      leftIcon={<MdArrowBack />}
      onTouchTap={viewStore.closeDrawer}
    />
    </a></Link>
  </div>
)));


export default PharmMobilePubNav;
