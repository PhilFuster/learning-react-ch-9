import React from 'react';
import Callout from './components/Callout';
import './App.css';
import SiteLayout from './components/SiteLayout';
import ErrorBoundary from './components/ErrorBoundaryV2';
import ErrorScreen from './components/ErrorScreen';
import BreakThings from './components/BreakThings';

/**
 * We can compose ErrorBoundary components throughout our application.
 * This can allow us to scope our Errors to the component that caused them
 *
 * Refactored ErrorBoundary to take a fallback function. If not one passed will default to ErrorScreen
 */
function App() {
  const CustomFallback = ({ error }) => {
    return <p style={{ color: 'red' }}>Non default Error Fallback</p>;
  };
  return (
    <div className='App'>
      <SiteLayout
        menu={
          <ErrorBoundary fallback={CustomFallback}>
            <p>Site Layout Menu</p>
            <BreakThings />
          </ErrorBoundary>
        }
      >
        <>
          <ErrorBoundary>
            <Callout>
              Callout <BreakThings />
            </Callout>
          </ErrorBoundary>
          <ErrorBoundary>
            <h1>&lt;Contents /&gt;</h1>
            <p>This is the main part of the example layout</p>
          </ErrorBoundary>
        </>
      </SiteLayout>
    </div>
  );
}

export default App;
