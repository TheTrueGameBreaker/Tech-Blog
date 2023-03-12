const router = require('express').Router();
const { Post } = require('../../models');
const { id_auth } = require('../../utils/helpers');

// Gets all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Creates a post
router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
            post: req.body.post,
            user_id: req.body.user_id,
        });
        console.log(postData);
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;