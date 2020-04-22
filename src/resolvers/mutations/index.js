module.exports = {
    createUser: async (_, {input}, {User}) => {
        const user = new User(input);
        await user.save()

        const createdUser = await User.findById(user._id).exec();

        return {
            id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            password: createdUser.password,
        };
    },

    createHero(_, {input}, {Hero}) {
        return {
            name: "bane"
        }
    }
};