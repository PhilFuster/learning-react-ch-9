import React from 'react';
import './elements.css';
const SiteLayout = ({ children, menu = (c) => null }) => {
  return (
    <div className='site-container'>
      <div
        style={{
          backgroundColor: '#00022B',
          color: '#ffffff',
          textAlign: 'start',
          padding: '10px',
          fontSize: '1.2rem',
        }}
      >
        {menu}
      </div>
      <div
        style={{
          backgroundColor: '#cfcfd1',
          textAlign: 'start',
          padding: '20px',
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default SiteLayout;
