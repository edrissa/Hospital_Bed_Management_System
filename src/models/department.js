const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 25
    }, 

    location:{
        type: String,
        trim: true,
        maxlength: 25
    }
}, 
{ timestamps: true }
)

departmentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id.toString()
     delete returnedObject._id
     delete returnedObject.__v
     // the password should not be revealed
     delete returnedObject.password
    }
})

const Department = mongoose.model('department', departmentSchema)
module.exports = Department