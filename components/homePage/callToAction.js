import RaisedButton from 'material-ui/RaisedButton';
import { inject, observer } from 'mobx-react';

import { ViewStore } from '../../store/viewStore';

const style = {
  space: {
    marginTop: 24,
  },
};

type Props = {
  viewStore: ViewStore,
}


const CallToAction = ({ viewStore }: Props) => (
  <div className="call-to-action">
    <h1>Ready to put your pharmacy online?</h1>
    <div className="button">
      <RaisedButton
        label="Get Started" secondary
        style={style.space}
        onTouchTap={viewStore.openDialog}
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

export default inject('viewStore')(observer(CallToAction));
