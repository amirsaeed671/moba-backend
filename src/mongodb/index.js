const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    Heroes: {
        type: Array,
        required: false
    }
});

const HeroSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('user', UserSchema);
const HeroModel = mongoose.model('hero', HeroSchema);

const connectDb = () => {
    return mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
}

module.exports = {
    User: UserModel,
    Hero: HeroModel,
    connectDb
}



