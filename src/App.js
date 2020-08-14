import React from 'react';
import Callout from './components/Callout';
import './App.css';
import SiteLayout from './components/SiteLayout';

function App() {
  return (
    <div className='App'>
      <SiteLayout menu={<p>{`<Menu \\>`}</p>}>
        <>
          <Callout>Callout</Callout>
          <h1>{`<Contents\\>`}</h1>
          <p>This is the main part of the example layout</p>
        </>
      </SiteLayout>
    </div>
  );
}

export default App;
