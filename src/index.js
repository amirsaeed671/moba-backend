const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require("./resolvers");
const typeDefs = require('./type-defs');
const cors = require('cors');
const {connectDb, User, Hero} = require('./mongodb');

require('dotenv').config();

const app = express();

app.use(cors());

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context(){
		return {
			User,
			Hero
		}
	}
})

server.applyMiddleware({app, path: '/graphql'});

app.get('/', (_, res) => {
	res.redirect('/graphql');
});

connectDb().then(() => {
	app.listen({port: 4000}, function () {
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
	})
});
