const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');


const createTestServer = ctx => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        mockEntireSchema: false,
        mocks: true,
        context: () => ctx
    });

    return createTestClient(server);
}

module.exports = createTestServer