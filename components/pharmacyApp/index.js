import { PropTypes } from 'react';
import { withState, pure, compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { setRoute } from './actions.js';
import PharmAppNavbar from './pharmAppNavbar';
import PharmAppSidebar from './pharmAppSidebar';
import Profile from './profile';
import Dashboard from './dashboard';
import ManageUsers from './manageUsers';

const R = require('ramda');

const styles = {
  main: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    paddingTop: 20,
    display: 'flex',
  },
};

const PharmacyAppPage = ({ data, toggleMenu, menuOpen, url, query }) => (
  <div className="pageWrapper">
    <PharmAppNavbar data={data} toggleMenu={toggleMenu} url={url} />
    <main style={styles.main}>
      {menuOpen &&
        <aside className="desktop-only">
          <PharmAppSidebar url={url} />
        </aside>}

      <section style={styles.section}>
        {!R.isEmpty(query)
          ? query.route === 'dashboard'
              ? <Dashboard data={data} />
              : query.route === 'profile'
                  ? <Profile />
                  : query.route === 'manageUsers' ? <ManageUsers /> : <Dashboard data={data} />
          : <Dashboard data={data} />}
      </section>

    </main>
    <footer>
      © Neem Health
    </footer><style jsx>
      {
        `
      section {
        padding: 0 100px;
      }

      aside {
        flex: 0 0 200px;
      }
      @media (max-width: 400px) {
        section {
          padding: 0 10px;
        }
      }
    `
      }
    </style>

  </div>
);

PharmacyAppPage.propTypes = {
  data: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  url: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
};

export default compose(
  connect(
    state => ({
      route: state.route,
    }),
    dispatch => ({
      navigateTo: route =>
        () => {
          dispatch(setRoute(route));
        },
    }),
  ),
  withState('menuOpen', 'updateMenuOpen', true),
  withHandlers({
    toggleMenu: props =>
      () => {
        props.updateMenuOpen(menuOpen => !menuOpen);
      },
  }),
  pure,
)(PharmacyAppPage);
