const mongoose = require('mongoose')

const wardSchema = new mongoose.Schema({
    wardName: {
        type: String,
        maxLength: 25
    }

    //To add building ID(FOREIGN-KEY)
},
{ timestamps: true }
)

wardSchema.set('toJSON', {
    transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id.toString()
     delete returnedObject._id
     delete returnedObject.__v
     // the password should not be revealed
     delete returnedObject.password
    }
})

const WARD = mongoose.model("ward", wardSchema)
module.exports = WARD