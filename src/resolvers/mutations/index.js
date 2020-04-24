module.exports = {
    createUser: async (_, {input}, {User}) => {
        const user = new User(input);
        await user.save();

        const {_id, name, email, password} = await User.findById(user._id).exec();

        return {
            id: _id,
            name,
            email,
            password
        };
    },

    createHero: async (_, {input}, {Hero}) => {
        const hero = new Hero(input);
        await hero.save();

        const {_id, name, role} = await Hero.findById(hero._id).exec();

        return {
            id: _id,
            name,
            role
        }
    },


    addHero: async (_, {input}, {User, Hero}) => {
        const hero = await Hero.findOne({name: input.hero}).exec();
        const user = await User.findOne({email: input.email}).populate('heroes').exec();

        const findExistingHero = (user.heroes || []).filter(x => x.name === input.hero);

        if(findExistingHero.length) {
            throw new Error('you already owned this hero');
        } else {
            user.heroes.push(hero);
            await user.save();
        }

        return user;
    }
};