/* eslint-disable global-require */
import { KEYWORDS } from '../constants/metaHtml';
import ROUTER from '../constants/router';

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
      path: ROUTER.HOME,
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: ROUTER.PEINTURES,
      load: () => import(/* webpackChunkName: 'paintings' */ './paintingsPage'),
    },
    {
      path: ROUTER.SCULPTURES,
      load: () =>
        import(/* webpackChunkName: 'sculptures' */ './sculpturesPage'),
    },
    {
      path: ROUTER.DESSINS,
      load: () => import(/* webpackChunkName: 'drawings' */ './drawingsPage'),
    },
    {
      path: ROUTER.PRESENTATION,
      load: () =>
        import(/* webpackChunkName: 'presentation' */ './presentationPage'),
    },
    {
      path: ROUTER.CONTACT,
      load: () => import(/* webpackChunkName: 'contact' */ './contactPage'),
    },
    {
      path: ROUTER.CONFIDENTIALITE,
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: ROUTER.ADMIN,
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
    route.keywords = KEYWORDS;

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
