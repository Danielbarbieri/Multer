var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const multer = require('multer');

/* GET home page. */

const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, './public/images/avatars'); 
  }, 
  filename: function (req, file, cb) { 
     cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})

const uploadFile = multer({ storage });

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/', indexController.viewCadastro);
router.post('/cadastro', indexController.salvarCadastro);

router.post('/register', uploadFile.single('avatar'), usersController.create);

module.exports = router;
