const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require("./resolvers");
const typeDefs = require('./type-defs');
const cors = require('cors');
const {connectDb, models} = require('./mongodb');

require('dotenv').config();

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context(_){
		return models;
	}
})

server.applyMiddleware({app, path: '/graphql'});

app.get('/', (_, res) => {
	res.redirect('/graphql');
});

connectDb().then(() => {
	app.listen({port}, function () {
		console.log(`🚀 Server ready at http://localhost:${port + server.graphqlPath}`);
	})
});
