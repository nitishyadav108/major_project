if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const review = require("./models/reviews.js");
const allData = require("./init/data.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");
const session=require("express-session");
const {MongoStore} = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.engine("ejs", ejsMate);

const DbUrl=process.env.ATLASDB_URL;

main().then((res) => {
    console.log("connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(DbUrl);
}

const store = MongoStore.create({
    mongoUrl:DbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
});

store.on("error",()=>{
    console.log("ERROR IN MONGO SESSION STORE", err);
});

const sessionOptions={
    store,
     secret:process.env.SECRET,
     resave:false,
     saveUninitialized:true,
     cookie:{
        expires: Date.now() + 7 * 24 * 60 *60* 1000,
        maxAge:7 * 24 * 60 * 1000,
        httpOnly:true,
     }
};


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currentUser=req.user;
    next();
});

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found."));
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    console.log(err);
    res.status(status).render("./listings/error.ejs", { err });
});


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
