module.exports = {
    User: {
        heroes: async (parent, _, {User}, ___) => {
            const user = await User.findById(parent.id || parent._id);

            if(user) {
                await user.populate('heroes').execPopulate();
            }
            return user.heroes; 
        }
    }
}
