import MdSearch from 'react-icons/lib/md/search';
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart';
import MdNotifications from 'react-icons/lib/md/notifications';
import FaFileTextO from 'react-icons/lib/fa/file-text-o';
import Gx from 'gx';

const HowItWorks = () => (
  <div className="how-it-works">
    <h2>How does it work?</h2>
    <Gx>
      <div className="message">
        <span className="icon"><MdSearch /></span>
        <h3>Find</h3>
        <p>Search for your drug and get a list of pharmacies near you
           which have stock of your drug.
        </p>
      </div>
      <div className="message">
        <span className="icon"><MdAddShoppingCart /></span>
        <h3>Buy</h3>
        <p>Walk into the pharmacy and by your drug.</p>
      </div>
    </Gx>
    <Gx>
      <div className="message">
        <span className="icon"><MdNotifications /></span>
        <h3>Get Notified</h3>
        <p>If your drug is not immediately available, you can sign up and make
          request for your drug and you will be notified when your drug is
          available.
        </p>
      </div>
      <div className="message">
        <span className="icon"><FaFileTextO /></span>
        <h3>Prescription</h3>
        <span className="message-text"><p>If you have your Prescription from the doctor, you can scan
          and post it. You will be notified of the pharmacies near you who can
          supply your drugs.
        </p></span>
      </div>
    </Gx>
    <style jsx>{`
      .how-it-works{
        padding: 4% 10%;
      }
      h2 {
        font-weight: normal;
        text-align: center;
      }
      .message {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8% 5%;
        height: 200px;
      }
      .icon {
        font-size: 48px;

        opacity: 0.54;
      }
      p {
        text-align: center;
        opacity: 0.54;
        font-size: 85%;
        max-width: 320px;
      }
      h3 {
        padding: 4% 0 2% 0;
      }
    `}</style>
  </div>
);

export default HowItWorks;
