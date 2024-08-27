"use strict";
const user = {
    id: 1,
    login: 'test',
    role: 'user',
};
const checkPermissionsDecorator = (roles) => (u) => roles.includes(u.role);
const checkPermission = checkPermissionsDecorator(['admin']);
const hasPermissions = checkPermission(user);
// eslint-disable-next-line no-console
console.log(hasPermissions);
