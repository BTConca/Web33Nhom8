var categoryRepo = require('../repos/categoryRepo');
var producerRepo = require('../repos/producerRepo');
var cartRepo = require('../repos/cartRepo');
module.exports = (req, res, next) => {
    if (req.session.isLogged == undefined) {
        req.session.isLogged = false;
    }
    categoryRepo.loadAll().then(rows => {
        producerRepo.loadAll().then(rows2=>
        {
              res.locals.layoutVM = {
            categories: rows,
            producers: rows2,
            isLogged: req.session.isLogged,
            curUser: req.session.curUser,
            cartSummary: cartRepo.getNumberOfItems(req.session.cart),
             items: req.session.cart,
             totalAmount:cartRepo.getAmountOfItems(req.session.cart)
        }

        next();
    })
      
    });
}