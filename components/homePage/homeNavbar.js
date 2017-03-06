import { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Link from 'next/prefetch';
import { connect } from 'react-redux';

import MobilePubNav from './mobilePubNav';
import { closeDrawer, openDrawer } from '../actions';

const styles = {
  brand: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: 'pointer',
  },
};

const HomeNavBar = props => (
  <div>
    <AppBar
      title={
        <span
          style={{ ...styles.brand, color: 'white' }}
        >
          Neem Health
        </span>}
      className="mobile-only"
      onLeftIconButtonTouchTap={props.openDrawer}
      // style={{ position: 'fixed', top: 0 }}
    />

    <Toolbar className="desktop-only" style={{ backgroundColor: 'inherit' }}>
      <ToolbarGroup >
        <Link href="/"><a>
          <ToolbarTitle
            text="Neem Health"
            style={{ ...styles.brand, color: 'black' }}
          /></a>
        </Link>
      </ToolbarGroup>
      <ToolbarGroup lastChild>
        <Link href="/pharmacy"><a><FlatButton label="For Pharmacies" /></a></Link>
        <FlatButton label="Log In" />
        <FlatButton label="Sign Up" secondary />
      </ToolbarGroup>
    </Toolbar>

    <Drawer
      docked={false}
      width={250}
      open={props.drawerOpen}
      onRequestChange={props.closeDrawer}
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
      <MobilePubNav closeDrawer={props.closeDrawer} />
    </Drawer>
  </div>
);

HomeNavBar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => (
  {
    closeDrawer: () => {
      dispatch(closeDrawer());
    },
    openDrawer: () => {
      dispatch(openDrawer());
    },
  }
);

export default connect(state => state, mapDispatchToProps)(HomeNavBar);
