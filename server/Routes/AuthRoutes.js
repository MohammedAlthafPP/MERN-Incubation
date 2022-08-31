
const { register,login,getAllUsers,getUser,deleteUser,updateUser,blockUser,unblockUser,formSubmit,getAllRecords,
    updateStatusPending,updateStatusApprove,updateStatusDecline,getBookingSlots,selectedSlot



} = require("../Controllers/AuthControllers");

const router = require("express").Router();
//router.post("/",checkUser)
router.post('/register',register);
router.post('/login',login);
router.get('/users',getAllUsers);
router.get('/user/:id',getUser);
router.delete('/user/:id',deleteUser);
router.put('/user/:id',updateUser);
router.put('/block/:id',blockUser);
router.put('/unblock/:id',unblockUser);
router.post('/submit/:id',formSubmit);
router.get('/records',getAllRecords)
router.put('/pending/:id',updateStatusPending)
router.put('/approve/:id',updateStatusApprove)
router.put('/decline/:id',updateStatusDecline)
router.get('/slots',getBookingSlots)
router.post("/selected", selectedSlot)


module.exports =router;