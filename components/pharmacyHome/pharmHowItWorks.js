import MdSearch from 'react-icons/lib/md/search';
import FaMoney from 'react-icons/lib/fa/money';
import MdStore from 'react-icons/lib/md/store';
import FaFileTextO from 'react-icons/lib/fa/file-text-o';
import Gx from 'gx';

const PharmHowItWorks = () => (
  <div className="how-it-works">
    <h2>How does it work?</h2>
    <Gx>
      <div className="message">
        <span className="icon"><MdStore /></span>
        <div className="message-padding">
          <h3>Stock</h3>
          <p>Creat your product catalog and update stock regularly as you restock.
          </p>
        </div>
      </div>
      <div className="message">
        <span className="icon"><FaMoney /></span>
        <div className="message-padding">
          <h3>Sell</h3>
          <p>Sell drugs to your patients using the point of sale interface and
            have your drug catalog sync online.
          </p>
        </div>
      </div>
    </Gx>
    <Gx>
      <div className="message">
        <span className="icon"><MdSearch /></span>
        <div className="message-padding">
          <h3>Search capable</h3>
          <p>Patients will be able to search for their drugs online and be
            notified if you have their drugs in stock.
          </p>
        </div>
      </div>
      <div className="message">
        <span className="icon"><FaFileTextO /></span>
        <div className="message-padding">
          <h3>Serve Online</h3>
          <span className="message-text"><p>Patients may post their subscriptions
            online or request for specific drugs and you will be notified to serve
            to them.
          </p></span>
        </div>
      </div>
    </Gx>
    <style jsx>{`
      .how-it-works{
        padding: 4% 10%;
      }
      h2 {
        font-weight: normal;
        padding-bottom: 20px;
      }
      .message {
        display: flex;
        padding: 4% 4% 4% 0;
        height: 150px;
      }
      .icon {
        font-size: 48px;
        color: #009688;
        opacity: 0.8;
      }
      p {
        opacity: 0.54;
        max-width: 320px;
      }
      .message-padding {
        padding-left: 5%
      }

      @media (max-width: 640px) {
        p {
          font-size: 90%;
        }
      }

    `}</style>
  </div>
);

export default PharmHowItWorks;
