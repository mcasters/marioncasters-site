import React, { Component } from 'react';

import {
  getWindowWidth,
  getWindowHeight,
} from '../../../tools/lib/windowUtils';

function withViewport(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.handleResize = this.handleResize.bind(this);

      this.state = {
        viewport: { width: getWindowWidth(), height: getWindowHeight() },
      };
    }

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
      return <WrappedComponent {...this.props} viewport={viewport} />;
    }
  };
}

export default withViewport;
