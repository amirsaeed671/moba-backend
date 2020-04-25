const mongoose = require("mongoose");
const models = require("./models");

const connectDb = () => {
    return mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
}

module.exports = {
    models,
    connectDb
}



