import React from 'react';
import './elements.css';
const ErrorScreen = ({ error }) => {
  //
  // Handle or track the error before rendering message if you want
  //

  return (
    <div className='error'>
      <h3>We are sorry... something went wrong</h3>
      <p>We cannot process your request at this moment</p>
      <p>ERROR: {error.message}</p>
    </div>
  );
};
export default ErrorScreen;
