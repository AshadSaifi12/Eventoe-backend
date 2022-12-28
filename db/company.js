const mongoose=require('mongoose');

const companySchema = new mongoose.Schema({
    cinNo:String,
    companyName:String,
    url:String,
    OwnerName:String,
    email:String,
    contactNumber:Number,
    address:String,
    companyType:String, 
    otherCompanyType:String, 
    password:String
});
module.exports=mongoose.model('companies',companySchema);