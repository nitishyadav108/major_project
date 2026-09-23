const User=require("../models/user");

module.exports.renderSignUpForm= (req, res) => {
    res.render("./user/signup.ejs");
};

module.exports.signUp=async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const userRegistered = await User.register(newUser, password);
        console.log(userRegistered);
        req.login(userRegistered,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to WonderResort");
            res.redirect("/listings");
        })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
    
};

module.exports.loginForm=(req,res)=>{
    res.render("./user/login.ejs");
};

module.exports.login= async(req,res)=>{
    req.flash("success","Welcome to wonderResort! You have logged in.");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logOut=(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You logged out now!");
        res.redirect("/listings");
    })
};