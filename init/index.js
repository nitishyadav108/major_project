const mongoose=require("mongoose");
const Storagedata=require("./data.js");
const Listing=require("../models/listing.js");

main().then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wonderresort');
}

// const initDatabase= async ()=>{
//    await Listing.deleteMany({});
//    await Listing.insertMany(Storagedata.data)
// }

const initDatabase = async () => {
    await Listing.deleteMany({});

    const listingsWithOwner = Storagedata.data.map((listing) => {
        return {
            ...listing,
            owner: new mongoose.Types.ObjectId(
                "6a96d8d163d02ac80653f0f2"
            )
        };
    });

    await Listing.insertMany(listingsWithOwner);

    console.log("Database initialized");
};
console.log(Storagedata.data);

initDatabase();
