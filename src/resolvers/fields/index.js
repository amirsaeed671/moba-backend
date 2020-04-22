module.exports = {
    User: {
        heroes(parent) {
            return parent.Heroes;
        }
    }
}
