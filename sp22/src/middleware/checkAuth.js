exports.checkAuth = (req, res, next) => {
    const isAdmin = true;
    if(isAdmin){
        next();
    } else {
        res.redirect('/');
    }
}