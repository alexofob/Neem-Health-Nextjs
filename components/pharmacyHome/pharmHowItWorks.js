import MdSearch from 'react-icons/lib/md/search';
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart';
import MdStore from 'react-icons/lib/md/store';
import FaFileTextO from 'react-icons/lib/fa/file-text-o';

const PharmHowItWorks = () => (
  <div className="how-it-works">
    <h2>How does it work?</h2>
    <div className="container">
      <div className="message">
        <span className="icon"><MdStore /></span>
        <h3>Stock</h3>
        <p>Creat your product catalog and update stock regularly as you restock.
        </p>
      </div>
      <div className="message">
        <span className="icon"><MdAddShoppingCart /></span>
        <h3>Sell</h3>
        <p>Sell drugs to your patients using the point of sale interface and
          have your drug catalog sync online.
        </p>
      </div>
      <div className="message">
        <span className="icon"><MdSearch /></span>
        <h3>Search capable</h3>
        <p>Patients will be able to search for their drugs online and be
          notified if you have their drugs in stock.
        </p>
      </div>
      <div className="message">
        <span className="icon"><FaFileTextO /></span>
        <h3>Serve Online</h3>
        <span className="message-text"><p>Patients may post their subscriptions
          online or request for specific drugs and you will be notified to serve
          to them.
        </p></span>
      </div>
    </div>
    <style jsx>{`
      .how-it-works{
        padding: 4% 10%;
      }
      h2 {
        font-weight: normal;
        text-align: center;
      }
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

      }
      .message {
        display: flex;
        flex-direction: column;

        align-items: center;
        flex: 0 0 50%;
        padding: 4% 5%;
      }
      .icon {
        font-size: 48px;
        color: #009688;
        opacity: 0.8;
      }
      p {
        text-align: center;
        opacity: 0.54;
        max-width: 320px;
      }
      h3 {
        padding: 4% 0 2% 0;
      }
      @media (max-width: 640px) {

        .message {
          flex: 0 0 100%;
        }
        p {
          font-size: 90%;
        }
      }

    `}</style>
  </div>
);

export default PharmHowItWorks;
