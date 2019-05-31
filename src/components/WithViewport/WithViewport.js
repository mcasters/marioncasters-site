import React, { Component } from 'react';

import {
  getWindowWidth,
  getWindowHeight,
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
      const viewport = { width: window.innerWidth, height: window.innerHeight };
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
