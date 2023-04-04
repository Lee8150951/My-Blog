// 配置GraphQL
import { ApolloClient, InMemoryCache } from '@apollo/client';

// 配置GraphQL服务端通信地址
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

export default client;