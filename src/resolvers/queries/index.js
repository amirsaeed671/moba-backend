module.exports = {
    allUsers() {

    },
    user(_, {input}, {User}) {
        return User.findOne(input).exec();
    }
}
