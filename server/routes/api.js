const express = require('express');
const apiController = require('../controllers/apiController.js');

const router = express.Router();

// / posts - GET
router.get('/posts', apiController.getPosts, (req, res) => {
    if(!res.locals.posts) {
        res.status(500).json({message: 'No posts found'});
    }
    res.status(200).json(res.locals.posts);
})

// /posts - POST
router.post('/posts', apiController.addPost, (req, res) => {
    res.sendStatus(200);
})

module.exports = router;