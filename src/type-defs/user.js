const { gql }  = require('apollo-server-express');

const user = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        heroes: [Hero]
    }

    extend type Query {
        allUsers: [User]
        user: User
    }

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
    }

    extend type Mutation {
        createUser(input: CreateUserInput): User!
        createHero(input: CreateHeroInput): Hero!
    }
`;

module.exports = user;