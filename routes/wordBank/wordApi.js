const router = require('express').Router();
const wordController = require('../../controllers/wordController');



//api/words
router.route('/')
    .get(wordController.findAll);

    
    
//api/words/cluepost
// router.route('/cluepost')
//     .get(wordController.findById)
//     .put(wordController.update);

//api/words/cluepost
router.route('/:id')
    .get(wordController.findById)




module.exports = router;

