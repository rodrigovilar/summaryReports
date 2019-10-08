'use strict';

export const API_VERSION = 'v1';

/**
 * Default URL of the back-end server.
 *
 * @type {string}
 */
export const SERVER_URL =
  'http://' +
  document.location.hostname +
  ':8080/softwareexample/' +
  API_VERSION +
  '/';
// export const SERVER_URL = 'https://' + document.location.hostname + ':5001/softwareexample/' + API_VERSION + '/';

export namespace LoginURL {
  export const BASE = 'login';
  export const REFRESH_TOKEN = 'refresh';
}

export namespace turmaURL {
  export const BASE = 'turmas';
}
export namespace UserURL {
  export const BASE = 'users';
  export const CHANGE_PASSWORD = BASE + '/current/password';
}
export namespace PermissionURL {
  export const BASE = 'permissions';
}
export namespace RoleURL {
  export const BASE = 'roles';
}
