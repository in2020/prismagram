import {authenticateJwt} from './passport';

require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import schema from './schema';
import "./passport"
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({schema, context: ({request}) => ({request})});

server.express.use(authenticateJwt);

server.start({port: PORT}, () =>
    console.log(`Server running on port ${PORT}`)
);