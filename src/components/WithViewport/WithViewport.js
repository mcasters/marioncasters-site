import React, { Component } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import {
  getWindowHeight,
  getWindowWidth,
} from '../../../tools/lib/windowUtils';

function withViewport(ComposedComponent) {
  return class WithViewport extends Component {
    state = {
      viewport: canUseDOM
        ? { width: getWindowWidth(), height: getWindowHeight() }
        : { width: 1366, height: 768 }, // Default size for server-side rendering
    };

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      window.addEventListener('orientationchange', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('orientationchange', this.handleResize);
    }

    handleResize = () => {
      const viewport = { width: getWindowWidth(), height: getWindowHeight() };
      if (
        this.state.viewport.width !== viewport.width ||
        this.state.viewport.height !== viewport.height
      ) {
        this.setState({ viewport });
      }
    };

    render() {
      return (
        <ComposedComponent {...this.props} viewport={this.state.viewport} />
      );
    }
  };
}

export default withViewport;
