/* eslint-disable no-console */

function error(message: string, errorObj: Error) {
  // log to third-party library or cloud
  console.error(message, errorObj);
}

export default { error };
