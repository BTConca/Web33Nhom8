var categoryRepo = require('../repos/categoryRepo');

module.exports = (req, res, next) => {
    categoryRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            categories: rows
        }

        next();
    });
}