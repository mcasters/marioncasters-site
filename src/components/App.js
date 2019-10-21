import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import PropTypes from 'prop-types';

import AppContext from '../context';

const App = ({ client, insertCss, context, children }) => (
  <ApolloProvider client={client}>
    <AppContext.Provider value={context}>
      <StyleContext.Provider value={{ insertCss }}>
        {children}
      </StyleContext.Provider>
    </AppContext.Provider>
  </ApolloProvider>
);

App.propTypes = {
  client: PropTypes.object.isRequired,
  insertCss: PropTypes.func.isRequired,
  context: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default App;
