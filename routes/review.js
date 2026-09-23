const express=require("express");
const app=express();
const router=express.Router({mergeParams:true});
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const listings=require("../routes/listing.js");
const review = require("../models/reviews.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn,reviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js");

router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));
router.delete("/:reviewId",isLoggedIn,reviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports=router;