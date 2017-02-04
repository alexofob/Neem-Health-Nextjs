import { inject, observer } from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';


import { ViewStore } from '../../store/viewStore';

import MobilePubNav from './mobilePubNav';


type Props = {
  store: ViewStore,
}

const styles = {
  brand: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: 'pointer',
  },
};

const HomeNavBar = inject('store')(observer(({ store }: Props) => (
  <div>
    <AppBar
      title={
        <span
          style={{ ...styles.brand, color: 'white' }}
        >
          Neem Health
        </span>}
      className="mobile-only"
      onLeftIconButtonTouchTap={store.openDrawer}
      // style={{ position: 'fixed', top: 0 }}
    />

    <Toolbar className="desktop-only" style={{ backgroundColor: 'inherit' }}>
      <ToolbarGroup >
        <ToolbarTitle
          text="Neem Health"
          style={{ ...styles.brand, color: 'black' }}
        />
      </ToolbarGroup>
      <ToolbarGroup lastChild>
        <FlatButton label="Log In" />
        <FlatButton label="Sign Up" />
        <RaisedButton label="Put your Pharmacy online" secondary />
      </ToolbarGroup>
    </Toolbar>

    <Drawer
      docked={false}
      width={250}
      open={store.drawerOpen}
      onRequestChange={store.closeDrawer}
    >
      <AppBar
        title={
          <span
            style={{ ...styles.brand, color: 'white' }}
          >
            Neem Health
          </span>}
        showMenuIconButton={false}
      />
      <MobilePubNav />
    </Drawer>
  </div>
)));

export default HomeNavBar;
