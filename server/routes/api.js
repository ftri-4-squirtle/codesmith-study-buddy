const express = require('express');
const apiController = require('../controllers/apiController.js');

const router = express.Router();

router.get('/posts', apiController.getPosts, (req, res) => {
    if(!res.locals.posts) {
        res.status(500).json({message: 'No posts found'});
    }
    res.status(200).json(res.locals.posts);
})

module.exports = router;