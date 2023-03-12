const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{
                model: User,
                include: [{
                    model: Post
                }]
            }]
        });

        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.status(200).json(comments);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req,res) => {
    try {
        const commentData= await Comment.create({...req.body});
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const commentData = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!commentData) {
            res.status(400).json({ msg: 'No comments found with that specific id.'});
            return;
        } else {
            res.status(200).json(commentData);
        };
    } catch (err) {
        res.status(400).json(err);
    };
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;