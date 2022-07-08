var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const path = require('path');
const multer = require('multer');

/* GET home page. */

const multerDiskStorage = multer.diskStorage({
   destination: (req, file, callback) =>{
      const folder = path.join(__dirname, "../public/profileImages");
      callback(null, folder);
   },
   filename: (req, file, callback) =>{
      const imageName = Date.now() + file.originalname;
      callback(null, imageName);
   }
});

const uploadFile = multer({ storage: multerDiskStorage });



router.get('/', indexController.viewCadastro);
router.post('/cadastro', uploadFile.single('avatar'), indexController.salvarCadastro);


module.exports = router;
