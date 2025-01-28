import React from 'react'

class ErrorB extends React.Component {
    state = { hasError: false };
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    render() {
      return this.state.hasError ? <h1>Error occurred</h1> : this.props.children;
    }
  }
  export default ErrorB;