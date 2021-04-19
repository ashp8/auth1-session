let ac = {};
const { Cookie } = require('express-session');
const User = require('../models/user.model');

ac.HomeControllers = (req, res)=>{
    res.render('index');
};

ac.LoginController = async(req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        if(user.password == password){
            const nuser = {username: user.username, email:user.email};
            req.session.userInfo = nuser;
            return res.redirect('/dashboard');
        }
        console.log("error:");
        return res.redirect('/login');
    }
    return res.redirect('/login');
};
ac.LoginPageController = (req, res)=>{
    res.render('login');
};

ac.RegisterController = async (req, res)=>{
    const {username, email, password} = req.body;
    let user = await User.findOne({email});
    if(user){
        res.redirect('/register');
        console.log("email exists");
    }else{
        await User.create({username: username, email: email, password});
        res.redirect('/login');
    }
};
ac.RegisterPageController = (req, res)=>{
    res.render('register');
};

ac.DashboardController = (req, res)=>{
    userInfo = req.session.userInfo;
    res.render('dashboard', {userInfo});
}

module.exports = ac;