import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
          <div className="text-center max-w-md space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E53935]">
              / Something Went Wrong
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase text-white">
              UNEXPECTED ERROR.
            </h1>
            <p className="font-body text-sm text-[#B0B0B0] leading-relaxed">
              We hit a snag loading this page. Try refreshing, or head back to
              the homepage.
            </p>
            {this.state.error && (
              <p className="font-body text-xs text-[#666666] break-words">
                {this.state.error.message}
              </p>
            )}
            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={this.handleReset}
                className="btn-red-gradient px-6 py-3 rounded-xl font-body text-xs font-semibold uppercase tracking-wide text-white"
              >
                Try Again
              </button>
              <Link
                to="/"
                onClick={this.handleReset}
                className="px-6 py-3 rounded-xl border border-[#333333] font-body text-xs font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-black transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
