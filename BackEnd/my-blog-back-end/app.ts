import express, { Express } from 'express';
import routes from './route';
import dbConnect from './utils/dbConnect';
import { ApolloServer, gql } from 'apollo-server-express';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

// 处理schema
const typesArray = loadFilesSync(path.join(__dirname, './schema/*.graphql'));
const typeDefs = mergeTypeDefs(typesArray);

// 处理resolvers
const resolversArray = loadFilesSync(path.join(__dirname, './resolvers/*.ts'));
const resolvers = mergeResolvers(resolversArray);

const PORT: number = 4000;

const startServer = async () => {
  // 配置apollo
  const app: Express = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, async () => {
    await dbConnect();
    routes(app);
  });
}
startServer().then(() => {
  console.log(`App is running at http://localhost:${PORT}`);
});