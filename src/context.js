// @flow

import { createContext } from 'react';

export type AppContextTypes = {|
  pathname: string,
  query: Object,
  client: Object,
|};

const AppContext = createContext<AppContextTypes>({
  pathname: '',
  query: {},
  client: {},
});

export default AppContext;
