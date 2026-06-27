import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div style={{
          padding: '20px',
          border: '1px solid var(--accent)',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 0, 0, 0.05)',
          color: 'var(--text)',
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '14px',
          margin: '10px 0'
        }}>
          <div style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '8px' }}>
            [!] Component Error
          </div>
          <div style={{ opacity: 0.8 }}>
            {this.state.error?.message || 'Failed to render component.'}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
