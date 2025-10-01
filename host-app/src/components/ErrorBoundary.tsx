import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  componentName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // TODO: Log the error to Sentry
    console.error("Error loading the remote component:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const componentName = this.props.componentName || "Component";

      return (
        <div
          style={{
            padding: "1rem",
            borderRadius: "4px",
            backgroundColor: "#ff5050",
            color: "#fff",
          }}
        >
          <p>{componentName} was not properly loaded.</p>
          <details style={{ marginTop: "10px" }}>
            <summary style={{ cursor: "pointer" }}>Error details</summary>
            <pre
              style={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "4px",
                overflow: "auto",
              }}
            >
              {this.state.error?.message}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
