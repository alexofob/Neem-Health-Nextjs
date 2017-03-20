/* global document */
import { PropTypes } from 'react';
import Gx from 'gx';
import MdInfoOutline from 'react-icons/lib/md/info-outline';

import BasicInfoForm from './basicInfoForm';
import AddressForm from './addressForm';

const GetStartedForm = (props) => {
  const { updateBusinessInfo, updateBusinessAddr,
    getStartedStep1, firstName, getStartedStep } = props;
  const Form = {
    basicInfo: <BasicInfoForm
      onSubmit={updateBusinessInfo}
    />,
    address: <AddressForm
      onSubmit={updateBusinessAddr}
      getStartedStep1={getStartedStep1}
    />,
  };
  return (
    <section role="form">
      <Gx col={7}>
        <div className="form">
          <p className="form-heading">Hi {firstName}! Register your pharmacy to get started.</p>
          { Form[getStartedStep] }
        </div>
      </Gx>
      <Gx col={5}>
        <div className="side-info" >
          <div className="form-help">
            <p className="icon"><MdInfoOutline /></p>
            {(getStartedStep === 'basicInfo') &&
              <div>
                <p className="info-title">Business Name</p>
                <p className="info-detail">Provide the name that can help your customers identify your pharmacy.</p>
                <p className="info-title">Phone Number</p>
                <p className="info-detail">Phone numbers should be in the international format.<br />
                  (Pattern: +233 2XXXXXXXX or +233 5XXXXXXXX)
                </p>
              </div>
            }
            {(getStartedStep === 'address') &&
              <div>
                <p className="info-title">Business Address</p>
                <p className="info-detail">Provide the name of the surburb where your pharmacy is located.</p>
                <p className="info-detail">And then update the address details such as street name, city and region.</p>
              </div>
            }
          </div>
        </div>
      </Gx>

      <style jsx>{`
        .info-title {
          margin: 10px 0 10px 0;
        }
        .info-detail {
          font-size: 85%;
          font-weight: lighter;
          color: gray;
          margin-bottom: 30px;
        }
        .icon {
          font-size: 200%;
          font-weight: lighter;
          color: teal;
        }
        .form {
          padding: 10% 20% 0% 30%;
        }
        .side-info {
          background-color: #F5F5F5;
          height: 600px;
          padding: 15% 40% 0% 10%;
        }
        .form-heading {
          font-size: 200%;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: 2.5;
          color: #212121;
          margin-bottom: 20px;
        }
        .form-help {
          background: white;
          border: 1px solid #E0E0E0;
          border-radius: 3px;
          padding: 5% 10%;
        }
      `}</style>

    </section>
  );
};

GetStartedForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  updateBusinessInfo: PropTypes.func.isRequired,
  updateBusinessAddr: PropTypes.func.isRequired,
  getStartedStep1: PropTypes.func.isRequired,
  getStartedStep: PropTypes.string.isRequired,
};

export default GetStartedForm;
