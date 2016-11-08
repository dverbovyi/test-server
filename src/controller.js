module.exports = {
    getAccounts,
    getRoles,
    notFound
}

function getAccounts(req, res) {
    res.json(require('./dummy-data/accounts.json'));
}

function getRoles(req, res) {
    res.json(require('./dummy-data/roles.json'));
}

function notFound(req, res) {
    res.status(404).send();
}