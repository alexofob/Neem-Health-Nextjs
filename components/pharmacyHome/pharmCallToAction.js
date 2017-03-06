import { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  space: {
    marginTop: 24,
  },
};


const PharmCallToAction = props => (
  <div className="call-to-action">
    <h1>Get ready to go online</h1>
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
        .call-to-action {
          margin-top: 10px;
        }
        h1 {
          font-size: 150%;
          font-weight: normal;
        }

      }
    `}</style>
  </div>
);

PharmCallToAction.propTypes = {
  openLoginDialog: PropTypes.func.isRequired,
};


export default PharmCallToAction;
