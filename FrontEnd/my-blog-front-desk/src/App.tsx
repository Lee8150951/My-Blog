import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import RouterView from './router';

import 'reset-css';
import './styles/global.scss';

// 配置graphQL服务端通信地址
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  //link:
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <RouterView/>
      </HashRouter>
    </ApolloProvider>
  );
}

export default App;
