import Login from '../../../modules/accounts/screens/Login';
import Registration from '../../../modules/accounts/screens/Registration';

enum AccountsScreenNames {
  Login = 'Login',
  Registration = 'Registration',
}

export const SCREENS = [
  {
    name: AccountsScreenNames.Login,
    component: Login,
  },
  {
    name: AccountsScreenNames.Registration,
    component: Registration,
  },
];

export const INITIAL_ROUTE_NAME = SCREENS[0].name;
