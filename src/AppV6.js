import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import Status from './components/Status';
import createResource from './utils/createResource';
import GridLoader from 'react-spinners/GridLoader';
import ErrorBoundary from './components/ErrorBoundaryV2';
/**
 *
 * Testing out createResource and Suspenseful data sources.
 * A suspenseful datasource needs to provide a function that handles all the states associated with loading data: pending, success, and error.
 */
const threeSecondsToGnar = new Promise((resolves) =>
  setTimeout(() => resolves({ gnar: 'gnarly!' }), 3000)
);
const resource = createResource(threeSecondsToGnar);

function Gnar() {
  const result = resource.read();
  return <h1>Gnar: {result.gnar}</h1>;
}
function App() {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Gnar />
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
