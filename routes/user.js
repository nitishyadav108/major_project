const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController=require("../controllers/users");


router.get("/", (req, res) => {
    res.redirect("/listings");
}); 

router.route("/signup")
      .get(userController.renderSignUpForm)
      .post( wrapAsync(userController.signUp));

router.route("/login")     
      .get(userController.loginForm)
      .post(saveRedirectUrl, passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),
   userController.login);

router.get("/logout",userController.logOut);

module.exports = router;
