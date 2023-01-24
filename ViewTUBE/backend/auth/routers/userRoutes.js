const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const router = express.Router();
const { GetProfile, RegisterUser,LoginUser,UpdateProfile,ChangePassword,ResetPassword } = require('../controllers/UserControllers');



function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
}

router.get('/profile',GetProfile);
router.post('/register',RegisterUser);
router.post('/login',passport.authenticate('local'),LoginUser);
router.post('/editProfile/', UpdateProfile);
router.post('/changePassword',ChangePassword);
router.post('/resetPassword',ResetPassword)


module.exports = router