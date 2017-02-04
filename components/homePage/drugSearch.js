import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FaSearch from 'react-icons/lib/fa/search';
import FaFileTextO from 'react-icons/lib/fa/file-text-o';


const style = {
  space: {
    margin: 12,
  },
};

const DrugSearch = () => (
  <div className="drug-search">
    <div className="centered-container">
      <div className="desktop-only spacing">
        <Paper zDepth={1}>
          <TextField
            floatingLabelText="What Drug?"
            style={style.space}
          />
          <TextField
            floatingLabelText="Where?"
            style={style.space}
          />
          <RaisedButton
            label="Search" secondary
            style={style.space}
            labelPosition="before"
            icon={<FaSearch />}
          />
        </Paper>
      </div>
      <div className="mobile-only ">
        <RaisedButton
          label="Search for Drug" secondary
          style={style.space}
          labelPosition="before"
          icon={<FaSearch />}
          labelStyle={style.space}
        />
      </div>
    </div>

    <div className="separator-spacing">
      <div className="separator"><span>or</span></div>
    </div>

    <div className="centered-container desktop-only">
      <RaisedButton
        label="Request drugs with prescription" primary
        style={{ ...style.space }}
        labelPosition="before"
        icon={<FaFileTextO />}
        labelStyle={style.space}
      />
    </div>

    <div className="centered-container mobile-only">
      <RaisedButton
        label="Request with prescription" primary
        style={{ ...style.space, minWidth: 250 }}
      />
    </div>

    <style jsx>{`
      .drug-search {
        background-color: #f5f5f5;
        padding: 2%;
      }
      .centered-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .spacing {
        padding: 1% 0;
      }
      .separator {
        width: 100%;
        border-bottom: 1px solid #60636a;
        text-align: center;
        height: 18px;
        margin-bottom: 15px;
      }
      .separator span {
        line-height: 15px;
        padding: 0 10px;
        background: #f5f5f5; /* Color of the element below */
        display: inline-block;
        margin-top: 10px;
        color: #60636a;
      }
      .separator-spacing {
        padding: 2% 30%;
      }
    `}</style>
  </div>
);

export default DrugSearch;
