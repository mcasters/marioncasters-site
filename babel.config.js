// Babel configuration
// https://babeljs.io/docs/usage/api/

// eslint-disable-next-line func-names
module.exports = function(api) {
  const isDebug = !api.env('production');

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        forceAllTransforms: !isDebug, // for UglifyJS
        // modules: false,
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        debug: false,
      },
    ],
    '@babel/preset-flow',
    ['@babel/preset-react', { development: isDebug }],
  ];

  const plugins = [
    // Stage 2
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@loadable/babel-plugin',

    // Treat React JSX elements as value types and hoist them to the highest scope
    // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-constant-elements
    ...(isDebug ? [] : ['@babel/transform-react-constant-elements']),
    // Replaces the React.createElement function with one that is more optimized for production
    // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-inline-elements
    ...(isDebug ? [] : ['@babel/transform-react-inline-elements']),
    // Remove unnecessary React propTypes from the production build
    // https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types
    ...(isDebug ? [] : ['transform-react-remove-prop-types']),

    '@babel/plugin-transform-runtime',
  ];

  const ignore = ['node_modules', 'build'];

  return {
    presets,
    plugins,
    ignore,
  };
};
