import RaisedButton from 'material-ui/RaisedButton';


const style = {
  space: {
    marginTop: 12,
  },
};

const PharmHeader = () => (
  <div className="intro-header">
    <section role="contentinfo" className="main-message-wrapper">
      <h1 className="main-message">Put your Pharmacy Online</h1>
      <p className="sub-message">
        And grow your business by making it possible for patients to find you
        online.
      </p>
      <RaisedButton
        label="Get Started" secondary
        style={style.space}
        fullWidth={false}
      />
    </section>

    <style jsx>{`
      h1 {
        font-size: 250%;
      }

      p {
        font-size: 120%;
        font-weight: 400;
        padding: 5% 0
      }

      .intro-header {
        display: flex;
        padding: 4% 0 4% 10%;
        background-image: url('../../static/pharmacy-home3-big.jpg');
      }

      .main-message-wrapper {
        padding: 40px;
        background-color: #009688;
        color: white;
        min-width: 300px;
        max-width: 450px;
        line-height: 1.4;
      }

      @media (max-width: 847px) {
        .main-message-wrapper {
          max-width: 350px;
        }
      }

      @media (max-width: 684px) {
        .intro-header {
          padding: 0;
          background-image: none;
        }
        .main-message-wrapper {
          max-width: 684px;
        }
      }
    `}</style>
  </div>

);

export default PharmHeader;
