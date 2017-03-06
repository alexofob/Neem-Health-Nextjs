import Dialog from 'material-ui/Dialog';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';

import { sendValidationMail, login, facebookLogin, googleLogin } from '../account/actions';

// imported modules
import PharmNavbar from './pharmNavbar';
import PharmHeader from './pharmHeader';
import TopPharmacies from './topPharmacies';
import PharmHowItWorks from './pharmHowItWorks';
import PharmCallToAction from './pharmCallToAction';
import PwdLessLogin from '../account/pwdlessLogin';
import { closeDialog, openDialog, setDialogContent, closeDrawer } from '../actions';
import ValidateLogin from '../account/validateLogin';

const styles = {
  dialogContent: {
    width: '90%',
    maxWidth: 420,
  },
};

const HomePage = (props) => {
  const dialogContent = {
    login: { node: <PwdLessLogin
      onSubmit={props.sendValidationMail}
      facebookLogin={props.facebookLogin}
      googleLogin={props.googleLogin}
    />,
    title: 'Log In' },
    validateLogin: { node: <ValidateLogin onSubmit={props.login} />,
                     title: 'Enter your code to log in' },
  };
  return (
    <div>
      <main>
        <PharmNavbar openLoginDialog={props.openLoginDialog} />
        <PharmHeader openLoginDialog={props.openLoginDialog} />
        <PharmHowItWorks />
        <div className="separator"><hr /></div>
        <TopPharmacies />
        <PharmCallToAction openLoginDialog={props.openLoginDialog} />
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

      <style jsx>{`
        .separator {
          opacity: 0.38;
          width: 70%;
          margin: 0 auto;
        }
      `}</style>

    </div>
  );
};

HomePage.propTypes = {
  dialogOpen: PropTypes.bool.isRequired,
  sendValidationMail: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
  dialogContent: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  facebookLogin: PropTypes.func.isRequired,
  googleLogin: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => (
  {
    closeDialog: () => {
      dispatch(closeDialog());
    },
    sendValidationMail: (email) => {
      dispatch(sendValidationMail(email));
    },
    openLoginDialog: () => {
      dispatch(batchActions([
        setDialogContent('login'),
        closeDrawer(),
        openDialog(),
      ]));
    },
    login: (code) => {
      dispatch(login(code));
    },
    facebookLogin: () => {
      dispatch(facebookLogin());
    },
    googleLogin: () => {
      dispatch(googleLogin());
    },
  }
);

export default connect(state => state, mapDispatchToProps)(HomePage);
