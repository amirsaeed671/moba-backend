module.exports = {
    allUsers(_, __, {User}) {
        return User.find().exec();
    },

    user(_, {input}, {User}) {
        return User.findOne(input).exec();
    },

    allHeroes(_, __, {Hero}) {
        return Hero.find().exec();
    }
}
