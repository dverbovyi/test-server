module.exports = {
    getAccounts,
    getRoles
}

function getAccounts(req, res) {
    res.json(require('./dummy-data/accounts.json'));
}

function getRoles(req, res) {
    res.json(require('./dummy-data/roles.json'));
}