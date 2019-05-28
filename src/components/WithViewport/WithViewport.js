import React, { Component } from 'react';

import {
  getWindowHeight,
  getWindowWidth,
} from '../../../tools/lib/windowUtils';

function withViewport(ComposedComponent) {
  return class WithViewport extends Component {
    state = {
      viewport: { width: getWindowWidth(), height: getWindowHeight() },
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
      const { viewport } = this.state;
      return <ComposedComponent {...this.props} viewport={viewport} />;
    }
  };
}

export default withViewport;
