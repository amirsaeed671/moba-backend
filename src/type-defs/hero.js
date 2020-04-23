
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

    input CreateHeroInput {
        name: String!
        role: ROLE!
    }

    input addHeroInput {
        name: String!
    }

    extend type Mutation {
        addHero(input: addHeroInput): User!
    }
`;

module.exports = hero;