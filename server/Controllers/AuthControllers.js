const UserModel = require("../Models/UserModel");
const FormModel =require ("../Models/form_schema")
const SlotModel = require("../Models/SlotModel")
const jwt =require('jsonwebtoken');
const { set } = require("mongoose");


const maxAge = 3*24*60*60;

const createToken =(id)=>{
    return jwt.sign({id},"secret_key",{
        expiresIn:maxAge,
    })
};

const handleErrors = (err)=>{
    let errors = {name:"",email:"",password:""};

    if(err.message === "Incorrect Email") errors.email ="Enter a Vaild Email"
    if(err.message === "Incorrect Password") errors.email ="Enter a Vaild Password"

    if(err.code===11000) {
        errors.email = "Email is Already registered";
        return errors;
    }
    if(err.message === "User Blocked") errors.email = "You are Blocked"

    if(err.message.includes("User validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}

module.exports.register = async (req,res,next)=>{
    try {
        console.log(req.body,"====================register credunc...");
        const {email,password,name} =req.body;
        const user =await UserModel.create({name,email,password})
        const token = createToken(user.id)

        if(email === process.env.ADMIN_EMAIL){
            res.cookie("admin", token, {
                withCredentials: true,
                httpOnly: false,
                maxAge: maxAge * 1000,
            });
            res.status(201).json({value:true});
        } else {
            res.cookie("user", token, {
                withCredentials: true,
                httpOnly: false,
                maxAge: maxAge * 1000,
            });

            res.status(201).json({ user: user._id, created: true,value:false });
        }

    } catch (err) {
        console.log(err,"===================== register details Error catch");
        const errors =handleErrors(err);
        res.json({errors,created:false})
    }
};


module.exports.login = async (req,res,next)=>{

    try {
       
        const {email,password} =req.body;
        const user =await UserModel.login(email,password)
        

       
        const token = createToken(user.id)

        if(email === process.env.ADMIN_EMAIL){
            res.cookie("admin", token, {
                withCredentials: true,
                httpOnly: false,
                maxAge: maxAge * 1000,
            });
            res.status(201).json({value:true});
        } else {
            res.cookie("user", token, {
                withCredentials: true,
                httpOnly: false,
                maxAge: maxAge * 1000,
            });

            res.status(201).json({ user: user._id, created: true,value:false });
        }
  

  

    } catch (err) {
        console.log(err,"===================== Login details Error");
        const errors =handleErrors(err);
        res.json({errors,created:false})
    }

};

module.exports.getAllUsers = async (req,res,next)=>{
    try {
        const AllUsers =await UserModel.find({"role": {$ne: "admin"}})
        res.send(AllUsers)
      
        console.log(AllUsers);
    } catch (error) {
        console.log(error,"=======================Get All Users Error");
        
    }
}

module.exports.getUser = async (req,res,next)=>{
    try {
        const id = req.params.id
        const SingleUser = await UserModel.find({_id:id}).lean();
        res.send(SingleUser)
        
    } catch (error) {
        console.log(error,"====================View SingleUser  Error");
        
    }
}

module.exports.deleteUser = async (req,res,next)=>{
    try {

        const id = req.params.id;
        await UserModel.deleteOne({_id:id})
        res.send("User Deleted Successfully")

    } catch (error) {
        console.log(error,"====================User Edit Error");
        
    }
}

module.exports.updateUser = async (req,res,next)=>{
    try {

        const id = req.params.id;
        let updated = await UserModel.updateOne({_id:id},{$set : {
            name:req.body.name,
            email:req.body.email
        }})
        res.send("User Details Updated SuccessFully")

        
    } catch (error) {
        console.log(error,"====================User Edit Error");
        
    }
}


module.exports.blockUser = async (req,res,next)=>{
    try {

        const id = req.params.id;
        let updated = await UserModel.updateOne({_id:id},{$set : {
            isStatus:false,
           
        }})
        res.send("User Blocked")

        
    } catch (error) {
        console.log(error,"====================User Block Error");
        
    }
}


module.exports.unblockUser = async (req,res,next)=>{
    try {

        const id = req.params.id;
        let updated = await UserModel.updateOne({_id:id},{$set : {
            isStatus:true,
           
        }})
        res.send("User UnBlocked")

        
    } catch (error) {
        console.log(error,"====================User UnBlock Error");
        
    }
}


module.exports.formSubmit = async (req,res,next)=>{
    try {

        
        console.log(req.body,"===============form Submit req.body");

        const formValues = new FormModel( {
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            phoneno: req.body.phoneno,
            companyname: req.body.companyname,
            teamandbackground: req.body.teamandbackground,
            companyandproduct: req.body.companyandproduct,
            problem: req.body.problem,
            solution: req.body.solution,
            valueproposition: req.body.valueproposition,
            competators: req.body.competators,
            revenue: req.body.revenue,
            potentialmarketsize: req.body.potentialmarketsize,
            plan: req.body.plan,
            type: req.body.type,
            businessproposal: req.body.businessproposal,
            userId: req.params.id
          });


          const FormData = await formValues.save();
          res.json({Success:true})
        
    } catch (error) {
        console.log(error,"===================================== Form Submit Error");
        res.json({Success:false})
    }
}

module.exports.getAllRecords = async (req,res,next)=>{
    try {
        
    let records =  await FormModel.find({});
    res.send(records)

console.log(records,"aaaaaaaa");

    } catch (error) {
        console.log(error,"===================================== GET All Records Error");
        
    }
   
}


module.exports.updateStatusPending = async(req,res,next)=>{
    try {
        const id = req.params.id;
       let pending = await FormModel.updateOne({_id:id},{$set : {status : 'Pending'}})
       let records =  await FormModel.find({});
    res.send(records)
       
    } catch (error) {
        console.log(error,"===================================== Status Update Pending Error");
        
    }
}

module.exports.updateStatusApprove = async(req,res,next)=>{
    try {
        const id = req.params.id;
       let approve = await FormModel.updateOne({_id:id},{$set : {status : 'Approved'}})
       let records =  await FormModel.find({});
    res.send(records)
        
    } catch (error) {
        console.log(error,"===================================== Status Update Approve Error");
        
    }
}



module.exports.updateStatusDecline = async(req,res,next)=>{
    try {
        const id = req.params.id;
       let approve = await FormModel.updateOne({_id:id},{$set : {status : 'Declined'}})
       let records =  await FormModel.find({});
    res.send(records)
        
    } catch (error) {
        console.log(error,"===================================== Status Update Decline Error");
        
    }
}


module.exports.getBookingSlots = async (req, res) => {
    
    try {
        

       const slotsData =  await SlotModel.find()

       let response={}
       let slotA=[]
       let slotB=[]
       let slotC=[]
       let slotD=[]
       
 
       for (i of slotsData){
         if (i.slotName === 'A') {
           slotA.push(i)
         } else if (i.slotName === 'B') {
           slotB.push(i)
         } else if (i.slotName === 'C') {
           slotC.push(i)
         } else {
           slotD.push(i)
         }
       }
       
       response.A = slotA
       response.B = slotB
       response.C = slotC
       response.D = slotD
      
       res.status(200).json(response)

    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports.selectedSlot = async (req, res) => {
    
    try {
        console.table(req.body);
        const appdata = req.body
        const updatedSlot = await SlotModel.findByIdAndUpdate({_id:appdata._id},{isBooked:true,applicationId:appdata.company})
        await FormModel.findByIdAndUpdate({_id:appdata.company}, {slot:true})

         res.status(200).send("success")

    } catch (error) {
        res.status(500).send(error)
    }
}