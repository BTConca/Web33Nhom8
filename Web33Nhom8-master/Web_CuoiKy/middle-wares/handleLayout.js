var categoryRepo = require('../repos/categoryRepo');
var cartRepo = require('../repos/cartRepo');
module.exports = (req, res, next) => {
    if (req.session.isLogged == undefined) {
        req.session.isLogged = false;
    }
    categoryRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            categories: rows,
            isLogged: req.session.isLogged,
            curUser: req.session.curUser,
            cartSummary: cartRepo.getNumberOfItems(req.session.cart)
 
        }

        next();
    });
}