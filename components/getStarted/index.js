import { connect } from 'react-redux';
import { PropTypes } from 'react';
import { batchActions } from 'redux-batched-actions';

// imported modules
import Navbar from './navbar';
import GetStartedForm from './getStartedForm';
import { updateBusinessInfo as updateInfo,
  updateBusinessAddr as updateAddr,
  getStartedStep2, getStartedStep1 as step1,
 } from './actions';


const GetStartedPage = ({ firstName, updateBusinessInfo,
  updateBusinessAddr, getStartedStep1, getStartedStep }) => (
  <div>
    <main>
      <Navbar />
      <GetStartedForm
        firstName={firstName}
        updateBusinessInfo={updateBusinessInfo}
        updateBusinessAddr={updateBusinessAddr}
        getStartedStep1={getStartedStep1}
        getStartedStep={getStartedStep}
      />
    </main>

    <footer>
      © Neem Health
    </footer>

    <style jsx>{`
      footer {
        background-color: #E8E8E8;
      }
    `}</style>

  </div>
);

GetStartedPage.propTypes = {
  firstName: PropTypes.string.isRequired,
  updateBusinessInfo: PropTypes.func.isRequired,
  updateBusinessAddr: PropTypes.func.isRequired,
  getStartedStep1: PropTypes.func.isRequired,
  getStartedStep: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    updateBusinessInfo: (bussInfo) => {
      dispatch(batchActions([
        updateInfo(bussInfo),
        getStartedStep2(),
      ]));
    },
    updateBusinessAddr: (bussAddr) => {
      dispatch(batchActions([
        updateAddr(bussAddr),
      ]));
    },
    getStartedStep1: () => {
      dispatch(step1());
    },
  }
);

const mapStateToProps = state => ({
  firstName: state.auth.user.firstName,
  getStartedStep: state.getStartedStep,
});

export default connect(mapStateToProps, mapDispatchToProps)(GetStartedPage);
