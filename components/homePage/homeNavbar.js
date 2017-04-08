import { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Link from 'next/prefetch';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { graphql } from 'react-apollo';
import MdAccountCircle from 'react-icons/lib/md/account-circle';

import MobilePubNav from './mobilePubNav';
import MobileAuthNav from './mobileAuthNav';
import ProfileNav from './profileNav';
import { closeDrawer, openDrawer, openDialog } from '../actions';

import { userQuery } from '../../components/account/graphql';

const styles = {
  brand: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: 'pointer',
  },
  mdPerson: {
    marginLeft: 30,
    marginRight: 30,
  },
};

const HomeNavBar = props => (
  <div>
    <AppBar
      title={
        <span style={{ ...styles.brand, color: 'white' }}>
          Neem Health
        </span>
      }
      className="mobile-only"
      onLeftIconButtonTouchTap={props.openDrawer}
      // style={{ position: 'fixed', top: 0 }}
      iconElementRight={
        props.isAuthenticated &&
          props.data.user &&
          <img src={props.data.user.picture} alt="profile" className="profile-container" />
      }
    />

    <Toolbar className="desktop-only" style={{ backgroundColor: 'inherit' }}>
      <ToolbarGroup>
        <Link href="/">
          <a>
            <ToolbarTitle text="Neem Health" style={{ ...styles.brand, color: 'black' }} />
          </a>
        </Link>
      </ToolbarGroup>
      <ToolbarGroup lastChild>
        <Link href="/pharmacy"><a><FlatButton label="For Pharmacies" /></a></Link>
        {props.isAuthenticated
          ? props.data.loading
              ? <MdAccountCircle style={styles.mdPerson} />
              : props.data.error
                  ? <FlatButton label="Log In" onTouchTap={props.openLoginDialog} />
                  : props.data.user
                      ? <ProfileNav picture={props.data.user.picture} logoutTo="" />
                      : <FlatButton
                        label="Sign Up"
                        secondary
                        onTouchTap={props.openCreateUserDialog}
                      />
          : <FlatButton label="Log In" onTouchTap={props.openLoginDialog} />}
      </ToolbarGroup>
    </Toolbar>

    <Drawer docked={false} width={250} open={props.drawerOpen} onRequestChange={props.closeDrawer}>
      <AppBar
        title={
          <span style={{ ...styles.brand, color: 'white' }}>
            Neem Health
          </span>
        }
        showMenuIconButton={false}
      />
      {props.isAuthenticated && props.data.user
        ? <MobileAuthNav closeDrawer={props.closeDrawer} logoutTo="" />
        : <MobilePubNav closeDrawer={props.closeDrawer} openLoginDialog={props.openLoginDialog} />}
    </Drawer>

    <style jsx>
      {
        `
        .profile-container {
          position: relative;
          border: 1px solid white;
          border-radius: 50%;
          height: 30px;
          padding: 1px;
          width: 30px;
          margin: 10px 20px 0 20px;
        }
        `
      }
    </style>
  </div>
);

HomeNavBar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  openCreateUserDialog: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => {
    dispatch(closeDrawer());
  },
  openDrawer: () => {
    dispatch(openDrawer());
  },
  openLoginDialog: () => {
    dispatch(batchActions([closeDrawer(), openDialog('login')]));
  },
  openCreateUserDialog: () => {
    dispatch(openDialog('createUser'));
  },
});

export default connect(state => state, mapDispatchToProps)(graphql(userQuery)(HomeNavBar));
