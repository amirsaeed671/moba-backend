module.exports = {
    allUsers: async (_, __, {User}) => {
        const user = await User.find().lean().exec();
        return user.map(x => ({...x, id: x._id}));
    },

    user(_, {input}, {User}) {
        return User.findOne(input).exec();
    },

    allHeroes(_, __, {Hero}) {
        return Hero.find().exec();
    }
}
