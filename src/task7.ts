interface User {
  id: number;
  login: string;
  role: string;
}

const user: User = {
  id: 1,
  login: 'test',
  role: 'user',
}

const checkPermissionsDecorator = (roles: string[]): ((user: User) => boolean) => {
  return (user: User): boolean => {
      return roles.includes(user.role);
  }
}

const checkPermission = checkPermissionsDecorator(['admin']);
const hasPermissions = checkPermission(user);

console.log(hasPermissions);
