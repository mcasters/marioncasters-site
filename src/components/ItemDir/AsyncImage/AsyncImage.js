/* eslint-disable no-undef */
/* eslint-disable camelcase */
import loadable from '@loadable/component';

const AsyncImage = loadable({
  chunkName() {
    return 'Image';
  },
  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }
    return false;
  },
  requireAsync: () =>
    import(
      /* webpackChunkName: "asyncImage" */
      '../Image'
    ),
  requireSync(props) {
    const id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    // eslint-disable-next-line no-eval
    return eval('module.require')(id);
  },
  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../Image');
    }
    // eslint-disable-next-line global-require
    return require('path').resolve(__dirname, '../Image');
  },
});
export default AsyncImage;
