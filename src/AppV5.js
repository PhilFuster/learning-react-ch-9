import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import Agreement from './components/Agreement';
import GridLoader from 'react-spinners/GridLoader';
import ErrorBoundary from './components/ErrorBoundaryV2';
import Status from './components/Status';

/**
 *
 */
function App() {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Status />
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
