const router = require('express').Router();
const { User, Post, Comment } = require('../models');


// Sends to homepage
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({});
        const user = userData.map((users) =>
        users.get({ plain: true })
        );

        const postData = await Post.findAll({});
        const userPosts = postData.map((posts) =>
        posts.get({ plain: true })
        );

        res.render('homepage', {
            user,
            userPosts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(400).json(err);
    };
});

// Sends to login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    };

    res.render('login');
});

// Sends to create a post page
router.get('/post', (req, res) => {
    res.render('post', {
        loggedIn: req.session.loggedIn,
    });
})

module.exports = router;