import { inject, observer } from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Link from 'next/prefetch';

import { ViewStore } from '../../store/viewStore';

import PharmMobilePubNav from './pharmMobilePubNav';


type Props = {
  viewStore: ViewStore,
}

const styles = {
  brand: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: 'pointer',
  },
};

const PharmNavBar = inject('viewStore')(observer(({ viewStore }: Props) => (
  <div>
    <AppBar
      title={
        <span
          style={styles.brand}
        >
          Neem Health
        </span>}
      className="mobile-only"
      onLeftIconButtonTouchTap={viewStore.openDrawer}
      // style={{ position: 'fixed', top: 0 }}
    />

    <Toolbar className="desktop-only" >
      <ToolbarGroup >
        <Link href="/"><a>
          <ToolbarTitle
            text="Neem Health"
            style={{ ...styles.brand, color: 'black' }}
          />
        </a></Link>
      </ToolbarGroup>
      <ToolbarGroup lastChild>
        <FlatButton label="Log In" />
        <RaisedButton
          label="Get Started" secondary
          onTouchTap={viewStore.openDialog}
        />
      </ToolbarGroup>
    </Toolbar>

    <Drawer
      docked={false}
      width={250}
      open={viewStore.drawerOpen}
      onRequestChange={viewStore.closeDrawer}
    >
      <AppBar
        title={
          <span
            style={styles.brand}
          >
            Neem Health
          </span>}
        showMenuIconButton={false}
      />
      <PharmMobilePubNav />
    </Drawer>

    <style>{`
      .appbar {
        background-color: #E8E8E8 !important;
        color: black !important;
      }
    `}</style>
  </div>
)));

export default PharmNavBar;
