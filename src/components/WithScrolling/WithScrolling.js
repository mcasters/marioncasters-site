import React, { Component } from 'react';

import { getScroll } from '../../../tools/lib/windowUtils';

function withScrolling(ComposedComponent) {
  return class WithScrolling extends Component {
    state = {
      scroll: getScroll(),
    };

    componentDidMount() {
      window.addEventListener('scroll', this.updateScrolling);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.updateScrolling);
    }

    updateScrolling = () => {
      const scroll = window.pageYOffset;
      if (this.state.scroll !== scroll) {
        this.setState({ scroll });
      }
    };

    render() {
      return <ComposedComponent {...this.props} scroll={this.state.scroll} />;
    }
  };
}

export default withScrolling;
