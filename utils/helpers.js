module.exports = {
    id_auth: (req, res, next) => {
        if(!req.session.loggedIn) {
            res.redirect('/login');
        } else {
            next();
        }
        console.log(req.session);
    }
}