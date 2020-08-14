import React from 'react';

const Callout = ({ style, children }) => {
  return (
    <div
      {...style}
      style={{
        ...style,
        border: '3px double #AB1233',
        padding: '20px',
        borderWidth: '5px',
      }}
    >
      <p>{children}</p>
    </div>
  );
};
export default Callout;
