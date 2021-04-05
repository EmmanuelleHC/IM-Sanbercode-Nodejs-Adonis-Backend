var express = require('express');
var router = express.Router();

/* GET users listing. */
const KaryawanController=require('../controllers/Karyawan')
router.get('/',KaryawanController.findAll);
router.post('/add_siswa',KaryawanController.addSiswa);


router.post('/register',KaryawanController.register);

module.exports = router;
