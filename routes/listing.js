const express=require("express");
const app=express();
const router=express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validateListing,geocodeListing}=require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});




router.route("/")
      .get(wrapAsync(listingController.index),wrapAsync(listingController.searchDestination))
      .post(isLoggedIn,upload.single('listing[image]'),validateListing, wrapAsync(listingController.createNewListing));
      

      
router.get("/create", isLoggedIn,listingController.renderNewForm);

router.route("/:id")
      .get( wrapAsync(listingController.showListing))
      .put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,geocodeListing, wrapAsync(listingController.editListing))
      .delete(isLoggedIn,isOwner, wrapAsync(listingController.deleteListing));

router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.editListingDetails));

module.exports=router; 