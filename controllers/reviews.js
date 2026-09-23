const Listing=require("../models/listing");
const review=require("../models/reviews");

module.exports.createReview=async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview=new review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview._id);
    await newReview.save();
    await listing.save();
    req.flash("success","New review is created!");
    res.redirect(`/listings/${listing._id}`);
};


module.exports.deleteReview=async(req,res)=>{
     let {id,reviewId}=req.params;
     await Listing.findByIdAndUpdate(id,{$pull : {reviews: reviewId}});
     await review.findByIdAndDelete(reviewId);    
     req.flash("success","Review is deleted!");
     res.redirect(`/listings/${id}`);
};

