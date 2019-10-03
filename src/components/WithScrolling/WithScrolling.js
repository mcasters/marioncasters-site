import React, { Component } from 'react';

import { getScroll } from '../../../tools/lib/windowUtils';

function withScrolling(ComposedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        scroll: getScroll(),
      };
    }

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
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ComposedComponent {...this.props} scroll={this.state.scroll} />;
    }
  };
}

export default withScrolling;
