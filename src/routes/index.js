/* eslint-disable global-require */
import META_CONSTANTS from '../constants/metaHtmlConstants';

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/home',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/peintures',
      load: () => import(/* webpackChunkName: 'paintings' */ './paintingsPage'),
    },
    {
      path: '/sculptures',
      load: () =>
        import(/* webpackChunkName: 'sculptures' */ './sculpturesPage'),
    },
    {
      path: '/dessins',
      load: () => import(/* webpackChunkName: 'drawings' */ './drawingsPage'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/presentation',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/privacy',
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Page sans titre'} - Marion Casters`;
    route.description = route.description || '';
    route.keywords = META_CONSTANTS.KEYWORDS;

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
