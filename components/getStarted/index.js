/* global navigator window localStorage JSON*/

import { connect } from 'react-redux';
import { PropTypes } from 'react';
import { batchActions } from 'redux-batched-actions';
import Dialog from 'material-ui/Dialog';
import { gql, graphql, compose } from 'react-apollo';

// imported modules
import Navbar from './navbar';
import GetStartedForm from './getStartedForm';
import {
  updateBusinessInfo as updateInfo,
  saveBusinessInfo as saveBusiInfo,
  getStartedStep2,
  getStartedStep1 as step1,
} from './actions';
import CreateUser from '../account/createUser';
import PwdLessLogin from '../account/pwdlessLogin';
import ValidateLogin from '../account/validateLogin';
import { sendValidationMail, login, loginSuccess } from '../account/actions';
import { closeDialog } from '../actions';

const styles = {
  dialogContent: {
    width: '80%',
    maxWidth: 450,
  },
};

const GetStartedPage = (
  {
    updateBusinessInfo,
    createUser,
    saveBusinessInfo,
    getStartedStep1,
    getStartedStep,
    data,
    sendValidationCode,
    dialogOpen,
    dialogContent,
  },
) => {
  const { user } = data;
  const dialogNode = {
    login: { node: <PwdLessLogin onSubmit={sendValidationCode} />, title: 'Log In' },
    validateLogin: { node: <ValidateLogin onSubmit={login} />, title: 'Enter your code to log in' },
    createUser: { node: <CreateUser onSubmit={createUser} />, title: 'Update Your Profile' },
  };
  const firstname = user ? user.firstname : '';
  return (
    <div>
      <main>
        <Navbar />
        <GetStartedForm
          firstName={firstname}
          updateBusinessInfo={updateBusinessInfo}
          saveBusinessInfo={saveBusinessInfo}
          getStartedStep1={getStartedStep1}
          getStartedStep={getStartedStep}
        />
      </main>

      <footer>
        © Neem Health
      </footer>

      <Dialog
        title={dialogNode[dialogContent].title}
        modal
        open={dialogOpen}
        contentStyle={styles.dialogContent}
        autoScrollBodyContent
      >
        {dialogNode[dialogContent].node}
      </Dialog>

      <style jsx>
        {
          `
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
  saveBusinessInfo: PropTypes.func.isRequired,
  getStartedStep1: PropTypes.func.isRequired,
  getStartedStep: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  createUser: PropTypes.func.isRequired,
  dialogOpen: PropTypes.bool.isRequired,
  dialogContent: PropTypes.string.isRequired,
  sendValidationCode: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateBusinessInfo: (bussInfo) => {
    dispatch(batchActions([updateInfo(bussInfo), getStartedStep2()]));
  },
  saveBusinessInfo: (bussAddr) => {
    dispatch(saveBusiInfo(bussAddr));
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
  closeDialog: () => {
    closeDialog();
  },
  loginSuccess: () => {
    dispatch(batchActions([loginSuccess(), closeDialog()]));
  },
});

const mapStateToProps = state => ({
  getStartedStep: state.getStartedStep,
  picture: state.auth.user.picture,
  idToken: state.auth.idToken,
  dialogOpen: state.dialog.open,
  dialogContent: state.dialog.content,
});

const createUser = gql`
  mutation ($idToken: String!, $firstname: String!, $surname: String!,
    $emailAddress: String!, $picture: String!) {
    createUser(authProvider: {auth0: {idToken: $idToken}},
      firstname: $firstname, surname: $surname, emailAddress: $emailAddress, picture: $picture) {
      id
    }
  }
`;

const userQuery = gql`
  query {
    user {
      id,
      firstname,
      surname
    }
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(
  compose(
    graphql(createUser, {
      props: ({ ownProps, mutate }) => ({
        createUser: userDetails =>
          mutate({
            variables: {
              ...userDetails,
              idToken: localStorage.getItem('id_token'),
              picture: ownProps.picture,
            },
            refetchQueries: [
              {
                query: userQuery,
              },
            ],
          })
            .then(() => {
              ownProps.loginSuccess();
            })
            .catch((e) => {
              console.error(e);
              ownProps.notifyUser('Sign up was not successful, Please try again.');
            }),
      }),
    }),
  )(GetStartedPage),
);
