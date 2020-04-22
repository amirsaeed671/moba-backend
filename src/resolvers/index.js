const Query = require("./queries");
const Mutation = require("./mutations");
const fields = require("./fields");

module.exports = {
    Query,
    Mutation,
    ...fields
}