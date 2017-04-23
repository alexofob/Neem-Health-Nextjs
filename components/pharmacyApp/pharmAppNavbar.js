import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Link from 'next/prefetch';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { grey50, teal500 } from 'material-ui/styles/colors';

import ProfileNav from '../homePage/profileNav';

import PharmMobileAuthNav from '../pharmacyHome/pharmMobileAuthNav';
import { openDrawer, closeDrawer } from '../actions';
import menus from './config';

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

const PharmAppNavBar = props => (
  <div className="wrapper">
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
        props.data.user &&
          <img src={props.data.user.picture} alt="profile" className="profile-container" />
      }
    />

    <Toolbar style={{ backgroundColor: teal500 }} className="desktop-only">

      <ToolbarGroup firstChild>
        <IconButton>
          <NavigationMenu color={grey50} onClick={props.toggleMenu} />
        </IconButton>
        <Link href="/">
          <a>
            <ToolbarTitle text="Neem Health" style={{ ...styles.brand, color: 'white' }} />
          </a>
        </Link>
        <div className="title">
          {
            menus.filter(
              menu =>
                menu.route ===
                (props.url && props.url.query && props.url.query.route
                  ? props.url.query.route
                  : 'dashboard'),
            )[0].text
          }
        </div>
      </ToolbarGroup>
      <ToolbarGroup lastChild>
        {props.data.loading
          ? <MdAccountCircle style={styles.mdPerson} />
          : props.data.error
              ? <div />
              : <ProfileNav picture={props.data.user.picture} logoutTo="pharmacy" />}

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
      <PharmMobileAuthNav closeDrawer={props.closeDrawer} logoutTo="pharmacy" />

    </Drawer>

    <style jsx>
      {
        `
      .wrapper {
        flex: none;
      }
      .profile-container {
        position: relative;
        border: 1px solid white;
        border-radius: 50%;
        height: 50px;
        padding: 1px;
        width: 50px;
        margin: 10px 20px 0 20px;
      }
      .title {
        border-left: 1px solid rgba(255,255,255,0.2);
        padding-left: 24px;
        margin-left: 8px;
        line-height: 32px;
        white-space: nowrap;
        font-size: 20px;
        font-weight: 500;
        color: white;
      }
      @media (max-width: 767px) {
        .profile-container {
          height: 30px;
          padding: 1px;
          width: 30px;
          margin: 10px 20px 0 20px;
        }
      }
      @media (max-width: 400px) {
        .profile-container {
          height: 30px;
          padding: 1px;
          width: 30px;
          margin: 10px 20px 0 20px;
        }
      }
    `
      }
    </style>
  </div>
);

PharmAppNavBar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  url: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => {
    dispatch(closeDrawer());
  },
  openDrawer: () => {
    dispatch(openDrawer());
  },
});

export default connect(state => state, mapDispatchToProps)(PharmAppNavBar);
