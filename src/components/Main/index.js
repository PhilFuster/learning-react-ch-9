import React from 'react';
import ErrorBoundary from '../ErrorBoundaryV2';
import SiteLayout from '../SiteLayout';
import Callout from '../Callout';
import Menu from '../Menu';

/**
 * Code Splitting demonstration. this Main component will be rendered after the user agrees to the conditions of Agreement component.
 * This goes with AppV4
 *
 */
const Main = () => {
  return (
    <SiteLayout menu={<Menu />}>
      <Callout>Welcome to the site</Callout>
      <ErrorBoundary>
        <h1>TODO: Home Page</h1>
        <p>Complete the main contents for this home page</p>
      </ErrorBoundary>
    </SiteLayout>
  );
};
export default Main;
