const gql = require('graphql-tag');

module.exports = gql`
    enum ROLE {
        TANK
        MAGE
        SUPPORT
        FIGHTER
        ASSASSIN
    }

    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        heroes: [Hero]!
    }

    type Hero{
        id: ID!
        name: String!
        role: ROLE!
    }

    type Query {
        allUsers: [User]
        user: User
    }

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
    }

    input CreateHeroInput {
        name: String!
        role: ROLE!
    }

    type Mutation {
        createUser(input: CreateUserInput): User!
        createHero(input: CreateHeroInput): Hero!
    }
`;

