// @flow

import type { Element } from 'react';
import Head from 'next/head';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';
import { inject, observer } from 'mobx-react';

import DevTools from 'mobx-react-devtools';

import { ViewStore } from '../store/viewStore';

// imported modules

import '../config/tap_events';


type Props = {
  store: ViewStore,
  children?: Element<any>,
  title: string,
  userAgent: string
}

export default inject('store')(observer(({ store, children, title = 'Neem Health', userAgent }: Props) => (
  <MuiThemeProvider
    muiTheme={getMuiTheme({
      userAgent,
      palette: {
        primary1Color: teal500,
        primary2Color: teal700,
        accent1Color: deepOrangeA200,
        pickerHeaderColor: teal500,
      },
      appBar: {
        height: 56,
      },
    }
    )}
  >
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500' rel='stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Snackbar
        open={store.snackbarOpen}
        message={store.snackbarMessage}
        autoHideDuration={5000}
      />
      {children}
      <DevTools />
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
            text-decoration: underline;
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
  </MuiThemeProvider>
)));
