import { PropTypes } from 'react';
import Head from 'next/head';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import 'babel-polyfill';


import { closeSnackbar } from './actions';

// imported modules

import '../../config/tap_events';

const env = require('../../config/env');


const AppBasic = ({ title, carouselRequired = false, mapRequired = false,
  snackbarOpen, snackbarMessage, closeSnackbar2, children }) => (
  <div>
    <Head>
      <title>{title || 'Neem Health'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
      {carouselRequired &&
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      }
      {carouselRequired &&
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      }
      {mapRequired &&
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${env.MAP_API_KEY}&libraries=places`}
        />}
    </Head>
    <Snackbar
      open={snackbarOpen}
      message={snackbarMessage}
      autoHideDuration={5000}
      onRequestClose={closeSnackbar2}
    />
    {children}
    <style jsx global>{`
        .slick-next::before, .slick-prev::before {
        color: teal;
        }
        * {
          margin: 0;
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: Roboto, sans-serif;
          background-color: 'white';
        }
        a {
          color: #004D40;
          text-decoration: none;
        }
        a:hover {
          font-weight: bold;
        }
        a:hover[href="/"] {
          text-decoration: none;
        }
        body {
          font-size: 15px;
          line-height: 24px;
        }
        footer {
          height: 50px;
          line-height: 50px;
          text-align: center;
        }
        .desktop-only {
          display: block;
        }

        .mobile-only {
          display: none !important;

        }

        @media(max-width:767px) {
          .desktop-only {
            display: none !important;
          }

          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
  </div>

);

AppBasic.propTypes = {
  children: PropTypes.node.isRequired,
  snackbarOpen: PropTypes.bool.isRequired,
  snackbarMessage: PropTypes.string.isRequired,
  title: PropTypes.string,
  closeSnackbar2: PropTypes.func.isRequired,
  mapRequired: PropTypes.bool,
  carouselRequired: PropTypes.bool,
};

const mapDispatchToProps = dispatch => (
  {
    closeSnackbar2: () => {
      dispatch(closeSnackbar());
    },
  }
);

export default connect(state => state, mapDispatchToProps)(AppBasic);
