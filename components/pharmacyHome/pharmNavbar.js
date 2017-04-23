import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Link from 'next/prefetch';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { graphql } from 'react-apollo';
import MdAccountCircle from 'react-icons/lib/md/account-circle';

import ProfileNav from '../homePage/profileNav';

import PharmMobilePubNav from './pharmMobilePubNav';
import PharmMobileAuthNav from './pharmMobileAuthNav';
import {
  closeDrawer,
  openDrawer,
  openLoginDialog,
  openDialog,
  storeRestrictedPage,
} from '../actions';
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

const PharmNavBar = props => (
  <div>
    <AppBar
      title={
        <span style={styles.brand}>
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

    <Toolbar className="desktop-only">
      <ToolbarGroup>
        <Link href="/">
          <a>
            <ToolbarTitle text="Neem Health" style={{ ...styles.brand, color: 'black' }} />
          </a>
        </Link>
      </ToolbarGroup>
      <ToolbarGroup lastChild>
        {props.isAuthenticated
          ? props.data.loading
              ? <MdAccountCircle style={styles.mdPerson} />
              : props.data.error
                  ? <FlatButton label="Log In" onTouchTap={props.openLoginDialog('pharmacy')} />
                  : props.data.user
                      ? <ProfileNav picture={props.data.user.picture} logoutTo="pharmacy" />
                      : <FlatButton
                        label="Sign Up"
                        secondary
                        onTouchTap={props.openCreateUserDialog}
                      />
          : <FlatButton label="Log In" onTouchTap={props.openLoginDialog('pharmacy')} />}
        {' '}
      </ToolbarGroup>
    </Toolbar>

    <Drawer docked={false} width={250} open={props.drawerOpen} onRequestChange={props.closeDrawer}>
      <AppBar
        title={
          <span style={styles.brand}>
            Neem Health
          </span>
        }
        showMenuIconButton={false}
      />
      {props.isAuthenticated && props.data.user
        ? <PharmMobileAuthNav closeDrawer={props.closeDrawer} logoutTo="pharmacy" />
        : <PharmMobilePubNav
          closeDrawer={props.closeDrawer}
          openLoginDialog={props.openLoginDialog}
        />}

    </Drawer>

    <style jsx>
      {
        `
      .appbar {
        background-color: #E8E8E8 !important;
        color: black !important;
      }
      .profile-container {
        position: relative;
        border: 1px solid #00AA8D;
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

PharmNavBar.propTypes = {
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
  openCreateUserDialog: () => {
    dispatch(openDialog('createUser'));
  },
  openLoginDialog: page =>
    () => {
      dispatch(batchActions([openLoginDialog(), storeRestrictedPage(page)]));
    },
});

export default connect(state => state, mapDispatchToProps)(graphql(userQuery)(PharmNavBar));
