import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, fallback: Fallback } = this.props;

    if (error) return <Fallback error={error}></Fallback>;
    return children;
  }
}
export default ErrorBoundary;
