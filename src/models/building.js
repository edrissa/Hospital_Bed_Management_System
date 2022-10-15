const mongoose = require('mongoose')

const buildingSchema = new mongoose.Schema({
    buildingName: {
        type: String,
        maxLength: 25
    }, 

    buildingLocation:{
        type: String,
        maxLength: 25
    }
}, 
{ timestamps: true }
)

buildingSchema.set('toJSON', {
    transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id.toString()
     delete returnedObject._id
     delete returnedObject.__v
     // the password should not be revealed
     delete returnedObject.password
    }
})

const Building = mongoose.model('building', buildingSchema)
module.exports = Building