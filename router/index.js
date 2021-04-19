const router = require('express').Router();
const {redirectifLoggedin, redirectifLoggedout} = require('../middleware/auth.middleware');

const ac = require('../controllers/auth.controllers');

router.get('/', ac.HomeControllers);
router.route('/login')
    .get(redirectifLoggedin ,ac.LoginPageController)
    .post(ac.LoginController);

router.route('/register')
    .get(redirectifLoggedin, ac.RegisterPageController)
    .post(ac.RegisterController);

router.get('/dashboard', redirectifLoggedout,ac.DashboardController);

module.exports = router;