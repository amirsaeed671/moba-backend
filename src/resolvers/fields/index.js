module.exports = {
    User: {
        heroes: async (parent, _, {User}, ___) => {
            const user = await User.findById(parent.id);

            if(user) {
                await user.populate('heroes').execPopulate();
            }
            return user.heroes; 
        }
    }
}
