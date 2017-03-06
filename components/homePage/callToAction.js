import { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';

import { openDialog, setDialogContent } from '../actions';

const style = {
  space: {
    marginTop: 24,
  },
};


const CallToAction = props => (
  <div className="call-to-action">
    <h1>Ready to put your pharmacy online?</h1>
    <div className="button">
      <RaisedButton
        label="Get Started" secondary
        style={style.space}
        onTouchTap={props.openLoginDialog}
      />
    </div>
    <style jsx>{`
      .call-to-action {
        background-color: teal;
        padding: 6% 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h1 {
        color: white;
        text-align: center;
      }
      @media (max-width: 640px) {

        h1 {
          font-size: 150%;
          font-weight: normal;
        }

      }
    `}</style>
  </div>
);

CallToAction.propTypes = {
  openLoginDialog: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    openLoginDialog: () => {
      dispatch(batchActions([
        setDialogContent('login'),
        openDialog(),
      ]));
    },
  }
);

export default connect(state => state, mapDispatchToProps)(CallToAction);
