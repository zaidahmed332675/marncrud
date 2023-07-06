import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from 'mongoose'

import { typeDefs } from "./models/typeDefs.js";
import { resolvers } from "./resolvers.js";

const db = await mongoose.connect('mongodb://localhost:27017/marn')

console.log(db?.connections[0]?._connectionString,' database')

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3001 },
});

console.info(`🚀 Server ready at ${url}`);