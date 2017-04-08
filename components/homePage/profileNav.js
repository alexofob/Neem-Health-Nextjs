import { Component, PropTypes } from 'react';
import Popover from 'material-ui/Popover';
import AuthMenu from './authMenu';

class ProfileNav extends Component {
  static propTypes = {
    picture: PropTypes.string.isRequired,
    logoutTo: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleMouseEnter = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <div>
        <img
          src={this.props.picture}
          alt="profile nav"
          className="profile-container"
          onMouseEnter={this.handleMouseEnter}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <AuthMenu logoutTo={this.props.logoutTo} />
        </Popover>
        <style jsx>
          {
            `
            .profile-container {
              position: relative;
              border: 1px solid #00AA8D;
              border-radius: 50%;
              height: 30px;
              padding: 1px;
              width: 30px;
              margin: 0 30px;
            }
            `
          }
        </style>
      </div>
    );
  }
}

export default ProfileNav;
