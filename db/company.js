const mongoose=require('mongoose');

const companySchema = new mongoose.Schema({
    cinNo:Number,
    companyName:String,
    url:String,
    OwnerName:String,
    email:String,
    contactNumber:Number,
    address:String,
    companyType:String,  
    password:String
});
module.exports=mongoose.model('companies',companySchema);