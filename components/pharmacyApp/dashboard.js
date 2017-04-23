import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import PharmacyBranchCard from './pharmacyBranchCard';

const styles = {
  card: {
    height: 250,
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#6f6f6f',
  },
};

const PharmacyAdminDashboard = ({ data }) => (
  <div>
    {data.loading
      ? <div>Loading...</div>
      : data.user.pharmacies &&
          data.user.pharmacies.map(pharmacy => (
            <div key={pharmacy.id} className="pharmacy">
              <p className="business-name">{pharmacy.businessName}</p>
              {pharmacy.pharmacyBranches.map(branch => <PharmacyBranchCard branch={branch} />)}
            </div>
          ))}
    <div className="container">
      <Card style={styles.card}>
        <CardText>
          <p className="text"><MdAddCircleOutline /></p>Register a new Pharmacy
        </CardText>
      </Card>
    </div>
    <style jsx>
      {
        `
        .container {
          padding: 20px;

        }
        .business-name {
          margin-bottom: 10px;
          font-size: 120%;
        }
        .pharmacy {
          margin-bottom: 20px;
          color: #6f6f6f;
          border: 1px solid #E0E0E0;
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .text {
          text-align: center;
          color: #6f6f6f;
          font-weight: 700;
          font-size: 48px;
          margin-bottom: 5px;
        },

        @media (max-width: 400px) {
          .container {
            display: flex;
            justify-content: center;
          }
        }
        `
      }
    </style>
  </div>
);

PharmacyAdminDashboard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PharmacyAdminDashboard;
