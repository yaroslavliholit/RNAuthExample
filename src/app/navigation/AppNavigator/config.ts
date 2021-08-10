import UsersList from '../../../modules/users/screens/UsersList';

enum AppScreensNames {
  UsersList = 'UsersList',
}

export const SCREENS = [
  {
    name: AppScreensNames.UsersList,
    component: UsersList,
  },
];

export const INITIAL_ROUTE_NAME = SCREENS[0].name;
