module.exports.redirectifLoggedin = (req, res, next)=>{
    if(req.session.userInfo){
        return res.redirect('/dashboard');
    }
    next();
}

module.exports.redirectifLoggedout = (req, res, next)=>{
    if(!req.session.userInfo){
        return res.redirect('/login');
    }
    next();

}