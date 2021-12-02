const express = require('express');
const commentController = require('../controllers/comment.controller.js');

const router = express.Router();

router.get('/getall', commentController.getAll);
router.get('/getone', commentController.getOneByCustomer);
router.post('/create', commentController.createComment);
router.put('/update', commentController.updateComment);
router.delete('/delete', commentController.deleteComment);

module.exports = router;