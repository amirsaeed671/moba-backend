module.exports = {
    Query: {
        allUsers() {

        },
        user() {
            return {
                name: 'amir'
            }
        }
    },

    Mutation: {
        createUser(root, args, ctx, info){
            return 1;
        },

        createHero(root, args, ctx, info) {
            return 2
        }
    }
}