
const { gql }  = require('apollo-server-express');


const hero = gql`
    enum ROLE {
        TANK
        MAGE
        SUPPORT
        FIGHTER
        ASSASSIN
    }

    type Hero{
        id: ID!
        name: String!
        role: ROLE!
    }

    extend type Query {
        allHeroes : [Hero]
    }

    input CreateHeroInput {
        name: String!
        role: ROLE!
    }

    extend type Mutation {
        createHero(input: CreateHeroInput!): Hero
    }
`;

module.exports = hero;