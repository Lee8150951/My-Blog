import { ApolloClient, NormalizedCacheObject, gql } from '@apollo/client';
import client from './server';

// 请求导航栏信息
const navbarInfoQuery = async (client: ApolloClient<NormalizedCacheObject>) => {
  return client.query({
    query: gql`
      query navbarQuery {
        navbar {
          _id
          logo
          title
          theme
          search
          life
          classify
          board
          personal
        }
      }
    `
  })
};

// 请求首页头信息
const aboveInfoQuery = async (client: ApolloClient<NormalizedCacheObject>) => {
  return client.query({
    query: gql`
      query aboveQuery {
        above {
          _id
          title
          subtitle
          avatar
          background
        }
      }
    `,
  })
};

export {
  aboveInfoQuery,
  navbarInfoQuery
};