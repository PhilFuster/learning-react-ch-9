import React from 'react';

function safe(fn) {
  try {
    fn();
  } catch (error) {
    if (error instanceof Promise) {
      error.then(() => safe(fn));
    } else {
      throw error;
    }
  }
}
/**
 * This is a closure. Only through load status can error, promise, and response be accessed. They are closed off from the rest of the application.
 */
const loadStatus = (() => {
  let error, response;
  const promise = new Promise((resloves) => setTimeout((resolves) => 3000))
    .then(() => (response = 'success'))
    .catch((e) => (error = e));
  return function () {
    if (error) throw error;
    if (response) return response;
    throw promise;
  };
})();

const Status = () => {
  const status = safe(loadStatus());
  return <h1>status: {status}</h1>;
};
export default Status;
