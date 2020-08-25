// mostly code from reactjs.org/docs/error-boundaries.html
import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }
  // just a lifecycle method
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  // put your consolidated log data (sentry,...trackjs)
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  // similar to useEffect - called when props change
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    // navigate from reach router similar to redirect?
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.{" "}
          <Link to="/pet-me">Click here</Link> to back to the home page or wait
          five seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
