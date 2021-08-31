import Login from '../../../modules/accounts/screens/Login';
import Registration from '../../../modules/accounts/screens/Registration';

export enum AccountsScreenNames {
  Login = 'Login',
  Registration = 'Registration',
}

export const SCREENS = [
  {
    name: AccountsScreenNames.Login,
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: AccountsScreenNames.Registration,
    component: Registration,
    options: {
      headerShown: false,
    },
  },
];

export const INITIAL_ROUTE_NAME = SCREENS[0].name;
