var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
const updateMessages = (param)=>{
  console.log(`param`, param)
  messages.push(param)
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages });
});

module.exports = {router, updateMessages};
