const Listing=require("./models/listing");
const Review=require("./models/reviews");
const ExpressError=require("./utils/ExpressError");
const { listingSchema, reviewSchema } = require("./schema");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({
    accessToken: mapToken
});

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){

        if (req.method !== "DELETE") {
            req.session.redirectUrl = req.originalUrl;
        }
        req.flash("error","You must be logged in!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
        
    }
    next();
}

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currentUser._id)){
        req.flash("error","You are not the owner of this listing.")
          return  res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.reviewAuthor=async(req,res,next)=>{
    let {id,reviewId}=req.params;
    let review=await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currentUser._id)){
        req.flash("error","You have not created this review")
          return  res.redirect(`/listings/${id}`);
    }
    next();
};


module.exports.validateListing = (req, res, next) => {
    if (!req.body) {
        throw new ExpressError(400, "No data received from form");
    }
    let { error } = listingSchema.validate(req.body);
    console.log(error);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

module.exports.validateReview = (req, res, next) => {
    if (!req.body) {
        throw new ExpressError(400, "No data received from form");
    }
    let { error } = reviewSchema.validate(req.body);
    console.log(error);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

module.exports.geocodeListing = async (req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    }).send();

    if (!response.body.features.length) {
        req.flash("error", "Location not found!");
        return res.redirect("back");
    }

    req.body.listing.geometry = response.body.features[0].geometry;

    next();
};