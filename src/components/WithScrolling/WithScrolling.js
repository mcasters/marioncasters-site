import React, { Component } from 'react';
import throttle from 'lodash/throttle';

import { getScrollY } from '../../../tools/lib/windowUtils';

function withScrolling(ComposedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        scrollPosition: getScrollY(),
      };

      const onChangeScroll = this.onChangeScroll.bind(this);
      this.delayedScroll = throttle(onChangeScroll, 200);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.delayedScroll, {
        passive: true,
      });
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.delayedScroll, {
        passive: true,
      });
    }

    onChangeScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollPosition = window.scrollY || window.pageYOffset;
        this.setState({ scrollPosition });
      }
    };

    render() {
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ComposedComponent {...this.props} scroll={this.state.scrollPosition} />
      );
    }
  };
}

export default withScrolling;
