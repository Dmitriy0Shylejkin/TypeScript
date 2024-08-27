interface IUser {
  id: number;
  login: string;
  role: string;
}

const user: IUser = {
  id: 1,
  login: 'test',
  role: 'user',
};

const checkPermissionsDecorator = (roles: string[]): ((u: IUser) => boolean) => (u): boolean => roles.includes(u.role);

const checkPermission = checkPermissionsDecorator(['admin']);
const hasPermissions = checkPermission(user);

// eslint-disable-next-line no-console
console.log(hasPermissions);
