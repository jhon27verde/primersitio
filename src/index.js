const express = require('express');
//const morgan = require('morgan');
const path = require('path');
const app = express();

//settings
app.set('port',3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//routes
app.use(require('./views/routes'));

//middlewares


//static files
app.use(express.static(path.join(__dirname, 'public')));

//listening the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'));
});