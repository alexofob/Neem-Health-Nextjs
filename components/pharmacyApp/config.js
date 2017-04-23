import MdPerson from 'react-icons/lib/md/person';
import MdDashboard from 'react-icons/lib/md/dashboard';
import MdGroup from 'react-icons/lib/md/group';

const menus = [
  {
    href: '/pharmacyApp?route=dashboard',
    as: '/pharmacyApp',
    text: 'Dashboard',
    icon: MdDashboard,
    route: 'dashboard',
  },
  {
    href: '/pharmacyApp?route=profile',
    as: '/pharmacyApp/profile',
    text: 'Profile',
    icon: MdPerson,
    route: 'profile',
  },
  {
    href: '/pharmacyApp?route=manageUsers',
    as: '/pharmacyApp/manageUsers',
    text: 'Manage Users',
    icon: MdGroup,
    route: 'manageUsers',
  },
];

export default menus;
