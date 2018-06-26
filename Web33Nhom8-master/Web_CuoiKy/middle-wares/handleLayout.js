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
<<<<<<< HEAD
            curUser: req.session.curUser
=======
            curUser: req.session.curUser,
            cartSummary: cartRepo.getNumberOfItems(req.session.cart)
 
>>>>>>> b54d0a17285303e00b84664bf91c6863329f07f2
        }

        next();
    });
}