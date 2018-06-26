var express = require('express'),
    sha256 = require('crypto-js/sha256'),
    moment = require('moment');

var restrict = require('../middle-wares/restrict');
var accountRepo = require('../repos/accountRepo');

var router = express.Router();

router.get('/register', (req, res) => {
        res.render('account/register');
});

router.post('/register', (req, res) => {

    accountRepo.check(req.body.username).then(value =>
    {

        if(value[0].total == 0)
        {

            var dob = moment(req.body.dob, 'D/M/YYYY')
            .format('YYYY-MM-DDTHH:mm');
        var user = {
            username: req.body.username,
            password: sha256(req.body.password).toString(),
            name: req.body.name,
            email: req.body.email,
            dob: dob,
            permisson: 0
        };

            accountRepo.add(user).then(value => {
            res.render('account/register',vm);
            });
        }
    else
    {
       
         var vm = {
                    showError: true,
                };
        res.render('account/register', vm);
    }
    })
   
});

router.get('/login', (req, res) => {
    res.render('account/login');
});

router.post('/login', (req, res) => {
    var user = {
        username: req.body.username,
        password: sha256(req.body.password).toString()
    };
   
    accountRepo.login(user).then(rows => {
        if (rows.length > 0) {
            req.session.isLogged = true;
            req.session.curUser = rows[0];
            req.session.cart = [];

            var url = '/';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);
        } else {
            var vm = {
                showError: true,
                errorMsg: 'Login failed'
            };
            res.render('account/login', vm);
        }
    });
});

router.post('/logout', restrict, (req, res) => {
    req.session.isLogged = false;
    req.session.curUser = null;

    res.redirect(req.headers.referer);
});







router.get('/profile', (req, res) => {
  
     accountRepo.getProfile(req.session.curUser.f_Username).then(rows =>{

vm={
    user: rows[0],
}
    res.render('account/profile', vm);
     });
});


router.post('account/profile', (req, res) => {
  
   // Ông viết hàm post này nha thêm nút button vào form login hbs
   // mấy thông tin không cho sửa thì t thêm readonly vào rồi
    // ông viết form post rồi dùng req.body.tên của input để lấy thông tin xong viết hàm update user bên sql gọi ở đây là xong  

});

module.exports = router;