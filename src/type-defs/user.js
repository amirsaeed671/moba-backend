const { gql }  = require('apollo-server-express');

const user = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        heroes: [Hero]
    }

    input GetUserInput {
        name: String!
    }

    extend type Query {
        allUsers: [User]
        user(input: GetUserInput!): User
    }

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
    }

    input AddHeroInput {
        email: String!
        hero: String!
    }

    extend type Mutation {
        createUser(input: CreateUserInput!): User!
        addHero(input: AddHeroInput!): User!
    }
`;

module.exports = user;