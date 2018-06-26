var express = require('express');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');
var wnumb = require('wnumb');

<<<<<<< HEAD
var handleLayoutMDW = require('./middle-wares/handleLayout');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of c7effc1... Merge branch 'master' into admin

=======
var handle404MDW = require('./middle-wares/handle404');
var restrict = require('./middle-wares/restrict');
var trict = require('./middle-wares/restrict');
>>>>>>> parent of 69d39c3... Merge pull request #1 from BTConca/admin

var handleLayoutMDW = require('./middle-wares/handleLayout');
var homeController= require('./controllers/homeController');
<<<<<<< HEAD
var productController = require('./controllers/productController');
var accountController = require('./controllers/accountController');
var cartController = require('./controllers/cartController');
var searchController = require('./controllers/searchController');
=======
var homeController= require('./controllers/homeController');

>>>>>>> parent of 932b89b... Admin
=======
var adminController = require('./controllers/adminController');
var handle404MDW = require('./middle-wares/handle404');
>>>>>>> parent of c7effc1... Merge branch 'master' into admin
var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',  
    layoutsDir: 'views/_layouts/',
    helpers: {
        section: exphbs_section(),
        number_format: n => {
            var nf = wnumb({
                thousand: ','
            });
            return nf.to(n);
        }
    }
}));
app.set('view engine', 'hbs');

app.use(express.static(
    path.resolve(__dirname, 'public')
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
//ADMIN
>>>>>>> parent of c7effc1... Merge branch 'master' into admin
app.get('/admin',(req,res) =>
{
	res.render('admin', { title: 'my other page', layoutsDir: 'views/_layouts/', layout: 'admin' });
});
app.use('/admin', adminController);
//-End ADMIN

//app.use(handleLayoutMDW);

<<<<<<< HEAD
=======
>>>>>>> parent of 69d39c3... Merge pull request #1 from BTConca/admin
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
     
}))
app.use(handleLayoutMDW);
=======
>>>>>>> parent of 932b89b... Admin
=======
>>>>>>> parent of c7effc1... Merge branch 'master' into admin
app.get('/', (req, res) => {
    res.redirect('/home');
});
app.use(handleLayoutMDW);
app.use('/home', homeController);
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 69d39c3... Merge pull request #1 from BTConca/admin
app.use('/product', productController);
app.use('/account', accountController);
app.use('/search', searchController);
app.use('/cart', restrict, cartController);
app.use(handle404MDW);
=======
>>>>>>> parent of 932b89b... Admin
=======
app.use(handle404MDW);

>>>>>>> parent of c7effc1... Merge branch 'master' into admin
app.listen(3000, () => {
    console.log('server running on port 3000');
});