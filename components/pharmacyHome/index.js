import Dialog from 'material-ui/Dialog';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';

// imported modules
import PharmNavbar from './pharmNavbar';
import PharmHeader from './pharmHeader';
import TopPharmacies from './topPharmacies';
import PharmHowItWorks from './pharmHowItWorks';
import PharmCallToAction from './pharmCallToAction';
import PwdLessLogin from '../account/pwdlessLogin';
import { closeDialog, openLoginDialog, closeDrawer, storeRestrictedPage } from '../actions';
import ValidateLogin from '../account/validateLogin';

import CreateUser from '../account/createUser';

const styles = {
  dialogContent: {
    width: '90%',
    maxWidth: 420,
  },
};

const HomePage = (props) => {
  const dialogContent = {
    login: {
      node: <PwdLessLogin />,
      title: 'Log In',
    },
    validateLogin: {
      node: <ValidateLogin />,
      title: 'Enter your code to log in',
    },
    createUser: { node: <CreateUser />, title: 'Sign Up' },
  };
  return (
    <div>
      <main>
        <PharmNavbar
          openLoginDialog={props.openLoginDialog}
          isAuthenticated={props.isAuthenticated}
        />
        <PharmHeader
          openLoginDialog={props.openLoginDialog}
          isAuthenticated={props.isAuthenticated}
        />
        <PharmHowItWorks />
        <div className="separator"><hr /></div>
        <TopPharmacies />
        <PharmCallToAction
          openLoginDialog={props.openLoginDialog}
          isAuthenticated={props.isAuthenticated}
        />
      </main>

      <footer>
        © Neem Health
      </footer>

      <Dialog
        title={dialogContent[props.dialogContent].title}
        modal={false}
        open={props.dialogOpen}
        onRequestClose={props.closeDialog}
        contentStyle={styles.dialogContent}
        autoScrollBodyContent
      >
        {dialogContent[props.dialogContent].node}
      </Dialog>

      <style jsx>
        {
          `
        .separator {
          opacity: 0.38;
          width: 70%;
          margin: 0 auto;
        }
      `
        }
      </style>

    </div>
  );
};

HomePage.propTypes = {
  dialogOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
  dialogContent: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  dialogOpen: state.dialog.open,
  dialogContent: state.dialog.content,
});

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(closeDialog());
  },
  openLoginDialog: redirect =>
    () => {
      dispatch(batchActions([closeDrawer(), openLoginDialog(), storeRestrictedPage(redirect)]));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
