var express = require('express');
var router = express.Router();
var updateMessages = require('./index').updateMessages
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('form', { title: 'Express' });
});
router.post(('/'),(req, res, next)=>{
    Object.assign(req.body, {added: new Date()})
    updateMessages(req.body)
    res.redirect('/')
    console.log(req.body)
  })

module.exports = {router};
