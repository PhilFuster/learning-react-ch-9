import React from 'react';
import Callout from './components/Callout';
import './App.css';
import SiteLayout from './components/SiteLayout';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorScreen from './components/ErrorScreen';
import BreakThings from './components/BreakThings';

/**
 * We can compose ErrorBoundary components throughout our application.
 * This can allow us to scope our Errors to the component that caused them
 */
function App() {
  return (
    <div className='App'>
      <SiteLayout
        menu={
          <ErrorBoundary fallback={ErrorScreen}>
            <p>Site Layout Menu</p>
            <BreakThings />
          </ErrorBoundary>
        }
      >
        <>
          <ErrorBoundary fallback={ErrorScreen}>
            <Callout>
              Callout <BreakThings />
            </Callout>
          </ErrorBoundary>
          <ErrorBoundary>
            <h1>{`<Contents\\>`}</h1>
            <p>This is the main part of the example layout</p>
          </ErrorBoundary>
        </>
      </SiteLayout>
    </div>
  );
}

export default App;
