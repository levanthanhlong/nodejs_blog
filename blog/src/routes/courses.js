const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

// router.use('/search', siteController.index)

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);


module.exports = router;
