const mongoose = require("mongoose");



const formSchema=new mongoose.Schema({
    updated_On: { type: Date, default: Date.now },
    name:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
    address:{
        type:String,
       
       
    },
    city:{
        type:String,
       


    },
    state:{
        type:String,
        
    },
    phoneno:{
        type:Number,
       
    },
    companyname:{
        type:String,
       
    },
    teamandbackground:{
        type:String,
       
    },
    companyandproduct:{
        type:String,
       
    },
    problem:{
        type:String,
       
    },
    solution:{
        type:String,
    },
    valueproposition:{
        type:String,
       
    },
    district:{
        type:String,
       
    },
    competators:{
        type:String,
        
    },
    revenue:{
        type:Number,
       
    },
    potentialmarketsize:{
        type:String,
       
    },
    plan:{
        type:String,
       
    },
    type:{
        type:String,
        
    },
    businessproposal:{
        type:String,
    },
    status:{
        type:String,
        default:'New'
    },
    userId:String
    
   
    
});






module.exports = mongoose.model("form_Submited",formSchema);