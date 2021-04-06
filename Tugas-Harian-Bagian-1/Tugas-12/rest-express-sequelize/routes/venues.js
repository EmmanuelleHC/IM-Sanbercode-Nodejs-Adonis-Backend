var express = require('express');
var router = express.Router();


const VenueController =require('../controllers/venue')


router.post('/', VenueController.save)
router.get('/', VenueController.findAll)
router.get('/:id', VenueController.show)
router.put('/:id', VenueController.update)
router.delete('/:id', VenueController.delete)

module.exports = router;
