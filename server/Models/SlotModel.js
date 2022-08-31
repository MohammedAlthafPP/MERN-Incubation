const mongoose = require("mongoose")

const slotSchema = mongoose.Schema({
    slotName :{
        type: String,
        require: true,
    },
    slotNo :{
        type: Number,
        require: true,
    },
    isBooked :{
        type: Boolean,
        default: false,
        require: true,
    },
    applicationId:{
        type: String,
        require: true,
    },
    userId :{
        type: String,
        require: true,
    },
});






module.exports = mongoose.model("Slots",slotSchema);