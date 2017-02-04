const IntroHeader = () => (
  <div className="introHeader">
    <section role="contentinfo" className="main-message-wrapper">
      <h1 className="main-message">Your Online Pharmacy</h1>
      <p className="sub-message">Get your drugs without the hassle.</p>
    </section>

    <section role="img" >
      <img
        alt="Main Message"
        src="../../static/pharmacy.jpg"
        className="message-image"
      />
    </section>

    <style jsx>{`
      h1 {
        font-size: 250%;
      }

      p {
        font-size: 150%;
        font-weight: lighter;
        padding-top: 3%
      }

      .introHeader {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 4% 0
      }

      .main-message-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 12px;
      }

      @media (max-width: 847px) {
        h1 {
          font-size: 200%;
        }

        p {
          font-size: 120%;
        }

        .message-image {
          height: 270px;
          width: 360px;
        }
      }

      @media (max-width: 767px) {

        h1 {
          font-size: 180%;
        }

        p {
          font-size: 120%;
        }

        .message-image {
          height: 240px;
          width: 320px;
        }

        .main-message-wrapper {
          height: 150px;
          padding: 0 12px;
        }
      }

      @media (max-width: 400px) {

        h1 {
          font-size: 150%;
        }

        p {
          font-size: 100%;
          font-weight: lighter;
          padding-top: 3%
        }

        .main-message-wrapper {
          height: 120px;
          padding: 0 12px;
        }

        .message-image {
          height: 150px;
          width: 200px;
        }
      }
    `}</style>
  </div>

);

export default IntroHeader;
