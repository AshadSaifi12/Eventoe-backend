const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    contactNumber:Number,
    workType:String,
    workStatus:String,
    otherWorkType:String,
    noOfYears:Number,
    password:String
});
module.exports=mongoose.model('users',userSchema);