const mongoose = require("mongoose");
const { UserSchema, HeroSchema } = require("../schema");

const UserModel = mongoose.model('user', UserSchema);
const HeroModel = mongoose.model('hero', HeroSchema);

module.exports = {
    User: UserModel,
    Hero: HeroModel
}