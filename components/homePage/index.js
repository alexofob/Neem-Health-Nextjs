import Dialog from 'material-ui/Dialog';
import { PropTypes } from 'react';
import { connect } from 'react-redux';

// imported modules
import HomeNavbar from './homeNavbar';
import IntroHeader from './introHeader';
import DrugSearch from './drugSearch';
import FeaturedPharmacies from './featuredPharmacies';
import HowItWorks from './howItWorks';
import CallToAction from './callToAction';
import PwdLessLogin from '../account/pwdlessLogin';
import ValidateLogin from '../account/validateLogin';

import { closeDialog } from '../actions';
import { sendValidationMail, login } from '../account/actions';

const styles = {
  dialogContent: {
    width: '90%',
    maxWidth: 420,
  },
};


const HomePage = (props) => {
  const dialogContent = {
    login: { node: <PwdLessLogin onSubmit={props.sendValidationMail} />, title: 'Log In' },
    validateLogin: { node: <ValidateLogin onSubmit={props.login} />, title: 'Enter your code to log in' },
  };
  return (
    <div>
      <main>
        <section>
          <HomeNavbar />
          <IntroHeader />
        </section>
        <DrugSearch />
        <FeaturedPharmacies />
        <div className="separator"><hr /></div>
        <HowItWorks />
        <CallToAction />
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
        section {
          background-image: linear-gradient(-90deg, #F7FDFB, #7BB2B7);
        }
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
  dialogContent: PropTypes.string.isRequired,
  sendValidationMail: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => (
  {
    closeDialog: () => {
      dispatch(closeDialog());
    },
    sendValidationMail: (email) => {
      dispatch(sendValidationMail(email));
    },
    login: (values) => {
      dispatch(login(values));
    },
  }
);

export default connect(state => state, mapDispatchToProps)(HomePage);
