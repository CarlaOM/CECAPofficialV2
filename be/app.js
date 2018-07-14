var express = require('express');
const session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var compression = require('compression');
var filter = require('content-filter');
var cors = require('cors');
var db = require('./models/db');
var app = express();
process.env.TZ = 'America/La_Paz';

//middlewares
app
    .use(cors({
    origin:["http://localhost:4200","http://localhost:4201"],
    credentials:true}))
   .use(compression())
   .use('/', express.static(__dirname + '/mkt'))
   .use(morgan('dev'))
   .use(body_parser.urlencoded({ extended: true }))
   .use(body_parser.json())
   .use(filter())// filter injections nosql
   .use(function (req, res, next) {
      var token = typeof req.headers["authorization"] != 'undefined' ? req.headers["authorization"] : null;
      req.body.token = token;
      next();
   });

   app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}));

//    app.use(authChecker);
//    app.use(app.router);

//    function authChecker(req, res, next) {
//         if (req.session.auth || req.path==='/login') {
//             next();
//         } else {
//         res.redirect("/login");
//         }
//     }

app.get('/', function (req, res) {
   res.sendfile('mkt/index.html', { root: __dirname })
});

//routes 
app
   .use('/users', require('./routes/users'))
   .use('/events', require('./routes/events'))
   .use('/carteras', require('./routes/carteras'))
   .use('/facilitators', require('./routes/facilitators'))
   .use('/persons', require('./routes/persons'))
   .use('/programs', require('./routes/programs'))
   .use('/modules', require('./routes/modules'))
   .use('/offices', require('./routes/offices'))
   .use('/roles', require('./routes/roles'))   
   .use('/cajaUsuario', require('./routes/cajaUsuario'))
   .use('/company', require('./routes/company'))
   .use('/lists', require('./routes/lists'))  
   .use('/correlatives', require('./routes/correlatives'))
   .use('/cajaSucursal',require('./routes/cajaSucursal'))
   .use('/categoriaEgresos',require('./routes/categoriaEgresos'))
   .use('/modulars',require('./routes/modulars'))
   .use('/cajaPrincipal',require('./routes/cajaPrincipal'))

   .use('/Mkt_users', require('./routes/Mkt_users'))
   .use('/Mkt_events', require('./routes/Mkt_events'))
   .use('/Mkt_carteras', require('./routes/Mkt_carteras'))
   .use('/Mkt_facilitators', require('./routes/Mkt_facilitators'))
   
   .use('/Mkt_persons', require('./routes/Mkt_persons'))
   .use('/Mkt_programs', require('./routes/Mkt_programs'))
   .use('/Mkt_modules', require('./routes/Mkt_modules'))
   .use('/Mkt_offices', require('./routes/Mkt_offices'))
   .use('/Mkt_roles', require('./routes/Mkt_roles'))   
   .use('/Mkt_company', require('./routes/Mkt_company'))
   .use('/Mkt_lists', require('./routes/Mkt_lists'))  
   .use('/Mkt_correlatives', require('./routes/Mkt_correlatives'))
   .use('/Mkt_list',require('./routes/Mkt_list'))
   .use('/auth',require('./routes/auth'))

   .use(function (err, req, res, next) { 
      console.error(err.stack);
      return res.status(err.status || 500).send('Not Found');
   });

  

//   db.
//If need initialize db 
if (false){
   var init = require('./models/init');
//    init.clearCollections();
   init.initializer();
}
setTimeout(() => {
    db.connection();
}, 300000);


//start app
app.listen(80, function () {
   console.log('Example app listening at http://localhost');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', db.endMongoConnection)
   .on('SIGTERM', db.endMongoConnection);

module.exports = app;