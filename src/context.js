import { createContext } from 'react';

const AppContext = createContext({
  pathname: '',
  query: {},
});

export default AppContext;
