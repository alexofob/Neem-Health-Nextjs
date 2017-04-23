/* global navigator window localStorage JSON*/
import { connect } from 'react-redux';
import { PropTypes } from 'react';
import { batchActions } from 'redux-batched-actions';

// imported componets
import Navbar from './navbar';
import GetStartedForm from './getStartedForm';

// imported actions
import {
  updateBusinessInfo as updateInfo,
  getStartedStep2,
  getStartedStep1 as step1,
} from './actions';
import { sendValidationMail, login } from '../account/actions';

const GetStartedPage = (
  {
    updateBusinessInfo,
    getStartedStep1,
    getStartedStep,
    data,
  },
) => {
  const { user } = data;
  const { firstname, id } = user || { firstname: '', id: '' };
  return (
    <div className="pageWrapper">
      <main>
        <Navbar />
        <GetStartedForm
          firstName={firstname}
          id={id}
          updateBusinessInfo={updateBusinessInfo}
          getStartedStep1={getStartedStep1}
          getStartedStep={getStartedStep}
        />
      </main>

      <footer>
        © Neem Health
      </footer>

      <style jsx>
        {
          `
          main {
            display: flex;
            flex-direction: column;
          }
          footer {
            background-color: #E8E8E8;
          }
        `
        }
      </style>

    </div>
  );
};

GetStartedPage.propTypes = {
  updateBusinessInfo: PropTypes.func.isRequired,
  getStartedStep1: PropTypes.func.isRequired,
  getStartedStep: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateBusinessInfo: (bussInfo) => {
    dispatch(batchActions([updateInfo(bussInfo), getStartedStep2()]));
  },
  getStartedStep1: () => {
    dispatch(step1());
  },
  sendValidationCode: (email) => {
    dispatch(sendValidationMail(email));
  },
  login: (values) => {
    dispatch(login(values));
  },
});

const mapStateToProps = state => ({
  getStartedStep: state.getStartedStep,
  dialogOpen: state.dialog.open,
  dialogContent: state.dialog.content,
});

export default connect(mapStateToProps, mapDispatchToProps)(GetStartedPage);
