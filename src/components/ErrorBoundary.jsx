import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Uncaught error in NAAV website:", error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            padding: "40px",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
            color: "#111",
          }}
        >
          <h1 style={{ fontSize: "28px", margin: 0 }}>Something went wrong</h1>
          <p style={{ maxWidth: "480px", color: "#555" }}>
            An unexpected error occurred while loading this page. Please try
            again.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            style={{
              padding: "12px 24px",
              borderRadius: "10px",
              border: "none",
              background: "#16a34a",
              color: "#fff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
