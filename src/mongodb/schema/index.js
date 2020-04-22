const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
}, {versionKey: false});

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
    password: {
        type: Schema.Types.Mixed,
        required: true
    },
    Heroes: [HeroSchema] 
}, {versionKey: false});

module.exports = {
    UserSchema,
    HeroSchema
}