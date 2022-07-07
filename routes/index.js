var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const multer = require('multer');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', indexController.viewCadastro);
router.post('/cadastro', indexController.salvarCadastro);

module.exports = router;
