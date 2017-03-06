import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Link from 'next/prefetch';
import { PropTypes } from 'react';
import { connect } from 'react-redux';

import PharmMobilePubNav from './pharmMobilePubNav';
import { closeDrawer, openDrawer } from '../actions';


const styles = {
  brand: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: 'pointer',
  },
};

const PharmNavBar = props => (
  <div>
    <AppBar
      title={
        <span
          style={styles.brand}
        >
          Neem Health
        </span>}
      className="mobile-only"
      onLeftIconButtonTouchTap={props.openDrawer}
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
          onTouchTap={props.openLoginDialog}
        />
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
            style={styles.brand}
          >
            Neem Health
          </span>}
        showMenuIconButton={false}
      />
      <PharmMobilePubNav
        closeDrawer={props.closeDrawer}
        openLoginDialog={props.openLoginDialog}
      />
    </Drawer>

    <style>{`
      .appbar {
        background-color: #E8E8E8 !important;
        color: black !important;
      }
    `}</style>
  </div>
);

PharmNavBar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
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

export default connect(state => state, mapDispatchToProps)(PharmNavBar);
