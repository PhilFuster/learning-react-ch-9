import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import Agreement from './components/Agreement';
import BreakThings from './components/BreakThings';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import ErrorBoundary from './components/ErrorBoundaryV2';

/**
 * lazy tells react to wait to import Main till its initial render.
 * The Suspense component works much like the ErrorBoundary component. We wrap it around specfic components in our tree. Instead of falling back to an error message when an error occurs, the Suspense component renders a loading message when lazy loading occurs.
 * In this case it is rendering the ClimbingBoxLoader as the fallback
 */
function App() {
  const [agree, setAgree] = useState(false);
  const Main = lazy(() => import('./components/Main'));
  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;
  if (agree)
    return (
      <ErrorBoundary>
        <Suspense fallback={<ClimbingBoxLoader />}>
          <Main />
        </Suspense>
      </ErrorBoundary>
    );
}

export default App;
