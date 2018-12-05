module.exports = {
    getAccounts,
    getRoles,
    getBlogs,
    notFound
}

function getAccounts(req, res) {
    res.json(require('./dummy-data/accounts.json'));
}

function getRoles(req, res) {
    res.json(require('./dummy-data/roles.json'));
}

function getBlogs(req, res) {
    res.json(require('./dummy-data/blogs.json'));
}

function notFound(req, res) {
    res.status(404).send();
}