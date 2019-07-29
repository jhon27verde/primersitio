const express = require('express');
const router = express.Router();
const path = require('path');
//routes
router.get('/', (req, res)=>{
    //res.send('Hello world!');
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('index.html',{title:'Node First App'});
});

router.get('/contact', (req, res)=>{
    res.render('contact.html',{title:'Node First App'});
});

module.exports = router;