var categoryRepo = require('../repos/categoryRepo');

module.exports = (req, res, next) => {
    if (req.session.isLogged == undefined) {
        req.session.isLogged = false;
    }
    categoryRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            categories: rows,
            isLogged: req.session.isLogged
        }

        next();
    });
}