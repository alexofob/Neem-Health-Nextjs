import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import { teal500 } from 'material-ui/styles/colors';

import menus from './config';

const isActive = (url, item) => {
  if (url && url.query && url.query.route && url.query.route === item.route) {
    return { color: teal500 };
  }
  return {};
};

const PharmAppSidebar = ({ url }) => (
  <Menu>
    {menus.map(item => (
      <MenuItem
        key={item.href}
        primaryText={item.text}
        leftIcon={<item.icon style={isActive(url, item)} />}
        onClick={() => url.push(item.href, item.as, { shallow: true })}
        style={isActive(url, item)}
      />
    ))}
  </Menu>
);

PharmAppSidebar.propTypes = {
  url: PropTypes.object.isRequired,
};

export default PharmAppSidebar;
