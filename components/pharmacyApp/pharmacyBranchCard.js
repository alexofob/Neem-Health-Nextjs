import { PropTypes } from 'react';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import { grey700 } from 'material-ui/styles/colors';

const styles = {
  card: {
    height: 250,
    width: 250,
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#6f6f6f',
  },
};

const PharmacyBranchCard = ({ branch }) => (
  <div className="container">
    <div className="pharmacy-view">
      <Card key={branch.id} style={{ ...styles.card, marginBottom: 20 }}>
        <CardMedia
          overlay={<CardTitle title={branch.location.surburb} subtitle={branch.phoneNumber} />}
        >
          <img src="https://dummyimage.com/250x250/fff/eee&amp;text=image" alt="pharmacy" />
        </CardMedia>
      </Card>
    </div>
    <Card style={{ ...styles.card, alignItems: 'center' }}>
      <CardText>
        <p className="text"><MdAddCircleOutline /></p>Add another Branch
      </CardText>
    </Card>
    <style jsx>
      {
        `
        .pharmacy-view {
          margin-right: 20px;
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .text {
          text-align: center;
          color: #6f6f6f;
          font-weight: 700;
          font-size: 48px;
          margin-bottom: 5px;
        }
        @media (max-width: 780px) {
          .pharmacy-view {
            margin-right: 0;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
        
        @media (max-width: 400px) {
          .pharmacy-view {
            margin-right: 0;
          }
        }
    `
      }
    </style>
  </div>
);

PharmacyBranchCard.propTypes = {
  branch: PropTypes.object.isRequired,
};
export default PharmacyBranchCard;
