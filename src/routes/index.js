/* eslint-disable global-require */
import META_CONSTANTS from '../constants/metaHtmlConstants';
import ROUTER_CONSTANTS from '../constants/routerConstants';

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
      path: ROUTER_CONSTANTS.ROUTER.HOME,
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: ROUTER_CONSTANTS.ROUTER.PEINTURES,
      load: () => import(/* webpackChunkName: 'paintings' */ './paintingsPage'),
    },
    {
      path: ROUTER_CONSTANTS.ROUTER.SCULPTURES,
      load: () =>
        import(/* webpackChunkName: 'sculptures' */ './sculpturesPage'),
    },
    {
      path: ROUTER_CONSTANTS.ROUTER.DESSINS,
      load: () => import(/* webpackChunkName: 'drawings' */ './drawingsPage'),
    },
    {
      path: ROUTER_CONSTANTS.ROUTER.PRESENTATION,
      load: () =>
        import(/* webpackChunkName: 'presentation' */ './presentationPage'),
    },
    {
      path: ROUTER_CONSTANTS.ROUTER.CONTACT,
      load: () => import(/* webpackChunkName: 'contact' */ './contactPage'),
    },
    {
      path: ROUTER_CONSTANTS.ROUTER.CONFIDENTIALITE,
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: ROUTER_CONSTANTS.ROUTER.ADMIN,
      load: () => import(/* webpackChunkName: 'admin' */ './adminPage'),
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
    route.description = route.description || '-';
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
