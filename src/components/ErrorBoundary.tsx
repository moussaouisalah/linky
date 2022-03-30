import { Component, ErrorInfo, ReactNode } from "react";
import ErrorUI from "./ErrorUI";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    console.log("here");
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("heree");
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleRedirect = () => {
    this.setState({ hasError: false });
  };

  public render() {
    if (this.state.hasError) {
      return <ErrorUI onRedirect={this.handleRedirect} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
