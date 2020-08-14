import React, { Component } from 'react';
import ErrorScreen from '../ErrorScreen';
class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, fallback: Fallback } = this.props;

    if (error && !this.props.fallback) return <ErrorScreen error={error} />;
    if (error) return <Fallback error={error} />;
    return children;
  }
}
export default ErrorBoundary;
